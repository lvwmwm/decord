// Module ID: 20271
// Function ID: 20272
// Name: SelectVoiceChannel
// Dependencies: [4641, 5533, 20264, 6408, 6373, 5525, 2]

// Module 20271 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5525 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6373 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6408 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20264 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5533 */;
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
