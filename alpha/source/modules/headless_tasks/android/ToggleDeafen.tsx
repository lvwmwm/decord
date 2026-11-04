// Module ID: 20425
// Function ID: 20426
// Name: ToggleDeafen
// Dependencies: [4990, 20422, 12199, 12166, 2]

// Module 20425 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 12166 */;
import useDeafStates from "useDeafStates" /* 12199 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20422 */;
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
