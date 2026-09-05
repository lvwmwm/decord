// Module ID: 17940
// Function ID: 17941
// Name: promise
// Dependencies: [17, 17932, 8378, 7759, 2]

// Module 17940 (promise)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    channelId(closure_1_1[1]).awaitStorage(() => {
      const invite = channelId(closure_2_1[2]).createInvite(closure_0, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        const RNCClipboard = closure_2_2.RNCClipboard;
        RNCClipboard.setString(callback(closure_2_1[3])(code.code));
        callback(true);
      });
    });
  });
};
