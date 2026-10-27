// Module ID: 19543
// Function ID: 19544
// Name: ToggleDeafen
// Dependencies: [4824, 19540, 11679, 11646, 2]

// Module 19543 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11646 */;
import useDeafStates from "useDeafStates" /* 11679 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19540 */;
import ChannelStore from "ChannelStore" /* 4824 */;
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
