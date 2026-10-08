// Module ID: 16075
// Function ID: 16076
// Name: SettingsPrivacyAndSafetyGuildSelectActionSheet
// Dependencies: [32, 19, 2086, 5968, 16074, 21, 5090, 587, 5441, 2078, 1126, 558, 576, 504, 5054, 14778, 6161, 11428, 5975, 2]

// Module 16075 (SettingsPrivacyAndSafetyGuildSelectActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2078 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5441 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5975 */;
import SelectComponentActionSheetDefault from "SelectComponentActionSheet" /* 11428 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 16074 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, record;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
function queryGuilds(query) {
  let dangerouslyConstructGuildRecordFromUntypedObject;
  let intl;
  let intl2;
  let obj2;
  let reduced;
  let obj = { type: InteractionComponentTypes.SelectOptionType.GUILD, guild: dangerouslyConstructGuildRecordFromUntypedObject(obj2), label: intl2.string(intl3.t["32u1Dx"]), value };
  const tmp2 = GuildRecordUtils;
  dangerouslyConstructGuildRecordFromUntypedObject = tmp2.dangerouslyConstructGuildRecordFromUntypedObject;
  obj2 = { id: value, name: intl.string(intl3.t["32u1Dx"]) };
  intl = intl3.intl;
  intl2 = intl3.intl;
  const items = [obj];
  if (0 === query.length) {
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    reduced = flattenedGuildIds.reduce((acc, item) => {
      guild = guild.getGuild(item);
      if (null != guild) {
        const obj = { type: InteractionComponentTypes.SelectOptionType.GUILD, value: null, label: null, guild };
        const push = acc.push;
        ({ id: obj.value, name: obj.label } = guild);
        push(obj);
      }
      return acc;
    }, items);
  } else {
    const obj4 = { query };
    const obj3 = AutocompleteUtilsDefault;
    const queryGuildsResult = obj3.queryGuilds(obj4);
    reduced = queryGuildsResult.map((record) => {
      record = record.record;
      const obj = { type: InteractionComponentTypes.SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
      return obj;
    });
  }
  return reduced;
}
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: metroImportDefault, setSelectedGuildId: metroImportAll, useUserSafetySettingsSelectedGuildStore: c9 } = UserSettingsSafetySelectedGuildStore);
const jsx = Fragment.jsx;
let obj = { iconContainer: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_12 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedSearchableGuildOption() {
  let dangerouslyConstructGuildRecordFromUntypedObject;
  let first;
  let intl;
  let intl2;
  let obj5;
  let selectedGuildId;
  let tmp11;
  let tmp6;
  const obj = selectedGuildId(576);
  const cResult = obj.c(6);
  selectedGuildId = closure_9().selectedGuildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== selectedGuildId) {
    const fn = function n() {
      return GuildStore.getGuild(selectedGuildId);
    };
    cResult[1] = selectedGuildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = selectedGuildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (selectedGuildId !== id) {
    let tmp10;
    if (null != stateFromStores) {
      if (cResult[4] !== stateFromStores) {
        const obj2 = { type: selectedGuildId(5441).SelectOptionType.GUILD, guild: stateFromStores, label: null, value: null };
        ({ name: obj3.label, id: obj3.value } = stateFromStores);
        cResult[4] = stateFromStores;
        cResult[5] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[5];
      }
    }
    return tmp10;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { type: selectedGuildId(5441).SelectOptionType.GUILD, guild: dangerouslyConstructGuildRecordFromUntypedObject(obj5), label: intl2.string(selectedGuildId(1126).t["32u1Dx"]), value: id };
    obj5 = { id, name: intl.string(selectedGuildId(1126).t["32u1Dx"]) };
    dangerouslyConstructGuildRecordFromUntypedObject = selectedGuildId(2078).dangerouslyConstructGuildRecordFromUntypedObject;
    selectedGuildId(2078);
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    cResult[3] = obj4;
    tmp11 = obj4;
  } else {
    tmp11 = cResult[3];
  }
  tmp10 = tmp11;
}) : (function useSelectedSearchableGuildOption() {
  let dangerouslyConstructGuildRecordFromUntypedObject;
  let intl;
  let intl2;
  let obj7;
  const selectedGuildId = closure_9().selectedGuildId;
  const items = [GuildStore];
  const obj = selectedGuildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  if (selectedGuildId !== id) {
    let obj3;
    if (null != stateFromStores) {
      obj3 = { type: selectedGuildId(5441).SelectOptionType.GUILD, guild: stateFromStores, label: null, value: null };
      ({ name: obj2.label, id: obj2.value } = stateFromStores);
    }
    return obj3;
  }
  const obj4 = { type: selectedGuildId(5441).SelectOptionType.GUILD, guild: dangerouslyConstructGuildRecordFromUntypedObject(obj7), label: intl2.string(selectedGuildId(1126).t["32u1Dx"]), value: id };
  obj7 = { id, name: intl.string(selectedGuildId(1126).t["32u1Dx"]) };
  dangerouslyConstructGuildRecordFromUntypedObject = selectedGuildId(2078).dangerouslyConstructGuildRecordFromUntypedObject;
  selectedGuildId(2078);
  intl = tmp(1126).intl;
  intl2 = tmp(1126).intl;
  obj3 = obj4;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsPrivacyAndSafetyGuildSelectActionSheet() {
  let closure_1;
  let first;
  let first1;
  let intl;
  let iter;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp7;
  let tmp9;
  let obj = iter(576);
  const cResult = obj.c(18);
  const tmp4 = closure_11();
  [first, tmp7] = react.useState("");
  iter = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { maxValues: 1, minValues: 1, placeholder: intl.string(iter(1126).t["ZImm/x"]) };
    intl = tmp(1126).intl;
    cResult[0] = obj2;
    first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(arg0) {
      return queryGuilds(arg0);
    };
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== first) {
    const tmp9Result = tmp9(first);
    cResult[2] = first;
    cResult[3] = tmp9Result;
    tmp10 = tmp9Result;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    function submitSelection() {
      const obj = closure_1(dependencyMap[14]);
      return obj.hideActionSheet();
    }
    cResult[4] = submitSelection;
    tmp12 = submitSelection;
  } else {
    tmp12 = cResult[4];
  }
  importDefault = tmp12;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    function onPressOptionItem(arg0, guild) {
      metroImportAll(guild.guild.id);
      closure_1();
    }
    cResult[5] = onPressOptionItem;
    tmp13 = onPressOptionItem;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== iter.value) {
    function isSelected(value) {
      return value.value === iter.value;
    }
    cResult[6] = iter.value;
    cResult[7] = isSelected;
    tmp14 = isSelected;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    function accessibilityLabel(label) {
      return label.label;
    }
    cResult[8] = accessibilityLabel;
    tmp15 = accessibilityLabel;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    function renderIcon(value) {
      let tmp6;
      if (value.value === closure_1_7) {
        tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, {});
      } else {
        closure_1(dependencyMap[16]);
        tmp6 = <tmp4 guild={arg0.guild} size={iter(dependencyMap[16]).GuildIconSizes.SMALL_32} />;
      }
      return tmp6;
    }
    cResult[9] = renderIcon;
    tmp16 = renderIcon;
  } else {
    tmp16 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    function renderHeaderIcon(value) {
      let tmp6;
      if (value.value === closure_1_7) {
        tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, { size: "xs" });
      } else {
        closure_1(dependencyMap[16]);
        tmp6 = <tmp4 guild={arg0.guild} size={iter(dependencyMap[16]).GuildIconSizes.XSMALL} />;
      }
      return tmp6;
    }
    cResult[10] = renderHeaderIcon;
    tmp17 = renderHeaderIcon;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== iter) {
    const items = [iter];
    cResult[11] = iter;
    cResult[12] = items;
    tmp18 = items;
  } else {
    tmp18 = cResult[12];
  }
  if (cResult[13] === tmp14) {
    if (cResult[14] === tmp10) {
      if (cResult[15] === tmp4.iconContainer) {
        let tmp19;
        if (cResult[16] === tmp18) {
          tmp19 = cResult[17];
        }
        return tmp19;
      }
    }
  }
  const tmp20 = jsx(SelectComponentActionSheetDefault, { onPressOptionItem: tmp13, renderHeaderIcon: tmp17, renderIcon: tmp16, iconContainerStyle: tmp4.iconContainer, selectionActionComponent: first1, options: tmp10, selectedCount: 1, selectedOptions: tmp18, isSelected: tmp14, submitSelection: tmp12, onQueryChange: tmp7, itemAccessibilityLabel: tmp15, allowEmpty: false, expanded: true });
  cResult[13] = tmp14;
  cResult[14] = tmp10;
  cResult[15] = tmp4.iconContainer;
  cResult[16] = tmp18;
  cResult[17] = tmp20;
  tmp19 = tmp20;
}) : (function SettingsPrivacyAndSafetyGuildSelectActionSheet() {
  let callback;
  let closure_1;
  let first;
  let intl;
  let tmp4;
  const tmp = closure_11();
  [first, tmp4] = react.useState("");
  const tmp5 = closure_12();
  importDefault = tmp5;
  let obj = { maxValues: 1, minValues: 1, placeholder: intl.string(first(callback[10]).t["ZImm/x"]) };
  intl = first(callback[10]).intl;
  callback = react.useCallback((arg0) => queryGuilds(arg0), []);
  const items = [first, callback];
  const memo = react.useMemo(() => callback(first), items);
  const items1 = [tmp5];
  return jsx(require("SelectComponentActionSheet"), {
    onPressOptionItem(arg0, guild) {
      closure_1_8(guild.guild.id);
      const obj = closure_1(callback[14]);
      obj.hideActionSheet();
    },
    renderHeaderIcon(value) {
      let tmp6;
      if (value.value === closure_1_7) {
        tmp6 = jsx(first(callback[15]).GuildSelectDefaultIcon, { size: "xs" });
      } else {
        closure_1(callback[16]);
        tmp6 = <tmp4 guild={arg0.guild} size={first(callback[16]).GuildIconSizes.XSMALL} />;
      }
      return tmp6;
    },
    renderIcon(value) {
      let tmp6;
      if (value.value === closure_1_7) {
        tmp6 = jsx(first(callback[15]).GuildSelectDefaultIcon, {});
      } else {
        closure_1(callback[16]);
        tmp6 = <tmp4 guild={arg0.guild} size={first(callback[16]).GuildIconSizes.SMALL_32} />;
      }
      return tmp6;
    },
    iconContainerStyle: tmp.iconContainer,
    selectionActionComponent: obj,
    options: memo,
    selectedCount: 1,
    selectedOptions: items1,
    isSelected(value) {
      return value.value === closure_1.value;
    },
    submitSelection() {
      const obj = closure_1(callback[14]);
      return obj.hideActionSheet();
    },
    onQueryChange: tmp4,
    itemAccessibilityLabel: function accessibilityLabel(label) {
      return label.label;
    },
    allowEmpty: false,
    expanded: true
  });
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx");

export default tmp3;
