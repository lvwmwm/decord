// Module ID: 7658
// Function ID: 7659
// Name: openUserSettings
// Dependencies: [7659, 1078, 4649, 577, 2]
// Exports: openUserSettings

// Module 7658 (openUserSettings)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import RootNavigationRef from "RootNavigationRef" /* 4649 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 7659 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen, fn) => {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    screen = undefined;
    if (screen != null) {
      screen = screen.screen;
    }
    if (screen == null) {
      screen = UserSettingsSections.OVERVIEW;
    }
    const obj2 = { type: "USER_SETTINGS_MODAL_INIT", section: screen };
    DispatcherDefault.dispatch(obj2);
    rootNavigationRef.navigate("settings", screen);
    if (fn != null) {
      fn();
    }
  }
};
