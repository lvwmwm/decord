// Module ID: 19080
// Function ID: 19081
// Name: ToggleDeafen
// Dependencies: [2068, 19077, 11449, 11416, 2]

// Module 19080 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11416 */;
import useDeafStates from "useDeafStates" /* 11449 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19077 */;
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
