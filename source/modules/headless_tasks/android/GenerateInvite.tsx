// Module ID: 16678
// Function ID: 130010
// Name: promise
// Dependencies: [27, 16670, 7540, 7000, 2]

// Module 16678 (promise)
import { NativeModules } from "get ActivityIndicator";

const result = require("generateAcceptInviteOptions").fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    channelId(outer1_1[1]).awaitStorage(() => {
      const invite = channelId(outer2_1[2]).createInvite(closure_0, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        const RNCClipboard = outer3_2.RNCClipboard;
        RNCClipboard.setString(channelId(outer3_1[3])(code.code));
        outer1_0(true);
      });
    });
  });
};
