/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useRef, useReducer, useState } from 'react';

import { Scale } from './config';
import {
  Scenario,
  Tiger,
  Person,
  StartButton,
  Jungle,
  Avatar,
  Speed,
  ItemIcon,
  GenerateItemsButton,
} from './styles';
import { Item } from './types';

const group = Scale;

export const Game = () => {
  const tigerDistance = useRef(100);
  const tigerSpeed = useRef(0);
  const prevIntervalId = useRef<number>();
  const iterationTimes = useRef(0);
  const [, forceUpdate] = useReducer(() => ({ x: 0 }), { x: 0 });
  const [inGame, setInGame] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  const initSpeed = () => {
    for (let i = 0; i < group.length; i++) {
      const person = group[i];
      const item = items[i];
      person.speed = parseFloat(
        (Math.random() * 10 + (item?.consumed ? 3 : 0)).toFixed(2)
      );
      if (!person.distance) {
        return;
      }
      if (person.distance > item?.position.left - 50) {
        item.consumed = true;
      }
    }
    tigerSpeed.current = parseFloat((Math.random() * 9 + 3).toFixed(2));
  };

  const initItems = () => {
    setItems(
      group.map((_, index) => ({
        position: {
          top: index * 60,
          left: 500 + Math.random() * 400,
        },
        consumed: false,
        icon: 'https://i.imgur.com/aQUuAtF.gif',
      }))
    );

    setTimeout(() => {
      console.log(items);
      setItems((items) =>
        items.map((item) => ({
          ...item,
          icon: 'https://previews.123rf.com/images/ahmadpp4/ahmadpp42008/ahmadpp4200800014/152764605-accelerate-arrow-right-for-logo-or-icon.jpg',
        }))
      );
    }, 3000);
  };

  if (
    (window.innerWidth < tigerDistance.current + 100 ||
      !group.find((person) => !person.dead)) &&
    inGame
  ) {
    setGameFinished(true);
    setInGame(false);
  }

  if (iterationTimes.current % 5 === 0) {
    initSpeed();
  }

  useEffect(() => {
    clearInterval(prevIntervalId.current);

    if (!inGame) {
      return;
    }

    prevIntervalId.current = window.setInterval(() => {
      iterationTimes.current = iterationTimes.current + 1;

      for (const person of group) {
        if (window.innerWidth < (person.distance || 0) + 50) {
          setGameFinished(true);
          setInGame(false);
          return;
        }
        if (person.dead || !person.distance) {
          continue;
        }
        if (person.distance < tigerDistance.current) {
          person.dead = true;
          continue;
        }
        person.distance += person.speed || 0;
      }
      tigerDistance.current += tigerSpeed.current;
      forceUpdate();
    }, 200);
  }, [inGame]);

  useEffect(() => {
    for (const person of group) {
      person.dead = false;
      person.distance = 300;
    }

    forceUpdate();

    return () => clearInterval(prevIntervalId.current);
  }, []);

  return (
    <Scenario>
      <Jungle src="https://cdn.gamedevmarket.net/wp-content/uploads/20191203191528/Preview-Jungle.jpg" />
      <Tiger
        css={css`
          left: ${tigerDistance.current - 100}px;
          top: ${group.length * 60 + 50}px;
        `}
      >
        <Speed
          css={css`
            right: 110px;
          `}
        >
          {tigerSpeed.current}
        </Speed>
        <img
          css={css`
            width: 100px;
            height: 100px;
          `}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcsNKVXC4SqYtt745znxW4U1t0v8CpF2ZbQ&usqp=CAU"
        />
      </Tiger>
      {group.map((person, index) => (
        <Person
          css={css`
            top: ${index * 60}px;
            left: ${person.distance || 0 - 50}px;
            border-width: 4px;
            border-style: solid;
            border-color: ${person.dead ? 'red' : 'transparent'};
          `}
          key={person.name}
        >
          {inGame && !person.dead ? <Speed>{person.speed}</Speed> : null}
          <Avatar src={person.avatar} />
        </Person>
      ))}
      {items.map((item) => {
        return item.consumed ? null : (
          <ItemIcon
            key={item.position.top}
            css={css`
              top: ${item.position.top}px;
              left: ${item.position.left}px;
            `}
            src={item.icon}
          />
        );
      })}
      {gameFinished
        ? [...group]
            .sort((a, b) => (b.distance || 0) - (a?.distance || 0))
            .map((person, index) => (
              <Person
                css={css`
                  top: inherit;
                  left: inherit;
                  bottom: 34px;
                  right: ${index * 60 + 16}px;
                  border: 4px solid transparent;
                `}
                key={person.name}
              >
                <Avatar src={person.avatar} />
              </Person>
            ))
        : null}
      <StartButton onClick={() => setInGame(true)}>Start Game</StartButton>
      <GenerateItemsButton onClick={() => initItems()}>
        Generate Items
      </GenerateItemsButton>
    </Scenario>
  );
};
