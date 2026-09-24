// Module ID: 18405
// Function ID: 18406
// Name: ToggleDeafen
// Dependencies: [2045, 18402, 10311, 10296, 2]

// Module 18405 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10296 */;
import useDeafStates from "useDeafStates" /* 10311 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18402 */;
import ChannelStore from "ChannelStore" /* 2045 */;

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
