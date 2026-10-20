// Module ID: 10716
// Function ID: 10717
// Name: ChatViewWrapper
// Dependencies: [10717, 10718, 10728, 2]

// Module 10716 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10718 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10728 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10717 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
