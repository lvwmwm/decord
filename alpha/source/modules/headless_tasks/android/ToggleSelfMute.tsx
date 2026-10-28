// Module ID: 19807
// Function ID: 19808
// Name: ToggleSelfMute
// Dependencies: [4856, 19803, 7489, 11684, 2]

// Module 19807 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7489 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11684 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19803 */;
import ChannelStore from "ChannelStore" /* 4856 */;
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
