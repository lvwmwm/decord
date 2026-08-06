// Module ID: 14803
// Function ID: 14804
// Name: useDefaultGuildsRestricted
// Dependencies: [3957, 2]
// Exports: useDefaultGuildsRestricted

// Module 14803 (useDefaultGuildsRestricted)
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = require(3957) /* explicitContentFromProto */.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = require(3957) /* explicitContentFromProto */.DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    setting1 = setting || setting;
    const tmp3 = setting || setting;
  }
  return setting1;
};
