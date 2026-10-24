// Module ID: 19492
// Function ID: 19493
// Name: ToggleSelfMute
// Dependencies: [4823, 19488, 7453, 11640, 2]

// Module 19492 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7453 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11640 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19488 */;
import ChannelStore from "ChannelStore" /* 4823 */;
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
