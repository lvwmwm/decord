// Module ID: 16977
// Function ID: 16978
// Name: useReanimatedHeaderHeight
// Dependencies: [19, 16973]
// Exports: default

// Module 16977 (useReanimatedHeaderHeight)
import reactDefault from "react" /* 16973 */;
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
