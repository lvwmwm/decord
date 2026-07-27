// Module ID: 6554
// Function ID: 58343
// Name: openUserSettings
// Dependencies: [6555, 653, 3983, 686, 2]
// Exports: openUserSettings

// Module 6554 (openUserSettings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsSections } from "ME";

const result = require("getRootNavigationRef").fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen) => {
  let obj = require(3983) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp) {
    obj = { type: "USER_SETTINGS_MODAL_INIT" };
    screen = undefined;
    if (null != screen) {
      screen = screen.screen;
    }
    if (null == screen) {
      screen = UserSettingsSections.OVERVIEW;
    }
    obj.section = screen;
    importDefault(686).dispatch(obj);
    rootNavigationRef.navigate("settings", screen);
    if (null != arg1) {
      arg1();
    }
    const obj3 = importDefault(686);
  }
};
