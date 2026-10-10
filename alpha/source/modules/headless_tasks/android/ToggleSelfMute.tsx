// Module ID: 18700
// Function ID: 18701
// Name: ToggleSelfMute
// Dependencies: [2065, 18696, 7056, 11102, 2]

// Module 18700 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7056 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11102 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18696 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
