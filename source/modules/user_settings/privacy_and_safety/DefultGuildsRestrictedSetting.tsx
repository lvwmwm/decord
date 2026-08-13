// Module ID: 14959
// Function ID: 14960
// Name: useDefaultGuildsRestricted
// Dependencies: [4034, 2]
// Exports: useDefaultGuildsRestricted

// Module 14959 (useDefaultGuildsRestricted)
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = require(4034) /* explicitContentFromProto */.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = require(4034) /* explicitContentFromProto */.DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    setting1 = setting || setting;
    const tmp3 = setting || setting;
  }
  return setting1;
};
