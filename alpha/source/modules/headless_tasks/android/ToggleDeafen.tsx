// Module ID: 20484
// Function ID: 20485
// Name: ToggleDeafen
// Dependencies: [4892, 20481, 10536, 10503, 2]

// Module 20484 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10503 */;
import useDeafStates from "useDeafStates" /* 10536 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20481 */;
import ChannelStore from "ChannelStore" /* 4892 */;
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
