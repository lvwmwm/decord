// Module ID: 20359
// Function ID: 20360
// Name: ToggleDeafen
// Dependencies: [4861, 20356, 10490, 10457, 2]

// Module 20359 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10457 */;
import useDeafStates from "useDeafStates" /* 10490 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20356 */;
import ChannelStore from "ChannelStore" /* 4861 */;
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
