// Module ID: 16192
// Function ID: 16193
// Name: SafetyGuildSettingGuildSelect
// Dependencies: [19, 5689, 14990, 16193, 8270, 4757, 16194, 1984, 558, 568, 16195, 1119, 11630, 2]

// Module 16192 (SafetyGuildSettingGuildSelect)
import c from "c" /* 568 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import useDMPermissionsOverrideCount from "useDMPermissionsOverrideCount" /* 16195 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5689 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14990 */;

require = fn;
const UserSettingsSafetySelectedGuildStore = fn(16193);
({ getSelectedGuildId: metroRequire, GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = UserSettingsSafetySelectedGuildStore);
const MobileUserSettings = fn(8270).MobileUserSettings;
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileUserSettings);
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = field(568).c(3);
  field = UserSettingSearchStore.useField("selected");
  if (cResult[0] !== field) {
    const fn = function s() {
      const first = SortedGuildStore.getFlattenedGuildIds()[0];
      let hasItem = items.includes(field);
      if (hasItem) {
        hasItem = null != first;
      }
      if (hasItem) {
        hasItem = timestampProducer() === React5;
      }
      if (hasItem) {
        closure_2_8(first);
      }
    };
    items = [field];
    cResult[0] = field;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = noop.useEffect(tmp3, tmp4);
  return closure_9().selectedGuildId;
}) : (() => {
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
      closure_2_8(first);
    }
  }, items);
  return closure_9().selectedGuildId;
});
const SettingBuilders = fn(11630);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const dMPermissionsOverrideCount = useDMPermissionsOverrideCount.useDMPermissionsOverrideCount();
  if (options().selectedGuildId === React5) {
    if (0 !== dMPermissionsOverrideCount) {
      if (cResult[0] !== dMPermissionsOverrideCount) {
        const intl = tmp(1119).intl;
        const obj3 = { count: dMPermissionsOverrideCount };
        const formatResult = intl.format(tmp(1119).t.eugFxh, obj3);
        cResult[0] = dMPermissionsOverrideCount;
        cResult[1] = formatResult;
        let tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  }
}) : (() => {
  const dMPermissionsOverrideCount = useDMPermissionsOverrideCount.useDMPermissionsOverrideCount();
  if (options().selectedGuildId === React5) {
    if (0 !== dMPermissionsOverrideCount) {
      const intl = tmp(1119).intl;
      const obj2 = { count: dMPermissionsOverrideCount };
      return intl.format(tmp(1119).t.eugFxh, obj2);
    }
  }
});
const guildSelector = SettingBuilders.createGuildSelector({
  unsearchable: true,
  useSelectedGuildId: tmp3,
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const dMPermissionsOverrideCount = useDMPermissionsOverrideCount.useDMPermissionsOverrideCount();
    if (options().selectedGuildId === React5) {
      if (0 !== dMPermissionsOverrideCount) {
        if (cResult[0] !== dMPermissionsOverrideCount) {
          const intl = tmp(1119).intl;
          const obj3 = { count: dMPermissionsOverrideCount };
          const formatResult = intl.format(tmp(1119).t.eugFxh, obj3);
          cResult[0] = dMPermissionsOverrideCount;
          cResult[1] = formatResult;
          let tmp5 = formatResult;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      }
    }
  }) : (() => {
    const dMPermissionsOverrideCount = useDMPermissionsOverrideCount.useDMPermissionsOverrideCount();
    if (options().selectedGuildId === React5) {
      if (0 !== dMPermissionsOverrideCount) {
        const intl = tmp(1119).intl;
        const obj2 = { count: dMPermissionsOverrideCount };
        return intl.format(tmp(1119).t.eugFxh, obj2);
      }
    }
  }),
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16194, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;
