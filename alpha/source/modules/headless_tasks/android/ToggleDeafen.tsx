// Module ID: 18757
// Function ID: 18758
// Name: ToggleDeafen
// Dependencies: [2065, 18754, 11135, 11102, 2]

// Module 18757 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11102 */;
import useDeafStates from "useDeafStates" /* 11135 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18754 */;
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
