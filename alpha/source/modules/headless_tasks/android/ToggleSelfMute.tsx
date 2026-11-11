// Module ID: 20786
// Function ID: 20787
// Name: ToggleSelfMute
// Dependencies: [5092, 20782, 12932, 12956, 2]

// Module 20786 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 12932 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12956 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20782 */;
import ChannelStore from "ChannelStore" /* 5092 */;
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
