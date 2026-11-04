// Module ID: 19537
// Function ID: 19538
// Name: SelectVoiceChannel
// Dependencies: [4855, 5746, 19530, 6666, 7899, 5739, 2]

// Module 19537 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5739 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6666 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7899 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19530 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5746 */;
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
