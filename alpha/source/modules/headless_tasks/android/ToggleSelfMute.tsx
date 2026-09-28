// Module ID: 17761
// Function ID: 17762
// Name: ToggleSelfMute
// Dependencies: [2045, 17757, 6763, 9463, 2]

// Module 17761 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 6763 */;
import VoiceActionUtils from "VoiceActionUtils" /* 9463 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17757 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const muteStates = useMuteStates.getMuteStates({ channel });
      VoiceActionUtils.createMuteHandler(muteStates).onPress();
      closure_0(true);
    });
  });
};
