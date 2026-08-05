// Module ID: 16878
// Function ID: 16879
// Name: promise
// Dependencies: [17, 16870, 7651, 7112, 2]

// Module 16878 (promise)
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
