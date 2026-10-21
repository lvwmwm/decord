// Module ID: 19300
// Function ID: 19301
// Name: ToggleSelfMute
// Dependencies: [4821, 19296, 7430, 11572, 2]

// Module 19300 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7430 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11572 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19296 */;
import ChannelStore from "ChannelStore" /* 4821 */;
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
