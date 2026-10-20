// Module ID: 19198
// Function ID: 19199
// Name: ToggleDeafen
// Dependencies: [4800, 19195, 11544, 11511, 2]

// Module 19198 (ToggleDeafen)
import VoiceActionUtils from "VoiceActionUtils" /* 11511 */;
import useDeafStates from "useDeafStates" /* 11544 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19195 */;
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
