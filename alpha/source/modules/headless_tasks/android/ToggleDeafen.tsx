// Module ID: 18797
// Function ID: 18798
// Name: ToggleDeafen
// Dependencies: [2065, 18794, 11205, 11172, 2]

// Module 18797 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11172 */;
import useDeafStates from "useDeafStates" /* 11205 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18794 */;
import ChannelStore from "ChannelStore" /* 2065 */;
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
