// Module ID: 20028
// Function ID: 20029
// Name: ToggleDeafen
// Dependencies: [4857, 20025, 11771, 11738, 2]

// Module 20028 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11738 */;
import useDeafStates from "useDeafStates" /* 11771 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20025 */;
import ChannelStore from "ChannelStore" /* 4857 */;
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
