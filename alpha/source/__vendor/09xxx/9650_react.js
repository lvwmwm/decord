// Module ID: 9650
// Function ID: 9651
// Name: react
// Dependencies: [19]
// Exports: useAnimatedHeaderHeight

// Module 9650 (react)
import react from "react" /* 19 */;

let context = react.createContext(undefined);

export const AnimatedHeaderHeightContext = context;
export const useAnimatedHeaderHeight = function useAnimatedHeaderHeight() {
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
};
