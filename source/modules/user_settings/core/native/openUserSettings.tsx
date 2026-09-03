// Module ID: 6255
// Function ID: 6256
// Name: openUserSettings
// Dependencies: [6256, 673, 4333, 706, 2]
// Exports: openUserSettings

// Module 6255 (openUserSettings)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4333 */;
import handleFormClose from "handleFormClose" /* 6256 */;

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
