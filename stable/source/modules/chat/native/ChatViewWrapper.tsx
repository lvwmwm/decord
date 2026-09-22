// Module ID: 11486
// Function ID: 11487
// Name: ChatViewWrapper
// Dependencies: [11487, 11488, 11498, 2]

// Module 11486 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11488 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11498 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11487 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
