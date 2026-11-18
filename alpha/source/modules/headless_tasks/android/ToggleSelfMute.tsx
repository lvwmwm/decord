// Module ID: 20257
// Function ID: 20258
// Name: ToggleSelfMute
// Dependencies: [4672, 20253, 10945, 10969, 2]

// Module 20257 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 10945 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10969 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20253 */;
import ChannelStore from "ChannelStore" /* 4672 */;
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
