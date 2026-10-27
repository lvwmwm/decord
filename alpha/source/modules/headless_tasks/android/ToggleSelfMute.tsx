// Module ID: 19506
// Function ID: 19507
// Name: ToggleSelfMute
// Dependencies: [4823, 19502, 7453, 11644, 2]

// Module 19506 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7453 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11644 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19502 */;
import ChannelStore from "ChannelStore" /* 4823 */;
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
