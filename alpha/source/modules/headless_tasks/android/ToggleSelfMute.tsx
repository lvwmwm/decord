// Module ID: 19160
// Function ID: 19161
// Name: ToggleSelfMute
// Dependencies: [2068, 19156, 7333, 11490, 2]

// Module 19160 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7333 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11490 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19156 */;
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
