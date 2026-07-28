// Module ID: 14424
// Function ID: 110263
// Name: _handleEnableSystemNotification
// Dependencies: [5, 27, 7733, 653, 4379, 11481, 11489, 675, 10670, 10099, 1212, 2]

// Module 14424 (_handleEnableSystemNotification)
import closure_3 from "EventActionType";
import { NativeModules } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { NotificationAuthorizationStatus as closure_6 } from "NativePermissionStatus";
import EventActionType from "EventActionType";
import createToggle from "createToggle";

let closure_7;
let closure_8;
const require = arg1;
function _handleEnableSystemNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ EventActionType: closure_7, EventActionLocation: closure_8 } = EventActionType);
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.nl2Dqx);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  onPress: function handleEnableSystemNotification() {
    return _handleEnableSystemNotification(...arguments);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SystemNotificationsSetting.tsx");

export default createToggle;
