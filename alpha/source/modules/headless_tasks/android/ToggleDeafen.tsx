// Module ID: 18471
// Function ID: 18472
// Name: ToggleDeafen
// Dependencies: [2042, 18468, 10360, 10345, 2]

// Module 18471 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10345 */;
import useDeafStates from "useDeafStates" /* 10360 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18468 */;
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
