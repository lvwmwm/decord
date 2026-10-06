// Module ID: 9542
// Function ID: 9543
// Name: ChatViewWrapper
// Dependencies: [9543, 9544, 9555, 2]

// Module 9542 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 9544 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 9555 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 9543 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
