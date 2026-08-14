// Module ID: 13901
// Function ID: 13902
// Name: useReanimatedHeaderHeight
// Dependencies: [19, 13897]
// Exports: default

// Module 13901 (useReanimatedHeaderHeight)
import noop from "noop";


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(importDefault(13897));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};
