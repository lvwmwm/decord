// Module ID: 20261
// Function ID: 20262
// Name: SelectVoiceChannel
// Dependencies: [4766, 5725, 20254, 6671, 8308, 6000, 2]

// Module 20261 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 6000 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6671 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8308 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20254 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5725 */;
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
