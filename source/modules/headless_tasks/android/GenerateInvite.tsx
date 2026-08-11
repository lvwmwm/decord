// Module ID: 17034
// Function ID: 17035
// Name: promise
// Dependencies: [17, 17026, 7760, 7219, 2]

// Module 17034 (promise)
import { NativeModules } from "get ActivityIndicator";

const result = require("generateAcceptInviteOptions").fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    channelId(outer1_1[1]).awaitStorage(() => {
      const invite = channelId(outer2_1[2]).createInvite(closure_0, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        const RNCClipboard = outer2_2.RNCClipboard;
        RNCClipboard.setString(callback(outer2_1[3])(code.code));
        callback(true);
      });
    });
  });
};
