// Module ID: 19084
// Function ID: 19085
// Name: SelectVoiceChannel
// Dependencies: [2068, 5171, 19077, 6107, 7701, 5164, 2]

// Module 19084 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5164 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6107 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7701 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19077 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5171 */;
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
