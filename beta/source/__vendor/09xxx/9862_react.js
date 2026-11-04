// Module ID: 9862
// Function ID: 9863
// Name: react
// Dependencies: [19]
// Exports: useAnimatedHeaderHeight

// Module 9862 (react)
import react from "react" /* 19 */;

let context = react.createContext(undefined);

export const AnimatedHeaderHeightContext = context;
export function useAnimatedHeaderHeight() {
  context = react.useContext(context);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a native stack navigator?");
    throw error;
  } else {
    return context;
  }
}
