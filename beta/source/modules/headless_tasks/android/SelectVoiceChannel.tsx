// Module ID: 20566
// Function ID: 20567
// Name: SelectVoiceChannel
// Dependencies: [4989, 5893, 20559, 6761, 8008, 5885, 2]

// Module 20566 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5885 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6761 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8008 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20559 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5893 */;
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
