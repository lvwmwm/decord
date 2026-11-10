// Module ID: 20591
// Function ID: 20592
// Name: ToggleSelfMute
// Dependencies: [4991, 20587, 7601, 12145, 2]

// Module 20591 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7601 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12145 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20587 */;
import ChannelStore from "ChannelStore" /* 4991 */;
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
