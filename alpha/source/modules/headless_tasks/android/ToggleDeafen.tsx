// Module ID: 19387
// Function ID: 19388
// Name: ToggleDeafen
// Dependencies: [4821, 19384, 11633, 11600, 2]

// Module 19387 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11600 */;
import useDeafStates from "useDeafStates" /* 11633 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19384 */;
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
