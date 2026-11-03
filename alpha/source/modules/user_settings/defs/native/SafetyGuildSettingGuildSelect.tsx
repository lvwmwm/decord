// Module ID: 18053
// Function ID: 18054
// Name: SafetyGuildSettingGuildSelect
// Dependencies: [19, 6892, 16733, 18054, 8556, 5381, 18055, 2123, 18056, 1113, 11677, 2]

// Module 18053 (SafetyGuildSettingGuildSelect)
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import useDMPermissionsOverrideCount from "useDMPermissionsOverrideCount" /* 18056 */;
import react from "react" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6892 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16733 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 18054 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ getSelectedGuildId: metroRequire, GUILD_SELECT_ALL_SERVERS_OPTION_ID: metroImportDefault, setSelectedGuildId: metroImportAll, useUserSafetySettingsSelectedGuildStore: c9 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
let obj = {
  unsearchable: true,
  useSelectedGuildId() {
    const field = UserSettingSearchStore.useField("selected");
    items = [field];
    const effect = react.useEffect(() => {
      const first = SortedGuildStore.getFlattenedGuildIds()[0];
      const hasItem = items.includes(field) && null != first && metroRequire() === metroImportDefault;
      if (hasItem) {
        metroImportAll(first);
      }
    }, items);
    return closure_9().selectedGuildId;
  },
  useDescription() {
    const selectedGuildId = React4().selectedGuildId;
    const obj = useDMPermissionsOverrideCount;
    const dMPermissionsOverrideCount = obj.useDMPermissionsOverrideCount();
    if (selectedGuildId === metroImportDefault) {
      if (0 !== dMPermissionsOverrideCount) {
        const intl = tmp(1113).intl;
        const obj2 = { count: dMPermissionsOverrideCount };
        return intl.format(intl2.t.eugFxh, obj2);
      }
    }
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(18055, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
};
const guildSelector = SettingBuilders.createGuildSelector(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;
