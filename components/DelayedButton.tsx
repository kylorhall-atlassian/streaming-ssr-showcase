/**
 * Simple component that delays render of the children
 */

import React, {
  createContext,
  ReactNode,
  useContext,
  useId,
  useRef,
} from "react";

import Delayed, { DelayedProvider } from "./Delayed";
import Button from "@atlaskit/button";

export default () => (
  <DelayedProvider>
    <Delayed ms={3000}>
      <Button appearance="primary">ADS Button</Button>
    </Delayed>
  </DelayedProvider>
);
