// Module ID: 6018
// Function ID: 6019
// Name: openUserSettings
// Dependencies: [6019, 676, 4159, 709, 2]
// Exports: openUserSettings

// Module 6018 (openUserSettings)
import handleFormClose from "handleFormClose";
import { UserSettingsSections } from "ME";

const result = require("getRootNavigationRef").fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen) => {
  let obj = require(4159) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp2) {
    screen = undefined;
    if (screen != null) {
      screen = screen.screen;
    }
    if (screen == null) {
      screen = UserSettingsSections.OVERVIEW;
    }
    obj = { type: "USER_SETTINGS_MODAL_INIT", section: null };
    obj[1] = screen;
    importDefault(709).dispatch(obj);
    rootNavigationRef.navigate("settings", screen);
    if (arg1 != null) {
      arg1();
    }
    const obj3 = importDefault(709);
  }
};
