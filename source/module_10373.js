// Module ID: 10373
// Function ID: 80009
// Dependencies: [577830912, 131072, 1148452864, 1056964613]

// Module 10373
const _module = require(dependencyMap[0]);
if (_module.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = importDefault(dependencyMap[1]);
} else {
  importDefaultResult = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
