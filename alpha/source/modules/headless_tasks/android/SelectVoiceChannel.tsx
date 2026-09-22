// Module ID: 18406
// Function ID: 18407
// Name: SelectVoiceChannel
// Dependencies: [2042, 4780, 18399, 5630, 4964, 4768, 2]

// Module 18406 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4768 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4964 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5630 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18399 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4780 */;

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
