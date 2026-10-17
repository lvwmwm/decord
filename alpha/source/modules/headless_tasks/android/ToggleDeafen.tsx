// Module ID: 19155
// Function ID: 19156
// Name: ToggleDeafen
// Dependencies: [2068, 19152, 11505, 11472, 2]

// Module 19155 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11472 */;
import useDeafStates from "useDeafStates" /* 11505 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19152 */;
import ChannelStore from "ChannelStore" /* 2068 */;
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
