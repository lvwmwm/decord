// Module ID: 13329
// Function ID: 13330
// Name: ChannelSafeAreaBottom
// Dependencies: [10693, 13330, 13331, 2]

// Module 13329 (ChannelSafeAreaBottom)
import ChannelSafeAreaBottomNoopDefault from "ChannelSafeAreaBottomNoop" /* 13330 */;
import ChannelSafeAreaBottomAnimatedDefault from "ChannelSafeAreaBottomAnimated" /* 13331 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10693 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChannelSafeAreaBottomNoopDefault;
} else {
  importDefaultResult = ChannelSafeAreaBottomAnimatedDefault;
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
