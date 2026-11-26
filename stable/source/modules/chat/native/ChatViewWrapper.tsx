// Module ID: 12004
// Function ID: 12005
// Name: ChatViewWrapper
// Dependencies: [12005, 12006, 12022, 2]

// Module 12004 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 12006 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 12022 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 12005 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
