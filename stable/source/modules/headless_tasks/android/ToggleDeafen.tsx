// Module ID: 20154
// Function ID: 20155
// Name: ToggleDeafen
// Dependencies: [4863, 20151, 12003, 11970, 2]

// Module 20154 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11970 */;
import useDeafStates from "useDeafStates" /* 12003 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20151 */;
import ChannelStore from "ChannelStore" /* 4863 */;
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
