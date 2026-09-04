// Module ID: 9136
// Function ID: 9137
// Name: useOpenProfileSettings
// Dependencies: [19, 1921, 9137, 673, 682, 8091, 9138, 9139, 7320, 2]
// Exports: default

// Module 9136 (useOpenProfileSettings)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 673 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 682 */;
import mergeGuildAvatarDefault from "mergeGuildAvatar" /* 1921 */;
import closure_3 from "zustandStore" /* 9137 */;
import handleFormOpen from "handleFormOpen" /* 8091 */;

noop.useCallback;
mergeGuildAvatarDefault;
const UserSettingsSections = ME.UserSettingsSections;
let closure_5 = MAX_FAVORITES.ProfileCustomizationSubsection;
const result = set.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

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
      let obj = guild(scrollPosition[7]);
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
    }
    if (null != guild) {
      let USER_PROFILE = closure_1_5.GUILD;
    } else {
      USER_PROFILE = closure_1_5.USER_PROFILE;
    }
    obj = { subsection: USER_PROFILE, scrollPosition };
    closure_1_3.setState(obj);
    obj = { screen: closure_1_4.PROFILE_CUSTOMIZATION };
    guild(scrollPosition[8]).openUserSettings(obj);
  }, items);
};
