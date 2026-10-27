// Module ID: 19547
// Function ID: 19548
// Name: SelectVoiceChannel
// Dependencies: [4824, 5715, 19540, 6635, 7868, 5708, 2]

// Module 19547 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5708 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6635 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7868 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19540 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5715 */;
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
