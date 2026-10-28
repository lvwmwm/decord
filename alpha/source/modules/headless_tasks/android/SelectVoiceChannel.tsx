// Module ID: 19810
// Function ID: 19811
// Name: SelectVoiceChannel
// Dependencies: [4856, 5750, 19803, 6669, 7902, 5743, 2]

// Module 19810 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5743 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6669 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7902 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19803 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5750 */;
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
