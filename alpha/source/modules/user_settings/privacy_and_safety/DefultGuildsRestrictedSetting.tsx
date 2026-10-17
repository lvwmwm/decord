// Module ID: 16975
// Function ID: 16976
// Name: DefultGuildsRestrictedSetting
// Dependencies: [558, 2044, 2]

// Module 16975 (DefultGuildsRestrictedSetting)
import UserSettings from "UserSettings" /* 2044 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = UserSettings.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    setting1 = setting || setting;
  }
  return setting1;
}) : (function useDefaultGuildsRestricted() {
  const DefaultGuildsRestricted = UserSettings.DefaultGuildsRestricted;
  const setting = DefaultGuildsRestricted.useSetting();
  const DefaultGuildsRestrictedV2 = UserSettings.DefaultGuildsRestrictedV2;
  let setting1 = DefaultGuildsRestrictedV2.useSetting();
  if (null == setting1) {
    setting1 = setting || setting;
  }
  return setting1;
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/DefultGuildsRestrictedSetting.tsx");

export const useDefaultGuildsRestricted = tmp2;
