// Module ID: 20029
// Function ID: 20030
// Name: ToggleSelfMute
// Dependencies: [4857, 20025, 7512, 11738, 2]

// Module 20029 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7512 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11738 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20025 */;
import ChannelStore from "ChannelStore" /* 4857 */;
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
