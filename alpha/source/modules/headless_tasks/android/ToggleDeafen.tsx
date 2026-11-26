// Module ID: 20426
// Function ID: 20427
// Name: ToggleDeafen
// Dependencies: [4892, 20423, 10535, 10502, 2]

// Module 20426 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10502 */;
import useDeafStates from "useDeafStates" /* 10535 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20423 */;
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
