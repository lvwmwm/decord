// Module ID: 19159
// Function ID: 19160
// Name: ToggleDeafen
// Dependencies: [2068, 19156, 11523, 11490, 2]

// Module 19159 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11490 */;
import useDeafStates from "useDeafStates" /* 11523 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19156 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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
