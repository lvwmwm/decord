// Module ID: 18629
// Function ID: 18630
// Name: SelectVoiceChannel
// Dependencies: [2064, 5109, 18622, 5886, 7481, 5102, 2]

// Module 18629 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5102 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5886 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7481 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18622 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
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
