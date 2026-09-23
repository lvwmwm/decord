// Module ID: 18472
// Function ID: 18473
// Name: ToggleSelfMute
// Dependencies: [2042, 18468, 7673, 10345, 2]

// Module 18472 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7673 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10345 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18468 */;
import ChannelStore from "ChannelStore" /* 2042 */;

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
