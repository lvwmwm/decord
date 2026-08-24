// Module ID: 17250
// Function ID: 17251
// Name: promise
// Dependencies: [17, 17242, 8081, 7544, 2]

// Module 17250 (promise)
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
