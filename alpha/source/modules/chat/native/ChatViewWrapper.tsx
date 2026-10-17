// Module ID: 10675
// Function ID: 10676
// Name: ChatViewWrapper
// Dependencies: [10676, 10677, 10688, 2]

// Module 10675 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10677 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10688 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10676 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
