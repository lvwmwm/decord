// Module ID: 18409
// Function ID: 18410
// Name: SelectVoiceChannel
// Dependencies: [2045, 4813, 18402, 5662, 4997, 4801, 2]

// Module 18409 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4801 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4997 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5662 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18402 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4813 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  ({ channelId: require, connectToVoice: importDefault } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      if (closure_2_1) {
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(closure_2_0);
      }
      if (RTCConnectionStore.getChannelId() === closure_2_0) {
        const channel = ChannelStore.getChannel(tmp5);
        if (null != channel) {
          const result = PrivateChannelCallUtils.navigateToVoiceChannel(channel);
        }
      } else {
        transitionToChannel.transitionToChannel(tmp5);
      }
      closure_0(true);
    });
  });
};
