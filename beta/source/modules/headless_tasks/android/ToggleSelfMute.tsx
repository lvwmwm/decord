// Module ID: 20228
// Function ID: 20229
// Name: ToggleSelfMute
// Dependencies: [4762, 20224, 10990, 11014, 2]

// Module 20228 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 10990 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11014 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20224 */;
import ChannelStore from "ChannelStore" /* 4762 */;
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
