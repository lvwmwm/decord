// Module ID: 20218
// Function ID: 20219
// Name: SelectVoiceChannel
// Dependencies: [4762, 5654, 20211, 6529, 6494, 5646, 2]

// Module 20218 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5646 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6494 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6529 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20211 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5654 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/headless_tasks/android/SelectVoiceChannel.tsx");

export default (arg0) => {
  ({ channelId: require, connectToVoice: importDefault } = arg0);
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      const tmp = importDefault;
      if (tmp) {
        const obj = SelectedChannelActionCreatorsDefault;
        const voiceChannel = obj.selectVoiceChannel(require);
      }
      if (RTCConnectionStore.getChannelId() === require) {
        const channel = ChannelStore.getChannel(tmp6);
        if (null != channel) {
          const obj3 = PrivateChannelCallUtils;
          const result = obj3.navigateToVoiceChannel(channel);
        }
      } else {
        const obj2 = transitionToChannel;
        obj2.transitionToChannel(require);
      }
      closure_0(true);
    });
  });
  return promise;
};
