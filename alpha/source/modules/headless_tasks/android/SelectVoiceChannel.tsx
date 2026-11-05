// Module ID: 20477
// Function ID: 20478
// Name: SelectVoiceChannel
// Dependencies: [4992, 5901, 20470, 6844, 8084, 5893, 2]

// Module 20477 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5893 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6844 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8084 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20470 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5901 */;
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
