// Module ID: 13554
// Function ID: 104289
// Name: useReanimatedHeaderHeight
// Dependencies: [31, 13550]
// Exports: default

// Module 13554 (useReanimatedHeaderHeight)
import result from "result";


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(importDefault(13550));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};
