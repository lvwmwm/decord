// Module ID: 20342
// Function ID: 20343
// Name: SelectVoiceChannel
// Dependencies: [4990, 5884, 20335, 6826, 8063, 5876, 2]

// Module 20342 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5876 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6826 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8063 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20335 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5884 */;
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
