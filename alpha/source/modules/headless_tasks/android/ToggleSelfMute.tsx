// Module ID: 20984
// Function ID: 20985
// Name: ToggleSelfMute
// Dependencies: [5159, 20980, 11663, 11687, 2]

// Module 20984 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 11663 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11687 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20980 */;
import ChannelStore from "ChannelStore" /* 5159 */;
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
