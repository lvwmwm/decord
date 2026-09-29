// Module ID: 18395
// Function ID: 18396
// Name: ToggleSelfMute
// Dependencies: [2041, 18391, 7619, 10299, 2]

// Module 18395 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7619 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10299 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18391 */;
import ChannelStore from "ChannelStore" /* 2041 */;

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
