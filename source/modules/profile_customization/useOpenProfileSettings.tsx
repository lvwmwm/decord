// Module ID: 9774
// Function ID: 76000
// Name: useOpenProfileSettings
// Dependencies: []
// Exports: default

// Module 9774 (useOpenProfileSettings)
require(dependencyMap[0]).useCallback;
importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
const UserSettingsSections = require(dependencyMap[3]).UserSettingsSections;
let closure_5 = require(dependencyMap[4]).ProfileCustomizationSubsection;
const _module = require(dependencyMap[5]);
const _module1 = require(dependencyMap[9]);
const result = _module1.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default function useOpenProfileSettings() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const guild = obj.guild;
  const require = guild;
  const scrollPosition = obj.scrollPosition;
  const dependencyMap = scrollPosition;
  const items = [guild, scrollPosition, obj.analyticsLocations, require(dependencyMap[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
  return useCallback(() => {
    if (null != guild) {
      let obj = guild(scrollPosition[7]);
      const guildIdentitySettings = obj.initGuildIdentitySettings(guild.id);
    }
    obj = {};
    if (null != guild) {
      let USER_PROFILE = constants2.GUILD;
    } else {
      USER_PROFILE = constants2.USER_PROFILE;
    }
    obj.subsection = USER_PROFILE;
    obj.scrollPosition = scrollPosition;
    state.setState(obj);
    obj = { screen: constants.PROFILE_CUSTOMIZATION };
    guild(scrollPosition[8]).openUserSettings(obj);
  }, items);
};
