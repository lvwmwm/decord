// Module ID: 9814
// Function ID: 76248
// Name: useOpenProfileSettings
// Dependencies: [31, 1849, 9815, 653, 662, 7930, 9816, 9817, 5796, 2]
// Exports: default

// Module 9814 (useOpenProfileSettings)
import "_isNativeReflectConstruct";
import zustandStore from "zustandStore";
import { UserSettingsSections } from "ME";
import { ProfileCustomizationSubsection as closure_5 } from "MAX_FAVORITES";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

require("result").useCallback;
const result = require("zustandStore").fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

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
      const guildIdentitySettings = obj.initGuildIdentitySettings(guild.id);
    }
    obj = {};
    if (null != guild) {
      let USER_PROFILE = outer1_5.GUILD;
    } else {
      USER_PROFILE = outer1_5.USER_PROFILE;
    }
    obj.subsection = USER_PROFILE;
    obj.scrollPosition = scrollPosition;
    outer1_3.setState(obj);
    obj = { screen: outer1_4.PROFILE_CUSTOMIZATION };
    guild(scrollPosition[8]).openUserSettings(obj);
  }, items);
};
