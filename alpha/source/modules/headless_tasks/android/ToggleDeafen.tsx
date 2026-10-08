// Module ID: 18461
// Function ID: 18462
// Name: ToggleDeafen
// Dependencies: [2063, 18458, 10920, 10889, 2]

// Module 18461 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10889 */;
import useDeafStates from "useDeafStates" /* 10920 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18458 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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
