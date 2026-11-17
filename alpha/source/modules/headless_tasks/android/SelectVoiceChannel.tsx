// Module ID: 20987
// Function ID: 20988
// Name: SelectVoiceChannel
// Dependencies: [5159, 6068, 20980, 6933, 6898, 6060, 2]

// Module 20987 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 6060 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6898 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6933 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20980 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6068 */;
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
