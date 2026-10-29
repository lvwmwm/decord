// Module ID: 20032
// Function ID: 20033
// Name: SelectVoiceChannel
// Dependencies: [4857, 5752, 20025, 6693, 7925, 5745, 2]

// Module 20032 (SelectVoiceChannel)
import transitionToChannel from "transitionToChannel" /* 5745 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6693 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7925 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20025 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5752 */;
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
