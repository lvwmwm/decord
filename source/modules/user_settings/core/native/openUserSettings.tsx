// Module ID: 5796
// Function ID: 49545
// Name: openUserSettings
// Dependencies: [5797, 653, 3982, 686, 2]
// Exports: openUserSettings

// Module 5796 (openUserSettings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsSections } from "ME";

const result = require("getRootNavigationRef").fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen) => {
  let obj = require(3982) /* getRootNavigationRef */;
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
