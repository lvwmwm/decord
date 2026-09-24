// Module ID: 18498
// Function ID: 18499
// Name: SelectVoiceChannel
// Dependencies: [2044, 4852, 18491, 5716, 5036, 4840, 2]

// Module 18498 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4840 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5036 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5716 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18491 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;

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
