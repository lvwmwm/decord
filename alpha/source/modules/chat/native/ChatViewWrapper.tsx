// Module ID: 10860
// Function ID: 10861
// Name: ChatViewWrapper
// Dependencies: [10861, 10862, 10872, 2]

// Module 10860 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10862 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10872 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10861 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
