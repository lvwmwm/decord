// Module ID: 19299
// Function ID: 19300
// Name: ToggleDeafen
// Dependencies: [4821, 19296, 11605, 11572, 2]

// Module 19299 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11572 */;
import useDeafStates from "useDeafStates" /* 11605 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19296 */;
import ChannelStore from "ChannelStore" /* 4821 */;
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
