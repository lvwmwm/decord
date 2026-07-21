// Module ID: 10885
// Function ID: 84585
// Dependencies: []

// Module 10885
const _module = require(dependencyMap[0]);
if (_module.isIOS()) {
  let importDefaultResult = importDefault(dependencyMap[1]);
} else {
  importDefaultResult = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
