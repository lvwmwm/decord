// Module ID: 20155
// Function ID: 20156
// Name: ToggleSelfMute
// Dependencies: [4863, 20151, 7526, 11970, 2]

// Module 20155 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7526 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11970 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20151 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const obj = useMuteStates;
      const muteStates = obj.getMuteStates({ channel });
      const obj2 = VoiceActionUtils;
      obj2.createMuteHandler(muteStates).onPress();
      closure_0(true);
    });
  });
  return promise;
};
