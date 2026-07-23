// Module ID: 1778
// Function ID: 19785
// Name: useWindowDimensions
// Dependencies: [57, 31, 27, 1572]
// Exports: useWindowDimensions

// Module 1778 (useWindowDimensions)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { Dimensions } from "get ActivityIndicator";
import { WindowDimensionsEvents } from "nativeEventEmitter";

let closure_3;
let closure_4;
const require = arg1;
({ useEffect: closure_3, useState: closure_4 } = result);
const size = Dimensions.get("window");
let closure_5 = { width: size.width, height: size.height };
WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
  let closure_5 = arg0;
});

export const useWindowDimensions = function useWindowDimensions() {
  const tmp = callback(callback3(closure_5), 2);
  let closure_0 = tmp[1];
  callback2(() => {
    const WindowDimensionsEvents = callback(outer1_1[3]).WindowDimensionsEvents;
    callback = WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
      lib(arg0);
    });
    callback(outer1_5);
    return () => {
      lib.remove();
    };
  }, []);
  return tmp[0];
};
