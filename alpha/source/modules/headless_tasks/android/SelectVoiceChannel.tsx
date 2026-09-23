// Module ID: 18475
// Function ID: 18476
// Name: SelectVoiceChannel
// Dependencies: [2042, 4850, 18468, 5714, 5034, 4838, 2]

// Module 18475 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4838 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5034 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5714 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18468 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4850 */;

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
