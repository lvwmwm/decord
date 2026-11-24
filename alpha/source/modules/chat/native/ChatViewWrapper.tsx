// Module ID: 11653
// Function ID: 11654
// Name: ChatViewWrapper
// Dependencies: [11654, 11655, 11670, 2]

// Module 11653 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11655 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11670 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11654 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
