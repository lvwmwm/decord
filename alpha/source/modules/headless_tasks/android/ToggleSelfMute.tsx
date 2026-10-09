// Module ID: 18626
// Function ID: 18627
// Name: ToggleSelfMute
// Dependencies: [2064, 18622, 7050, 11062, 2]

// Module 18626 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7050 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11062 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18622 */;
import ChannelStore from "ChannelStore" /* 2064 */;
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
