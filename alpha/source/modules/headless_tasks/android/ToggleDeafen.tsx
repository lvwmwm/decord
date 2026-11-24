// Module ID: 20257
// Function ID: 20258
// Name: ToggleDeafen
// Dependencies: [4766, 20254, 10391, 10358, 2]

// Module 20257 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 10358 */;
import useDeafStates from "useDeafStates" /* 10391 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20254 */;
import ChannelStore from "ChannelStore" /* 4766 */;
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
