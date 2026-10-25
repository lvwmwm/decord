// Module ID: 19496
// Function ID: 19497
// Name: ToggleDeafen
// Dependencies: [4823, 19493, 11674, 11641, 2]

// Module 19496 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11641 */;
import useDeafStates from "useDeafStates" /* 11674 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19493 */;
import ChannelStore from "ChannelStore" /* 4823 */;
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
