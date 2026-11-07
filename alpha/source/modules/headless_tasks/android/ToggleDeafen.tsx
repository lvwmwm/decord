// Module ID: 20549
// Function ID: 20550
// Name: ToggleDeafen
// Dependencies: [4989, 20546, 12169, 12136, 2]

// Module 20549 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 12136 */;
import useDeafStates from "useDeafStates" /* 12169 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20546 */;
import ChannelStore from "ChannelStore" /* 4989 */;
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
