// Module ID: 20590
// Function ID: 20591
// Name: ToggleDeafen
// Dependencies: [4991, 20587, 12178, 12145, 2]

// Module 20590 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 12145 */;
import useDeafStates from "useDeafStates" /* 12178 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20587 */;
import ChannelStore from "ChannelStore" /* 4991 */;
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
