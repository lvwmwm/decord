// Module ID: 19534
// Function ID: 19535
// Name: ToggleSelfMute
// Dependencies: [4855, 19530, 7485, 11675, 2]

// Module 19534 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7485 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11675 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 19530 */;
import ChannelStore from "ChannelStore" /* 4855 */;
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
