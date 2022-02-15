export type PersonConfig = {
  name: string;
  avatar: string;
  dead?: boolean;
  speed?: number;
  distance?: number;
};

export type Item = {
  position: {
    top: number;
    left: number;
  };
  consumed: boolean;
  icon: string;
};
