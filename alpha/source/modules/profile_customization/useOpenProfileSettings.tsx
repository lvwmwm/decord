// Module ID: 9424
// Function ID: 9425
// Name: useOpenProfileSettings
// Dependencies: [19, 1386, 9425, 1071, 1081, 8132, 9426, 9427, 8194, 2]
// Exports: default

// Module 9424 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import openUserSettings from "openUserSettings" /* 8194 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9427 */;
import UserStore from "UserStore" /* 1386 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9425 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8132 */;
import size from "module_2" /* 2 */;

react.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_5 = UserSettingsConstants.ProfileCustomizationSubsection;
const result = size.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default function useOpenProfileSettings() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const guild = obj.guild;
  const scrollPosition = obj.scrollPosition;
  const initialTab = obj.initialTab;
  const analyticsLocations = obj.analyticsLocations;
  let obj2 = guild(scrollPosition[6]);
  const items = [guild, scrollPosition, initialTab, analyticsLocations, obj2.useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
  return initialTab(() => {
    let USER_PROFILE;
    let str;
    if (null != guild) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
    }
    const setState = ProfileCustomizationNavigationStore.setState;
    if (null != guild) {
      USER_PROFILE = constants.GUILD;
    } else {
      USER_PROFILE = constants.USER_PROFILE;
    }
    const obj2 = { subsection: USER_PROFILE, scrollPosition, editingTab: str };
    str = initialTab;
    const tmp8 = initialTab;
    if (initialTab == null) {
      str = "main";
    }
    setState(obj2);
    const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION, params: { initialTab: tmp8 } };
    openUserSettings.openUserSettings(obj3);
  }, items);
};
