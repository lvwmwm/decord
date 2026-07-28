// Module ID: 14643
// Function ID: 111567
// Name: useDefaultGuildsRestricted
// Dependencies: [3838, 2]
// Exports: useDefaultGuildsRestricted

// Module 14643 (useDefaultGuildsRestricted)
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = require(3838) /* explicitContentFromProto */.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = require(3838) /* explicitContentFromProto */.DefaultGuildsRestrictedV2;
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
