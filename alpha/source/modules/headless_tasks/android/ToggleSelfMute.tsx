// Module ID: 20482
// Function ID: 20483
// Name: ToggleSelfMute
// Dependencies: [5019, 20478, 7621, 12145, 2]

// Module 20482 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 7621 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12145 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20478 */;
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
