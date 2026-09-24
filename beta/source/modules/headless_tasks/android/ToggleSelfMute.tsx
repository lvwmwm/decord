// Module ID: 18406
// Function ID: 18407
// Name: ToggleSelfMute
// Dependencies: [2045, 18402, 7621, 10296, 2]

// Module 18406 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7621 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10296 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18402 */;
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
