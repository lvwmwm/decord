// Module ID: 20260
// Function ID: 20261
// Name: SelectVoiceChannel
// Dependencies: [4672, 5564, 20253, 6437, 6402, 5556, 2]

// Module 20260 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5556 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6402 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6437 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20253 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5564 */;
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
