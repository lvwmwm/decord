// Module ID: 20256
// Function ID: 20257
// Name: ToggleDeafen
// Dependencies: [4672, 20253, 11001, 10969, 2]

// Module 20256 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10969 */;
import useDeafStates from "useDeafStates" /* 11001 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20253 */;
import ChannelStore from "ChannelStore" /* 4672 */;
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
