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
import Select from "@atlaskit/select";

export default () => (
  <DelayedProvider>
    <Delayed ms={3000}>
      <Select
        inputId="single-select-example"
        className="single-select"
        classNamePrefix="react-select"
        options={[
          { label: "Adelaide", value: "adelaide" },
          { label: "Brisbane", value: "brisbane" },
          { label: "Canberra", value: "canberra" },
          { label: "Darwin", value: "darwin" },
          { label: "Hobart", value: "hobart" },
          { label: "Melbourne", value: "melbourne" },
          { label: "Perth", value: "perth" },
          { label: "Sydney", value: "sydney" },
        ]}
        placeholder="Choose a city"
      />
    </Delayed>
  </DelayedProvider>
);
