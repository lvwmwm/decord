// Module ID: 20427
// Function ID: 20428
// Name: ToggleSelfMute
// Dependencies: [4892, 20423, 10405, 10502, 2]

// Module 20427 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 10405 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10502 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20423 */;
import ChannelStore from "ChannelStore" /* 4892 */;
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
