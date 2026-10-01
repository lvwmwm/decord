// Module ID: 9226
// Function ID: 9227
// Name: useOpenProfileSettings
// Dependencies: [19, 1372, 9227, 1074, 1084, 7605, 9228, 9229, 6800, 2]
// Exports: default

// Module 9226 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9229 */;
import UserStore from "UserStore" /* 1372 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9227 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import size from "module_2" /* 2 */;

const useCallback = react.useCallback;
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
  const analyticsLocations = obj.analyticsLocations;
  let obj2 = guild(scrollPosition[6]);
  const items = [guild, scrollPosition, analyticsLocations, obj2.useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
  return useCallback(() => {
    let USER_PROFILE;
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
    const obj2 = { subsection: USER_PROFILE, scrollPosition };
    setState(obj2);
    const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION };
    openUserSettings.openUserSettings(obj3);
  }, items);
};
