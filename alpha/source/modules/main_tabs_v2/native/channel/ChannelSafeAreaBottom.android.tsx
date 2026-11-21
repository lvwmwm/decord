// Module ID: 13555
// Function ID: 13556
// Name: ChannelSafeAreaBottom
// Dependencies: [11764, 13556, 13557, 2]

// Module 13555 (ChannelSafeAreaBottom)
import ChannelSafeAreaBottomNoopDefault from "ChannelSafeAreaBottomNoop" /* 13556 */;
import ChannelSafeAreaBottomAnimatedDefault from "ChannelSafeAreaBottomAnimated" /* 13557 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11764 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChannelSafeAreaBottomNoopDefault;
} else {
  importDefaultResult = ChannelSafeAreaBottomAnimatedDefault;
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
