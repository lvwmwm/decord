// Module ID: 10379
// Function ID: 80032
// Dependencies: []

// Module 10379
const _module = require(dependencyMap[0]);
if (_module.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = importDefault(dependencyMap[1]);
} else {
  importDefaultResult = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
