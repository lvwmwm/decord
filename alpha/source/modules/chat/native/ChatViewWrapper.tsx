// Module ID: 10333
// Function ID: 10334
// Name: ChatViewWrapper
// Dependencies: [10334, 10335, 10346, 2]

// Module 10333 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10335 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10346 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10334 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
