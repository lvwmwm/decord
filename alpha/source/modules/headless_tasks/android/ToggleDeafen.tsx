// Module ID: 19036
// Function ID: 19037
// Name: ToggleDeafen
// Dependencies: [2065, 19033, 11429, 11396, 2]

// Module 19036 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11396 */;
import useDeafStates from "useDeafStates" /* 11429 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19033 */;
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
