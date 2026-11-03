// Module ID: 20338
// Function ID: 20339
// Name: ToggleDeafen
// Dependencies: [4990, 20335, 12140, 12107, 2]

// Module 20338 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 12107 */;
import useDeafStates from "useDeafStates" /* 12140 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20335 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleDeafen.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const obj = useDeafStates;
      const deafStates = obj.getDeafStates(channel);
      const obj2 = VoiceActionUtils;
      obj2.createDeafHandler(deafStates).onPress();
      closure_0(true);
    });
  });
  return promise;
};
