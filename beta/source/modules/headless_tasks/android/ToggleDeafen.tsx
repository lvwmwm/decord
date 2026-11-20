// Module ID: 20942
// Function ID: 20943
// Name: ToggleDeafen
// Dependencies: [5155, 20939, 13063, 13048, 2]

// Module 20942 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 13048 */;
import useDeafStates from "useDeafStates" /* 13063 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20939 */;
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
