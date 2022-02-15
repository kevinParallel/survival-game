import React, { Suspense } from "react";
import { render } from "react-dom";

import { Game } from "./game";

render(
  <Suspense fallback={<div>Loading...</div>}>
    <Game />
  </Suspense>,
  document.getElementById("root")
);
