// Module ID: 19435
// Function ID: 19436
// Name: SelectVoiceChannel
// Dependencies: [4821, 5712, 19428, 6632, 7865, 5705, 2]

// Module 19435 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5705 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6632 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7865 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19428 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5712 */;
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
