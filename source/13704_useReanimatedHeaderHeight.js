// Module ID: 13704
// Function ID: 13705
// Name: useReanimatedHeaderHeight
// Dependencies: [19, 13700]
// Exports: default

// Module 13704 (useReanimatedHeaderHeight)
import noop from "noop";


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(importDefault(13700));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};
