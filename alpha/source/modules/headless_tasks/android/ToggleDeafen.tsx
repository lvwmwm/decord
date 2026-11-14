// Module ID: 20934
// Function ID: 20935
// Name: ToggleDeafen
// Dependencies: [5155, 20931, 13061, 13046, 2]

// Module 20934 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 13046 */;
import useDeafStates from "useDeafStates" /* 13061 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20931 */;
import ChannelStore from "ChannelStore" /* 5155 */;
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
