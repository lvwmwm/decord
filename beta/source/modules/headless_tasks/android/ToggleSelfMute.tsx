// Module ID: 17761
// Function ID: 17762
// Name: ToggleSelfMute
// Dependencies: [2045, 17757, 6763, 9463, 2]

// Module 17761 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 6763 */;
import VoiceActionUtils from "VoiceActionUtils" /* 9463 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17757 */;
import ChannelStore from "ChannelStore" /* 2045 */;
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
