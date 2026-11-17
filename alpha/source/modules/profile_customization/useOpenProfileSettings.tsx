// Module ID: 10047
// Function ID: 10048
// Name: useOpenProfileSettings
// Dependencies: [19, 1388, 10048, 1072, 1082, 8553, 10049, 10050, 8615, 2]
// Exports: default

// Module 10047 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import openUserSettings from "openUserSettings" /* 8615 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 10050 */;
import UserStore from "UserStore" /* 1388 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10048 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8553 */;
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
