// Module ID: 6057
// Function ID: 6058
// Name: openUserSettings
// Dependencies: [6058, 676, 4200, 709, 2]
// Exports: openUserSettings

// Module 6057 (openUserSettings)
import handleFormClose from "handleFormClose";
import { UserSettingsSections } from "ME";

const result = require("getRootNavigationRef").fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen) => {
  let obj = require(4200) /* getRootNavigationRef */;
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
