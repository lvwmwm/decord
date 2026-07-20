// Module ID: 15933
// Function ID: 122216
// Name: setIncomingRingtone
// Dependencies: []
// Exports: setIncomingRingtone

// Module 15933 (setIncomingRingtone)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/holidays/setIncomingRingtone.android.tsx");

export const setIncomingRingtone = function setIncomingRingtone(call_ringing, arg1) {
  const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
  if (!tmp) {
    DCDNotificationCategoryUtils.setIncomingRingtone(call_ringing);
  }
};
