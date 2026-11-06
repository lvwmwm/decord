// Module ID: 11393
// Function ID: 11394
// Name: ChatViewWrapper
// Dependencies: [11394, 11395, 11412, 2]

// Module 11393 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11395 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11412 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11394 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
