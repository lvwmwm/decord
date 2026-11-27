// Module ID: 20485
// Function ID: 20486
// Name: ToggleSelfMute
// Dependencies: [4892, 20481, 10406, 10503, 2]

// Module 20485 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 10406 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10503 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20481 */;
import ChannelStore from "ChannelStore" /* 4892 */;
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
