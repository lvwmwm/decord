// Module ID: 20267
// Function ID: 20268
// Name: ToggleDeafen
// Dependencies: [4641, 20264, 10979, 10947, 2]

// Module 20267 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10947 */;
import useDeafStates from "useDeafStates" /* 10979 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20264 */;
import ChannelStore from "ChannelStore" /* 4641 */;
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
