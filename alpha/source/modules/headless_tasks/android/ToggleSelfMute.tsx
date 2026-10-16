// Module ID: 19094
// Function ID: 19095
// Name: ToggleSelfMute
// Dependencies: [2068, 19090, 7282, 11413, 2]

// Module 19094 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7282 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11413 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19090 */;
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
