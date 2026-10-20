// Module ID: 18765
// Function ID: 18766
// Name: SelectVoiceChannel
// Dependencies: [2065, 5110, 18758, 5889, 7477, 5103, 2]

// Module 18765 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5103 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5889 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7477 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18758 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
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
