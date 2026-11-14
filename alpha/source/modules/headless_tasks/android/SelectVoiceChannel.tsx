// Module ID: 20938
// Function ID: 20939
// Name: SelectVoiceChannel
// Dependencies: [5155, 6071, 20931, 6935, 6900, 6063, 2]

// Module 20938 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 6063 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6900 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6935 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20931 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
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
