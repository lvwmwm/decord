// Module ID: 13490
// Function ID: 103835
// Name: useReanimatedHeaderHeight
// Dependencies: [31, 13486]
// Exports: default

// Module 13490 (useReanimatedHeaderHeight)
import result from "result";


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(importDefault(13486));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};
