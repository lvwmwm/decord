// Module ID: 10612
// Function ID: 10613
// Name: ChatViewWrapper
// Dependencies: [10613, 10614, 10625, 2]

// Module 10612 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10614 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10625 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10613 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
