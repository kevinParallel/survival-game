## Requirement

Need node installed in your laptop

## Installation

```
yarn
yarn start
```

open browser with `http://localhost:4019/`

## Config

Members can be configured in `src/game/config.ts`
You can switch group by modifying `src/game/index.tsx`. e.g.

```
import { Scale } from "./config";
// import { Onboarding } from "./config";

const group = Scale;
// const group = Onboarding;
```
