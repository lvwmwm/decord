// Module ID: 20363
// Function ID: 20364
// Name: SelectVoiceChannel
// Dependencies: [4861, 5820, 20356, 6766, 8407, 6095, 2]

// Module 20363 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 6095 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6766 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8407 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20356 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5820 */;
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
