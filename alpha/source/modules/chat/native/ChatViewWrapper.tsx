// Module ID: 10986
// Function ID: 10987
// Name: ChatViewWrapper
// Dependencies: [10987, 10988, 10998, 2]

// Module 10986 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10988 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10998 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10987 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
