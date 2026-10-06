// Module ID: 17561
// Function ID: 17562
// Name: react-native
// Dependencies: [17, 2]
// Exports: setIncomingRingtone

// Module 17561 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/holidays/setIncomingRingtone.android.tsx");

export const setIncomingRingtone = function setIncomingRingtone(call_ringing) {
  const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
  if (DCDNotificationCategoryUtils != null) {
    const setIncomingRingtone = DCDNotificationCategoryUtils.setIncomingRingtone;
    if (setIncomingRingtone != null) {
      setIncomingRingtone(call_ringing);
    }
  }
};
