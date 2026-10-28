// Module ID: 19806
// Function ID: 19807
// Name: ToggleDeafen
// Dependencies: [4856, 19803, 11717, 11684, 2]

// Module 19806 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11684 */;
import useDeafStates from "useDeafStates" /* 11717 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19803 */;
import ChannelStore from "ChannelStore" /* 4856 */;
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
