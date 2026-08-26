// Module ID: 6191
// Function ID: 6192
// Name: openUserSettings
// Dependencies: [6192, 676, 4299, 709, 2]
// Exports: openUserSettings

// Module 6191 (openUserSettings)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4299 */;
import handleFormClose from "handleFormClose" /* 6192 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen) => {
  let obj = getRootNavigationRef;
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
    dispatcherDefault.dispatch(obj);
    rootNavigationRef.navigate("settings", screen);
    if (arg1 != null) {
      arg1();
    }
    const obj3 = dispatcherDefault;
  }
};
