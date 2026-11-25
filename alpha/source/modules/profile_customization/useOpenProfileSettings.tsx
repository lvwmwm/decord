// Module ID: 9394
// Function ID: 9395
// Name: useOpenProfileSettings
// Dependencies: [19, 1386, 9395, 1071, 1081, 6345, 9396, 9397, 8067, 2]
// Exports: default

// Module 9394 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import openUserSettings from "openUserSettings" /* 8067 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9397 */;
import UserStore from "UserStore" /* 1386 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9395 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6345 */;
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
    let obj4;
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
    const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION, params: obj4 };
    obj4 = { initialTab };
    openUserSettings.openUserSettings(obj3);
  }, items);
};
