// Module ID: 16629
// Function ID: 129674
// Name: promise
// Dependencies: [5, 27, 4123, 3, 16623, 6691, 2]

// Module 16629 (promise)
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
