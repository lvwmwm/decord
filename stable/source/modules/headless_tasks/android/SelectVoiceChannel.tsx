// Module ID: 18052
// Function ID: 18053
// Name: SelectVoiceChannel
// Dependencies: [1957, 4659, 18045, 5492, 4843, 4647, 2]

// Module 18052 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4647 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4843 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5492 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18045 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4659 */;

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
