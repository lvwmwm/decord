// Module ID: 6987
// Function ID: 6988
// Name: openUserSettings
// Dependencies: [6988, 1074, 4722, 573, 2]
// Exports: openUserSettings

// Module 6987 (openUserSettings)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import RootNavigationRef from "RootNavigationRef" /* 4722 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 6988 */;
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
    rootNavigationRef.navigate("settings", screen, { pop: true });
    if (fn != null) {
      fn();
    }
  }
};
