// Module ID: 20153
// Function ID: 20154
// Name: ToggleSelfMute
// Dependencies: [4863, 20149, 7526, 11969, 2]

// Module 20153 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7526 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11969 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20149 */;
import ChannelStore from "ChannelStore" /* 4863 */;
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
