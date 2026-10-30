// Module ID: 20092
// Function ID: 20093
// Name: ToggleSelfMute
// Dependencies: [4858, 20088, 7520, 11931, 2]

// Module 20092 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7520 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11931 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20088 */;
import ChannelStore from "ChannelStore" /* 4858 */;
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
