// Module ID: 10891
// Function ID: 10892
// Name: ChatViewWrapper
// Dependencies: [10892, 10893, 10903, 2]

// Module 10891 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10893 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10903 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10892 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
