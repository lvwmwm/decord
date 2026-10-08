// Module ID: 18465
// Function ID: 18466
// Name: SelectVoiceChannel
// Dependencies: [2063, 5108, 18458, 5885, 7476, 5101, 2]

// Module 18465 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5101 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5885 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7476 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18458 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
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
