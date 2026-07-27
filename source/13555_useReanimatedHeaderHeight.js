// Module ID: 13555
// Function ID: 104294
// Name: useReanimatedHeaderHeight
// Dependencies: [31, 13551]
// Exports: default

// Module 13555 (useReanimatedHeaderHeight)
import result from "result";


export default function useReanimatedHeaderHeight() {
  const context = React.useContext(importDefault(13551));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};
