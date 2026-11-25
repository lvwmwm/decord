// Module ID: 11768
// Function ID: 11769
// Name: ChatViewWrapper
// Dependencies: [11769, 11770, 11785, 2]

// Module 11768 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11770 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11785 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11769 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
