// Module ID: 20941
// Function ID: 20942
// Name: ToggleSelfMute
// Dependencies: [5155, 20937, 13022, 13046, 2]

// Module 20941 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 13022 */;
import VoiceActionUtils from "VoiceActionUtils" /* 13046 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20937 */;
import ChannelStore from "ChannelStore" /* 5155 */;
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
