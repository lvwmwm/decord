// Module ID: 11384
// Function ID: 11385
// Name: ChatViewWrapper
// Dependencies: [11385, 11386, 11403, 2]

// Module 11384 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11386 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11403 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11385 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
