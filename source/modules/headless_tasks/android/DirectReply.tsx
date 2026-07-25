// Module ID: 16687
// Function ID: 130166
// Name: promise
// Dependencies: [5, 27, 4124, 3, 16681, 5685, 2]

// Module 16687 (promise)
import trackInvite from "trackInvite";
import { NativeModules } from "get ActivityIndicator";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import importDefaultResult from "timestamp";

importDefaultResult = new importDefaultResult("DirectReply");
let result = require("MESSAGE_GROUP_SPACING").fileFinishedImporting("modules/headless_tasks/android/DirectReply.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    const lib = arg0;
    outer1_5.log("Executing DirectReply");
    const PushNotificationAndroid = outer1_3.PushNotificationAndroid;
    const result = PushNotificationAndroid.markNotificationAsDirectReply(lib.channelId);
    lib(outer1_1[4]).awaitStorage(() => {
      function _sendMessage() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = outer3_2(tmp);
        return obj(...arguments);
      }
      outer2_5.log("Storage loaded");
      (function sendMessage(closure_0) {
        return _sendMessage(...arguments);
      })(closure_0);
    });
  });
};
