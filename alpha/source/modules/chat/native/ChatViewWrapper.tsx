// Module ID: 12441
// Function ID: 12442
// Name: ChatViewWrapper
// Dependencies: [12442, 12443, 12458, 2]

// Module 12441 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 12443 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 12458 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 12442 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
