// Module ID: 19199
// Function ID: 19200
// Name: ToggleSelfMute
// Dependencies: [4800, 19195, 7399, 11511, 2]

// Module 19199 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7399 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11511 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19195 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/headless_tasks/android/ToggleSelfMute.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = HeadlessTaskUtilsDefault;
    obj.awaitStorage(() => {
      const channel = ChannelStore.getChannel(channelId);
      const obj = useMuteStates;
      const muteStates = obj.getMuteStates({ channel });
      const obj2 = VoiceActionUtils;
      obj2.createMuteHandler(muteStates).onPress();
      closure_0(true);
    });
  });
  return promise;
};
