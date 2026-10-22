// Module ID: 19391
// Function ID: 19392
// Name: SelectVoiceChannel
// Dependencies: [4821, 5700, 19384, 6619, 7852, 5693, 2]

// Module 19391 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5693 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6619 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7852 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19384 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5700 */;
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
