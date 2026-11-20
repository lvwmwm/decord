// Module ID: 20943
// Function ID: 20944
// Name: ToggleSelfMute
// Dependencies: [5155, 20939, 13024, 13048, 2]

// Module 20943 (ToggleSelfMute)
import useMuteStates from "useMuteStates" /* 13024 */;
import VoiceActionUtils from "VoiceActionUtils" /* 13048 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 20939 */;
import ChannelStore from "ChannelStore" /* 5155 */;
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
