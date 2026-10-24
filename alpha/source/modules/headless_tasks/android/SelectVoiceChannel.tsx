// Module ID: 19495
// Function ID: 19496
// Name: SelectVoiceChannel
// Dependencies: [4823, 5714, 19488, 6634, 7867, 5707, 2]

// Module 19495 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5707 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6634 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7867 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19488 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;
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
