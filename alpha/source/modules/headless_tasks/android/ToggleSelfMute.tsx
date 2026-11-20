// Module ID: 20088
// Function ID: 20089
// Name: ToggleSelfMute
// Dependencies: [4643, 20084, 10865, 10889, 2]

// Module 20088 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 10865 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10889 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20084 */;
import ChannelStore from "ChannelStore" /* 4643 */;
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
