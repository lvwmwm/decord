// Module ID: 18024
// Function ID: 18025
// Name: SelectVoiceChannel
// Dependencies: [2044, 4868, 18017, 5909, 5052, 4856, 2]

// Module 18024 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4856 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5052 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5909 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18017 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4868 */;

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
