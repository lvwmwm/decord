// Module ID: 9437
// Function ID: 9438
// Name: useOpenProfileSettings
// Dependencies: [19, 1387, 9438, 1071, 1081, 6376, 9439, 9440, 8109, 2]
// Exports: default

// Module 9437 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9440 */;
import UserStore from "UserStore" /* 1387 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9438 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6376 */;
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
