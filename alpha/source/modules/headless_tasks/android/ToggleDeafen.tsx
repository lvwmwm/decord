// Module ID: 18402
// Function ID: 18403
// Name: ToggleDeafen
// Dependencies: [2042, 18399, 10281, 10266, 2]

// Module 18402 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10266 */;
import useDeafStates from "useDeafStates" /* 10281 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18399 */;
import ChannelStore from "ChannelStore" /* 2042 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const deafStates = useDeafStates.getDeafStates(channel);
      VoiceActionUtils.createDeafHandler(deafStates).onPress();
      closure_0(true);
    });
  });
};
