// Module ID: 15057
// Function ID: 15058
// Name: route
// Dependencies: [8198, 10669, 1236, 2629, 15058, 2]

// Module 15057 (route)
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2629).Iy9grw);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    return false;
  },
  screen: null
};
obj = {
  route: require("frozen").MobileNotifSettingsSections.VOICE_ACTIVITY,
  getComponent() {
    const error = new Error("Not yet supported");
    throw error;
  }
};
obj[3] = obj;
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const VoiceActivityTitleSetting = route;
