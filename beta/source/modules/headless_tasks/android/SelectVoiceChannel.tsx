// Module ID: 17766
// Function ID: 17767
// Name: SelectVoiceChannel
// Dependencies: [2051, 4860, 17759, 5724, 5044, 4848, 2]

// Module 17766 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 4848 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5044 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5724 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17759 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
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
