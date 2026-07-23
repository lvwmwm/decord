// Module ID: 4536
// Function ID: 39825
// Name: map
// Dependencies: [27, 3, 2]
// Exports: default

// Module 4536 (map)
import get_ActivityIndicator from "get ActivityIndicator";
import importDefaultResult from "timestamp";

let closure_0;
let closure_1;
let closure_2;
({ requireNativeComponent: closure_0, UIManager: closure_1, View: closure_2 } = get_ActivityIndicator);
importDefaultResult = new importDefaultResult("RequireNativeComponentOrDefault");
const map = new Map();
let result = require("set").fileFinishedImporting("utils/native/requireNativeComponentOrDefault.native.tsx");

export default function requireNativeComponentOrDefault(warnWhenMissing) {
  let componentFoundInstance;
  let componentMissingFallbackInstance;
  let componentName;
  ({ componentName, componentFoundInstance, componentMissingFallbackInstance } = warnWhenMissing);
  if (componentMissingFallbackInstance === undefined) {
    componentMissingFallbackInstance = closure_2;
  }
  let flag = warnWhenMissing.warnWhenMissing;
  if (flag === undefined) {
    flag = true;
  }
  if (closure_1.hasViewManagerConfig(componentName)) {
    if (!map.has(componentName)) {
      if (null == componentFoundInstance) {
        componentFoundInstance = callback(componentName);
      }
      const result = map.set(componentName, componentFoundInstance);
    }
    let value = map.get(componentName);
  } else {
    value = componentMissingFallbackInstance;
    if (flag) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.warn("" + componentName + " not found, you are likely on a branch override without the native code.");
      value = componentMissingFallbackInstance;
    }
  }
  return value;
};
