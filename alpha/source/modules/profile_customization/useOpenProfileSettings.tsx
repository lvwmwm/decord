// Module ID: 10640
// Function ID: 10641
// Name: useOpenProfileSettings
// Dependencies: [19, 1390, 10577, 1085, 1095, 8284, 558, 576, 10641, 10642, 7093, 2]

// Module 10640 (useOpenProfileSettings)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 10642 */;
import UserStore from "UserStore" /* 1390 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10577 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useCallback = react.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_5 = UserSettingsConstants.ProfileCustomizationSubsection;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOpenProfileSettings(arg0) {
  let guild;
  let scrollPosition;
  let tmp4;
  const tmp = guild;
  let obj = guild(scrollPosition[7]);
  const cResult = obj.c(7);
  const tmp2 = scrollPosition;
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  guild = tmp4.guild;
  scrollPosition = tmp4.scrollPosition;
  const analyticsLocations = tmp4.analyticsLocations;
  const tmpResult = tmp(tmp2[8]);
  const isEligibleForUserProfileWYSIWYGEditing = tmpResult.useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings");
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === guild) {
      if (cResult[4] === isEligibleForUserProfileWYSIWYGEditing) {
        let tmp6;
        if (cResult[5] === scrollPosition) {
          tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
  }
  const fn = function c() {
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
  };
  cResult[2] = analyticsLocations;
  cResult[3] = guild;
  cResult[4] = isEligibleForUserProfileWYSIWYGEditing;
  cResult[5] = scrollPosition;
  cResult[6] = fn;
  tmp6 = fn;
}) : (function useOpenProfileSettings() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const guild = obj.guild;
  const scrollPosition = obj.scrollPosition;
  const analyticsLocations = obj.analyticsLocations;
  let obj2 = guild(scrollPosition[8]);
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
});
const result = size.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default tmp4;
