// Module ID: 11643
// Function ID: 11644
// Name: ChatViewWrapper
// Dependencies: [11644, 11645, 11660, 2]

// Module 11643 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11645 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11660 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11644 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
