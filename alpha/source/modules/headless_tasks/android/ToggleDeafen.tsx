// Module ID: 20214
// Function ID: 20215
// Name: ToggleDeafen
// Dependencies: [4762, 20211, 11041, 11009, 2]

// Module 20214 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11009 */;
import useDeafStates from "useDeafStates" /* 11041 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20211 */;
import ChannelStore from "ChannelStore" /* 4762 */;
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
