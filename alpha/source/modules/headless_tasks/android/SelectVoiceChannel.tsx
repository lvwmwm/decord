// Module ID: 20442
// Function ID: 20443
// Name: SelectVoiceChannel
// Dependencies: [4990, 5898, 20435, 6841, 8079, 5890, 2]

// Module 20442 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5890 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6841 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8079 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20435 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
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
