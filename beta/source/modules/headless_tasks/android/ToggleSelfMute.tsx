// Module ID: 20563
// Function ID: 20564
// Name: ToggleSelfMute
// Dependencies: [4989, 20559, 7598, 12136, 2]

// Module 20563 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7598 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12136 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20559 */;
import ChannelStore from "ChannelStore" /* 4989 */;
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
