// Module ID: 19156
// Function ID: 19157
// Name: ToggleSelfMute
// Dependencies: [2068, 19152, 7333, 11472, 2]

// Module 19156 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7333 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11472 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19152 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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
