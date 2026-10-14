// Module ID: 18801
// Function ID: 18802
// Name: SelectVoiceChannel
// Dependencies: [2065, 5114, 18794, 5894, 7488, 5107, 2]

// Module 18801 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5107 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5894 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7488 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18794 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5114 */;
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
