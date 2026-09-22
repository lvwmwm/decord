// Module ID: 18403
// Function ID: 18404
// Name: ToggleSelfMute
// Dependencies: [2042, 18399, 7590, 10266, 2]

// Module 18403 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7590 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10266 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18399 */;
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
