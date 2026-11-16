// Module ID: 20604
// Function ID: 20605
// Name: ToggleSelfMute
// Dependencies: [5019, 20600, 7631, 12168, 2]

// Module 20604 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7631 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12168 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20600 */;
import ChannelStore from "ChannelStore" /* 5019 */;
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
