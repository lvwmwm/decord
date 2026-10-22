// Module ID: 19365
// Function ID: 19366
// Name: ToggleSelfMute
// Dependencies: [4821, 19361, 7437, 11589, 2]

// Module 19365 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7437 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11589 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19361 */;
import ChannelStore from "ChannelStore" /* 4821 */;
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
