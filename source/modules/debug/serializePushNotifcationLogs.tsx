// Module ID: 10328
// Function ID: 79713
// Name: serializePushNotificationLogs
// Dependencies: [653, 587, 2]
// Exports: default

// Module 10328 (serializePushNotificationLogs)
import ME from "ME";

let closure_2;
let closure_3;
({ DEVICE_TOKEN: closure_2, DEVICE_VOIP_TOKEN: closure_3 } = ME);
const result = require("set").fileFinishedImporting("modules/debug/serializePushNotifcationLogs.tsx");

export default function serializePushNotificationLogs(arr) {
  const _require = arg1;
  if (0 === arr.length) {
    return "No logs";
  } else {
    const Storage = _require(587).Storage;
    let value = Storage.get(closure_2);
    const Storage2 = _require(587).Storage;
    value = Storage2.get(closure_3);
    let str2 = "";
    if (null != value) {
      let _HermesInternal = HermesInternal;
      str2 = "Device Token: " + value;
    }
    let str3 = "";
    if (null != value) {
      let _HermesInternal2 = HermesInternal;
      str3 = "Device Voip Token: " + value;
    }
    const mapped = arr.map((silent) => {
      let str = "Displayed";
      if (silent.silent) {
        str = "Silent";
      }
      if (closure_0) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + silent.channelId + " - " + silent.messageId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + silent.title + " - " + silent.content;
      }
      return "" + new Date(silent.receivedTimestamp).toISOString() + " [" + silent.type + "] " + str + " - " + combined;
    });
    const _HermesInternal3 = HermesInternal;
    return "" + str2 + "\n" + str3 + "\n\n" + mapped.join("\n");
  }
};
