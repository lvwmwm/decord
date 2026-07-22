// Module ID: 10380
// Function ID: 80056
// Dependencies: [578158592, 131072, 1148452864, 1157627909]

// Module 10380
const _module = require(dependencyMap[0]);
if (_module.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = importDefault(dependencyMap[1]);
} else {
  importDefaultResult = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
