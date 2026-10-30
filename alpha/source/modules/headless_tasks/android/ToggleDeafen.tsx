// Module ID: 20091
// Function ID: 20092
// Name: ToggleDeafen
// Dependencies: [4858, 20088, 11964, 11931, 2]

// Module 20091 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11931 */;
import useDeafStates from "useDeafStates" /* 11964 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20088 */;
import ChannelStore from "ChannelStore" /* 4858 */;
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
