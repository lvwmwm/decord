// Module ID: 16666
// Function ID: 16667
// Name: useReanimatedHeaderHeight
// Dependencies: [19, 16662]
// Exports: default

// Module 16666 (useReanimatedHeaderHeight)
import reactDefault from "react" /* 16662 */;
import react from "react" /* 19 */;


export default function useReanimatedHeaderHeight() {
  const context = react.useContext(reactDefault);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};
