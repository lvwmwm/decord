// Module ID: 20227
// Function ID: 20228
// Name: ToggleDeafen
// Dependencies: [4762, 20224, 11046, 11014, 2]

// Module 20227 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11014 */;
import useDeafStates from "useDeafStates" /* 11046 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20224 */;
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
