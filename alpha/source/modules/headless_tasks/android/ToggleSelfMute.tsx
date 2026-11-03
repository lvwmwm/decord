// Module ID: 20339
// Function ID: 20340
// Name: ToggleSelfMute
// Dependencies: [4990, 20335, 7650, 12107, 2]

// Module 20339 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7650 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12107 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20335 */;
import ChannelStore from "ChannelStore" /* 4990 */;
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
