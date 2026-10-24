// Module ID: 19491
// Function ID: 19492
// Name: ToggleDeafen
// Dependencies: [4823, 19488, 11673, 11640, 2]

// Module 19491 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11640 */;
import useDeafStates from "useDeafStates" /* 11673 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19488 */;
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
