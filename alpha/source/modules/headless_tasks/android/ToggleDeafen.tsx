// Module ID: 19222
// Function ID: 19223
// Name: ToggleDeafen
// Dependencies: [4800, 19219, 11555, 11522, 2]

// Module 19222 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11522 */;
import useDeafStates from "useDeafStates" /* 11555 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19219 */;
import ChannelStore from "ChannelStore" /* 4800 */;
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
