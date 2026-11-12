// Module ID: 20604
// Function ID: 20605
// Name: SelectVoiceChannel
// Dependencies: [5019, 5925, 20597, 6793, 8041, 5917, 2]

// Module 20604 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5917 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6793 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8041 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20597 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5925 */;
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
