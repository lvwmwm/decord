// Module ID: 10340
// Function ID: 10341
// Name: ChatViewWrapper
// Dependencies: [10341, 10342, 10353, 2]

// Module 10340 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10342 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10353 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10341 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
