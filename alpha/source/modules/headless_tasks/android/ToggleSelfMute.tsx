// Module ID: 18462
// Function ID: 18463
// Name: ToggleSelfMute
// Dependencies: [2063, 18458, 7047, 10889, 2]

// Module 18462 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7047 */;
import VoiceActionUtils from "VoiceActionUtils" /* 10889 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18458 */;
import ChannelStore from "ChannelStore" /* 2063 */;
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
