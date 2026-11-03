// Module ID: 11372
// Function ID: 11373
// Name: ChatViewWrapper
// Dependencies: [11373, 11374, 11391, 2]

// Module 11372 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11374 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11391 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11373 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
