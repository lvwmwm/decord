// Module ID: 10912
// Function ID: 10913
// Name: ChatViewWrapper
// Dependencies: [10913, 10914, 10924, 2]

// Module 10912 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10914 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10924 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10913 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
