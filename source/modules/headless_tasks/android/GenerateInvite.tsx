// Module ID: 17451
// Function ID: 17452
// Name: promise
// Dependencies: [17, 17443, 8595, 7450, 2]

// Module 17451 (promise)
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
