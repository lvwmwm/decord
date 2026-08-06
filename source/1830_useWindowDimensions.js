// Module ID: 1830
// Function ID: 1831
// Name: useWindowDimensions
// Dependencies: [32, 19, 17, 1624]
// Exports: useWindowDimensions

// Module 1830 (useWindowDimensions)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { Dimensions } from "get ActivityIndicator";
import { WindowDimensionsEvents } from "nativeEventEmitter";

let c3;
let c4;
const require = arg1;
({ useEffect: c3, useState: c4 } = noop);
const size = Dimensions.get("window");
let closure_5 = { width: size.width, height: size.height };
WindowDimensionsEvents.addListener("windowDidResize", (arg0) => {
  let closure_5 = arg0;
});

export const useWindowDimensions = () => {
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
