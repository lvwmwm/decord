// Module ID: 18128
// Function ID: 18129
// Name: ToggleDeafen
// Dependencies: [2051, 18125, 9702, 9687, 2]

// Module 18128 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 9687 */;
import useDeafStates from "useDeafStates" /* 9702 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18125 */;
import ChannelStore from "ChannelStore" /* 2051 */;
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
