// Module ID: 16178
// Function ID: 125196
// Name: setIncomingRingtone
// Dependencies: [27, 2]
// Exports: setIncomingRingtone

// Module 16178 (setIncomingRingtone)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/holidays/setIncomingRingtone.android.tsx");

export const setIncomingRingtone = function setIncomingRingtone(call_ringing, arg1) {
  const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
  if (!tmp) {
    DCDNotificationCategoryUtils.setIncomingRingtone(call_ringing);
  }
};
