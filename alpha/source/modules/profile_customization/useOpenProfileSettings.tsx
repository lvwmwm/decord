// Module ID: 9968
// Function ID: 9969
// Name: useOpenProfileSettings
// Dependencies: [19, 1385, 9969, 1072, 1082, 8476, 9970, 9971, 8537, 2]
// Exports: default

// Module 9968 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import openUserSettings from "openUserSettings" /* 8537 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9971 */;
import UserStore from "UserStore" /* 1385 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9969 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8476 */;
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
