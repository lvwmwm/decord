// Module ID: 16127
// Function ID: 124993
// Name: setIncomingRingtone
// Dependencies: [27, 2]
// Exports: setIncomingRingtone

// Module 16127 (setIncomingRingtone)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/holidays/setIncomingRingtone.android.tsx");

export const setIncomingRingtone = function setIncomingRingtone(call_ringing, arg1) {
  const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
  if (!tmp) {
    DCDNotificationCategoryUtils.setIncomingRingtone(call_ringing);
  }
};
