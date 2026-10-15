// Module ID: 13226
// Function ID: 13227
// Name: ChannelSafeAreaBottom
// Dependencies: [10601, 13227, 13228, 2]

// Module 13226 (ChannelSafeAreaBottom)
import ChannelSafeAreaBottomNoopDefault from "ChannelSafeAreaBottomNoop" /* 13227 */;
import ChannelSafeAreaBottomAnimatedDefault from "ChannelSafeAreaBottomAnimated" /* 13228 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10601 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChannelSafeAreaBottomNoopDefault;
} else {
  importDefaultResult = ChannelSafeAreaBottomAnimatedDefault;
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottom.android.tsx");

export default importDefaultResult;
