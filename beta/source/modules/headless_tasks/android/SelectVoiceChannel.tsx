// Module ID: 18398
// Function ID: 18399
// Name: SelectVoiceChannel
// Dependencies: [2041, 4811, 18391, 5660, 4995, 4799, 2]

// Module 18398 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4799 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4995 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5660 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18391 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4811 */;

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
