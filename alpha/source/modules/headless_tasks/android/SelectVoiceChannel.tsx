// Module ID: 19303
// Function ID: 19304
// Name: SelectVoiceChannel
// Dependencies: [4821, 5696, 19296, 6613, 7843, 5689, 2]

// Module 19303 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5689 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6613 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7843 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19296 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5696 */;
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
