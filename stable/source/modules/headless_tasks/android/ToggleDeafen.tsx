// Module ID: 17762
// Function ID: 17763
// Name: ToggleDeafen
// Dependencies: [2051, 17759, 9474, 9459, 2]

// Module 17762 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 9459 */;
import useDeafStates from "useDeafStates" /* 9474 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17759 */;
import ChannelStore from "ChannelStore" /* 2051 */;
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
