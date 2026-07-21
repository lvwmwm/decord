// Module ID: 7583
// Function ID: 60717
// Dependencies: []

// Module 7583
const _module = require(dependencyMap[0]);
if (_module.isFabric()) {
  let importDefaultResult = importDefault(dependencyMap[1]);
} else {
  importDefaultResult = importDefault(dependencyMap[2]).createAnimatedComponent(importDefault(dependencyMap[3]));
  const importDefaultResult1 = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/core/native/ReanimatedNativeView.tsx");

export default importDefaultResult;
