// Module ID: 11641
// Function ID: 11642
// Name: ChatViewWrapper
// Dependencies: [11642, 11643, 11653, 2]

// Module 11641 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11643 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11653 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11642 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
