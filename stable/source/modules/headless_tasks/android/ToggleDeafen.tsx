// Module ID: 20603
// Function ID: 20604
// Name: ToggleDeafen
// Dependencies: [5019, 20600, 12201, 12168, 2]

// Module 20603 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 12168 */;
import useDeafStates from "useDeafStates" /* 12201 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20600 */;
import ChannelStore from "ChannelStore" /* 5019 */;
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
