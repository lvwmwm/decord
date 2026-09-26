// Module ID: 18394
// Function ID: 18395
// Name: ToggleDeafen
// Dependencies: [2041, 18391, 10314, 10299, 2]

// Module 18394 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10299 */;
import useDeafStates from "useDeafStates" /* 10314 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18391 */;
import ChannelStore from "ChannelStore" /* 2041 */;

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
