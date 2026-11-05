// Module ID: 20474
// Function ID: 20475
// Name: ToggleSelfMute
// Dependencies: [4992, 20470, 7668, 12176, 2]

// Module 20474 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7668 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12176 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20470 */;
import ChannelStore from "ChannelStore" /* 4992 */;
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
