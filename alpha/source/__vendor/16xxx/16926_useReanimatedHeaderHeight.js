// Module ID: 16926
// Function ID: 16927
// Name: useReanimatedHeaderHeight
// Dependencies: [19, 16922]
// Exports: default

// Module 16926 (useReanimatedHeaderHeight)
import reactDefault from "react" /* 16922 */;
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
