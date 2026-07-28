// Module ID: 5329
// Function ID: 45860
// Name: useIsScreenReaderEnabled
// Dependencies: [5, 57, 31, 27]
// Exports: useIsScreenReaderEnabled

// Module 5329 (useIsScreenReaderEnabled)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { AccessibilityInfo } from "get ActivityIndicator";

let closure_2;
let closure_3;
({ useEffect: closure_2, useState: closure_3 } = result);

export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  const tmp = callback(callback3(false), 2);
  let asyncGeneratorStep = tmp[1];
  callback2(() => {
    (() => {
      lib = lib(async () => {
        callback(yield outer4_4.isScreenReaderEnabled());
      });
      return function checkStatus() {
        return callback(...arguments);
      };
    })()();
    let asyncGeneratorStep = outer1_4.addEventListener("screenReaderChanged", (arg0) => {
      lib(arg0);
    });
    return () => {
      lib.remove();
    };
  }, []);
  return tmp[0];
};
