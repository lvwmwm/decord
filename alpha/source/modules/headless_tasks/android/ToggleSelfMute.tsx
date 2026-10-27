// Module ID: 19544
// Function ID: 19545
// Name: ToggleSelfMute
// Dependencies: [4824, 19540, 7454, 11646, 2]

// Module 19544 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7454 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11646 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19540 */;
import ChannelStore from "ChannelStore" /* 4824 */;
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
