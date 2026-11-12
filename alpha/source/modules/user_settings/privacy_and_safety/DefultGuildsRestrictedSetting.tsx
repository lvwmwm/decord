// Module ID: 18441
// Function ID: 18442
// Name: DefultGuildsRestrictedSetting
// Dependencies: [5068, 2]
// Exports: useDefaultGuildsRestricted

// Module 18441 (DefultGuildsRestrictedSetting)
import UserSettings from "UserSettings" /* 5068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = UserSettings.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    setting1 = setting || setting;
  }
  return setting1;
}
