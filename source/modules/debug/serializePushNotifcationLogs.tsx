// Module ID: 10314
// Function ID: 79626
// Name: serializePushNotificationLogs
// Dependencies: []
// Exports: default

// Module 10314 (serializePushNotificationLogs)
const _module = require(dependencyMap[0]);
({ DEVICE_TOKEN: closure_2, DEVICE_VOIP_TOKEN: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/debug/serializePushNotifcationLogs.tsx");

export default function serializePushNotificationLogs(arr) {
  const require = arg1;
  if (0 === arr.length) {
    return "No logs";
  } else {
    const Storage = require(dependencyMap[1]).Storage;
    let value = Storage.get(closure_2);
    const Storage2 = require(dependencyMap[1]).Storage;
    value = Storage2.get(closure_3);
    let str2 = "";
    if (null != value) {
      const _HermesInternal = HermesInternal;
      str2 = "Device Token: " + value;
    }
    let str3 = "";
    if (null != value) {
      const _HermesInternal2 = HermesInternal;
      str3 = "Device Voip Token: " + value;
    }
    const mapped = arr.map((silent) => {
      let str = "Displayed";
      if (silent.silent) {
        str = "Silent";
      }
      if (arg1) {
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
