// Module ID: 10195
// Function ID: 10196
// Name: useOpenProfileSettings
// Dependencies: [19, 1922, 10196, 676, 685, 8331, 10197, 10198, 6080, 2]
// Exports: default

// Module 10195 (useOpenProfileSettings)
import "mergeGuildAvatar";
import zustandStore from "zustandStore";
import { UserSettingsSections } from "ME";
import { ProfileCustomizationSubsection as closure_5 } from "MAX_FAVORITES";
import handleFormOpen from "handleFormOpen";

require("noop").useCallback;
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
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
    }
    if (null != guild) {
      let USER_PROFILE = outer1_5.GUILD;
    } else {
      USER_PROFILE = outer1_5.USER_PROFILE;
    }
    obj = { subsection: USER_PROFILE, scrollPosition };
    outer1_3.setState(obj);
    obj = { screen: outer1_4.PROFILE_CUSTOMIZATION };
    guild(scrollPosition[8]).openUserSettings(obj);
  }, items);
};
