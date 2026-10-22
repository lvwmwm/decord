// Module ID: 19388
// Function ID: 19389
// Name: ToggleSelfMute
// Dependencies: [4821, 19384, 7438, 11600, 2]

// Module 19388 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7438 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11600 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19384 */;
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
