// Module ID: 20360
// Function ID: 20361
// Name: ToggleSelfMute
// Dependencies: [4861, 20356, 10360, 10457, 2]

// Module 20360 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 10360 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10457 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20356 */;
import ChannelStore from "ChannelStore" /* 4861 */;
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
