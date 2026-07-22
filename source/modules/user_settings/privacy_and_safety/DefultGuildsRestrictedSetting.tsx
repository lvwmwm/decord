// Module ID: 14423
// Function ID: 108786
// Name: useDefaultGuildsRestricted
// Dependencies: []
// Exports: useDefaultGuildsRestricted

// Module 14423 (useDefaultGuildsRestricted)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = require(dependencyMap[0]).DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = require(dependencyMap[0]).DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    let tmp4 = !tmp3;
    if (!setting) {
      tmp4 = setting;
    }
    setting1 = tmp4;
  }
  return setting1;
};
