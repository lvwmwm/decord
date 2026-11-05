// Module ID: 20473
// Function ID: 20474
// Name: ToggleDeafen
// Dependencies: [4992, 20470, 12209, 12176, 2]

// Module 20473 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 12176 */;
import useDeafStates from "useDeafStates" /* 12209 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20470 */;
import ChannelStore from "ChannelStore" /* 4992 */;
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
