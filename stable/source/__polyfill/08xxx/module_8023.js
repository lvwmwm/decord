// Module ID: 8023
// Function ID: 8024
// Dependencies: [19]
// Exports: useAnimatedHeaderHeight

// Module 8023
import noop from "module_19" /* 19 */;

let context = noop.createContext(undefined);

export const AnimatedHeaderHeightContext = context;
export const useAnimatedHeaderHeight = function useAnimatedHeaderHeight() {
  context = noop.useContext(context);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a native stack navigator?");
    throw error;
  } else {
    return context;
  }
};
