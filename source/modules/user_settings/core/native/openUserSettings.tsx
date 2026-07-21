// Module ID: 5791
// Function ID: 49494
// Name: openUserSettings
// Dependencies: []
// Exports: openUserSettings

// Module 5791 (openUserSettings)
const _module = require(dependencyMap[0]);
const UserSettingsSections = require(dependencyMap[1]).UserSettingsSections;
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen) => {
  let obj = require(dependencyMap[2]);
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
    importDefault(dependencyMap[3]).dispatch(obj);
    rootNavigationRef.navigate("settings", screen);
    if (null != arg1) {
      arg1();
    }
    const obj3 = importDefault(dependencyMap[3]);
  }
};
