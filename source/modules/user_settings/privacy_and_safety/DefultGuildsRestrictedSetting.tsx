// Module ID: 15112
// Function ID: 15113
// Name: useDefaultGuildsRestricted
// Dependencies: [4070, 2]
// Exports: useDefaultGuildsRestricted

// Module 15112 (useDefaultGuildsRestricted)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;

const result = set.fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = explicitContentFromProto.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = explicitContentFromProto.DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    setting1 = setting || setting;
    const tmp3 = setting || setting;
  }
  return setting1;
};
