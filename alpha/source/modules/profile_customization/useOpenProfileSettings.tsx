// Module ID: 11655
// Function ID: 11656
// Name: useOpenProfileSettings
// Dependencies: [19, 1385, 11596, 1072, 1082, 8855, 11656, 11657, 7687, 2]
// Exports: default

// Module 11655 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import openUserSettings from "openUserSettings" /* 7687 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11657 */;
import UserStore from "UserStore" /* 1385 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11596 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8855 */;
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
