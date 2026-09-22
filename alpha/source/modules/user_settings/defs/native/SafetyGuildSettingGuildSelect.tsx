// Module ID: 16204
// Function ID: 16205
// Name: SafetyGuildSettingGuildSelect
// Dependencies: [19, 5657, 14973, 16205, 8237, 4724, 16206, 1980, 16207, 1115, 11729, 2]

// Module 16204 (SafetyGuildSettingGuildSelect)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import useDMPermissionsOverrideCount from "useDMPermissionsOverrideCount" /* 16207 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5657 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14973 */;

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(16205);
({ getSelectedGuildId: metroRequire, GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = fn(8237).MobileUserSettings;
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
const SettingBuilders = fn(11729);
const guildSelector = SettingBuilders.createGuildSelector({
  unsearchable: true,
  useSelectedGuildId() {
    const field = UserSettingSearchStore.useField("selected");
    items = [field];
    const effect = noop.useEffect(() => {
      const first = SortedGuildStore.getFlattenedGuildIds()[0];
      let hasItem = items.includes(field);
      if (hasItem) {
        hasItem = null != first;
      }
      if (hasItem) {
        hasItem = timestampProducer() === React5;
      }
      if (hasItem) {
        React6(first);
      }
    }, items);
    return closure_9().selectedGuildId;
  },
  useDescription() {
    const dMPermissionsOverrideCount = useDMPermissionsOverrideCount.useDMPermissionsOverrideCount();
    if (React7().selectedGuildId === React5) {
      if (0 !== dMPermissionsOverrideCount) {
        const intl = tmp(1115).intl;
        const obj2 = { count: dMPermissionsOverrideCount };
        return intl.format(tmp(1115).t.eugFxh, obj2);
      }
    }
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16206, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;
