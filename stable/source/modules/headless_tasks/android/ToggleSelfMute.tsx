// Module ID: 17763
// Function ID: 17764
// Name: ToggleSelfMute
// Dependencies: [2051, 17759, 6764, 9459, 2]

// Module 17763 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 6764 */;
import VoiceActionUtils from "VoiceActionUtils" /* 9459 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17759 */;
import ChannelStore from "ChannelStore" /* 2051 */;
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
