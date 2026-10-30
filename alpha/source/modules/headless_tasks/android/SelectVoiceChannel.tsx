// Module ID: 20095
// Function ID: 20096
// Name: SelectVoiceChannel
// Dependencies: [4858, 5759, 20088, 6700, 7931, 5751, 2]

// Module 20095 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5751 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6700 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7931 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20088 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
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
