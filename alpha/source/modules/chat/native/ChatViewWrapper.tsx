// Module ID: 11235
// Function ID: 11236
// Name: ChatViewWrapper
// Dependencies: [11236, 11237, 11254, 2]

// Module 11235 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11237 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11254 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11236 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
