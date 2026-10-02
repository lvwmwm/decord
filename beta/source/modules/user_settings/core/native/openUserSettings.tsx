// Module ID: 6801
// Function ID: 6802
// Name: openUserSettings
// Dependencies: [6802, 1086, 4695, 585, 2]
// Exports: openUserSettings

// Module 6801 (openUserSettings)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import RootNavigationRef from "RootNavigationRef" /* 4695 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 6802 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen, fn) => {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp2) {
    screen = undefined;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (screen != null) {
      screen = screen.screen;
    }
    if (screen == null) {
      screen = UserSettingsSections.OVERVIEW;
    }
    const obj2 = { type: "USER_SETTINGS_MODAL_INIT", section: screen };
    dispatch(obj2);
    rootNavigationRef.navigate("settings", screen, { pop: true });
    if (fn != null) {
      fn();
    }
  }
};
