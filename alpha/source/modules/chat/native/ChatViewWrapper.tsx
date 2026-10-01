// Module ID: 11100
// Function ID: 11101
// Name: ChatViewWrapper
// Dependencies: [11101, 11102, 11112, 2]

// Module 11100 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11102 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11112 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11101 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
