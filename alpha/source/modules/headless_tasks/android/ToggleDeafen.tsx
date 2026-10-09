// Module ID: 18625
// Function ID: 18626
// Name: ToggleDeafen
// Dependencies: [2064, 18622, 11095, 11062, 2]

// Module 18625 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11062 */;
import useDeafStates from "useDeafStates" /* 11095 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18622 */;
import ChannelStore from "ChannelStore" /* 2064 */;
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
