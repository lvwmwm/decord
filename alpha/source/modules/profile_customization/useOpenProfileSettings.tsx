// Module ID: 11681
// Function ID: 11682
// Name: useOpenProfileSettings
// Dependencies: [19, 1385, 11618, 1072, 1082, 8823, 11682, 11683, 7658, 2]
// Exports: default

// Module 11681 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11683 */;
import UserStore from "UserStore" /* 1385 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11618 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8823 */;
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
