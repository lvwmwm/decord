// Module ID: 20268
// Function ID: 20269
// Name: ToggleSelfMute
// Dependencies: [4641, 20264, 10923, 10947, 2]

// Module 20268 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 10923 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10947 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20264 */;
import ChannelStore from "ChannelStore" /* 4641 */;
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
