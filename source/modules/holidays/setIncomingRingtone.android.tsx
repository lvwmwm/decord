// Module ID: 16476
// Function ID: 16477
// Name: setIncomingRingtone
// Dependencies: [17, 2]
// Exports: setIncomingRingtone

// Module 16476 (setIncomingRingtone)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/holidays/setIncomingRingtone.android.tsx");

export const setIncomingRingtone = function setIncomingRingtone(call_ringing, arg1) {
  const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
  if (DCDNotificationCategoryUtils != null) {
    const setIncomingRingtone = DCDNotificationCategoryUtils.setIncomingRingtone;
    if (setIncomingRingtone != null) {
      setIncomingRingtone(call_ringing);
    }
  }
};
