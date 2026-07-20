// Module ID: 13360
// Function ID: 101601
// Name: useReanimatedHeaderHeight
// Dependencies: []
// Exports: default

// Module 13360 (useReanimatedHeaderHeight)
let closure_2 = importAll(dependencyMap[0]);

export default function useReanimatedHeaderHeight() {
  const context = React.useContext(importDefault(dependencyMap[1]));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height using Reanimated. Are you inside a screen in a navigator with a header and your NavigationContainer is wrapped in ReanimatedScreenProvider?");
    throw error;
  } else {
    return context;
  }
};
