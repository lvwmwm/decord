// Module ID: 4532
// Function ID: 39777
// Name: map
// Dependencies: []
// Exports: default

// Module 4532 (map)
const _module = require(dependencyMap[0]);
({ requireNativeComponent: closure_0, UIManager: closure_1, View: closure_2 } = _module);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("RequireNativeComponentOrDefault");
const map = new Map();
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("utils/native/requireNativeComponentOrDefault.native.tsx");

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
