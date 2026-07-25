// Module ID: 14598
// Function ID: 111389
// Name: useDefaultGuildsRestricted
// Dependencies: [3804, 2]
// Exports: useDefaultGuildsRestricted

// Module 14598 (useDefaultGuildsRestricted)
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = require(3804) /* explicitContentFromProto */.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = require(3804) /* explicitContentFromProto */.DefaultGuildsRestrictedV2;
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
