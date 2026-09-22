// Module ID: 10040
// Function ID: 10041
// Name: useOpenProfileSettings
// Dependencies: [19, 1372, 10041, 1074, 1084, 8433, 10042, 10043, 7627, 2]
// Exports: default

// Module 10040 (useOpenProfileSettings)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7627 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 10043 */;
import UserStore from "UserStore" /* 1372 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10041 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8433 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
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
  const items = [guild, scrollPosition, obj.analyticsLocations, guild(scrollPosition[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
  return useCallback(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp.id);
    }
    if (null != guild) {
      let USER_PROFILE = constants.GUILD;
    } else {
      USER_PROFILE = constants.USER_PROFILE;
    }
    ProfileCustomizationNavigationStore.setState({ subsection: USER_PROFILE, scrollPosition });
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PROFILE_CUSTOMIZATION });
  }, items);
};
