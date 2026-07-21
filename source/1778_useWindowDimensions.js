// Module ID: 1778
// Function ID: 19784
// Name: useWindowDimensions
// Dependencies: []
// Exports: useWindowDimensions

// Module 1778 (useWindowDimensions)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useState: closure_4 } = arg1(dependencyMap[1]));
const Dimensions = arg1(dependencyMap[2]).Dimensions;
const size = Dimensions.get("window");
let closure_5 = { width: size.width, height: size.height };
const WindowDimensionsEvents = arg1(dependencyMap[3]).WindowDimensionsEvents;
WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
  let closure_5 = arg0;
});

export const useWindowDimensions = function useWindowDimensions() {
  const tmp = callback(callback3(closure_5), 2);
  let closure_0 = tmp[1];
  callback2(() => {
    const WindowDimensionsEvents = callback(closure_1[3]).WindowDimensionsEvents;
    const callback = WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
      lib(arg0);
    });
    callback(closure_5);
    return () => {
      lib.remove();
    };
  }, []);
  return tmp[0];
};
