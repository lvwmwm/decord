// Module ID: 14568
// Function ID: 14569
// Name: useReanimatedHeaderHeight
// Dependencies: [19, 14564]
// Exports: default

// Module 14568 (useReanimatedHeaderHeight)
import noopDefault from "noop" /* 14564 */;
import closure_2 from "noop" /* 19 */;


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(noopDefault);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};
