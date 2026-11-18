// Module ID: 20944
// Function ID: 20945
// Name: SelectVoiceChannel
// Dependencies: [5155, 6061, 20937, 6925, 6890, 6053, 2]

// Module 20944 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 6053 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6890 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6925 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20937 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6061 */;
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
