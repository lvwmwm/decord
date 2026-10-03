// Module ID: 18107
// Function ID: 18108
// Name: ToggleSelfMute
// Dependencies: [2051, 18103, 6848, 9687, 2]

// Module 18107 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 6848 */;
import VoiceActionUtils from "VoiceActionUtils" /* 9687 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18103 */;
import ChannelStore from "ChannelStore" /* 2051 */;
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
