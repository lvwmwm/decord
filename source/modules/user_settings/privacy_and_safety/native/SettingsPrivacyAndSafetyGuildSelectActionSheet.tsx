// Module ID: 14531
// Function ID: 110894
// Name: getAllServersSearchableSelectOption
// Dependencies: [57, 31, 1838, 4970, 14530, 33, 4130, 689, 4359, 1387, 1212, 566, 4098, 10967, 13554, 5515, 4974, 2]
// Exports: default

// Module 14531 (getAllServersSearchableSelectOption)
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getAllServersSearchableSelectOption() {
  let obj = { type: require(4359) /* ActionComponentState */.SelectOptionType.GUILD };
  obj = { id: closure_7 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t["32u1Dx"]);
  obj.guild = require(1387) /* fromGuildPropertiesWithAdditionalFields */.dangerouslyConstructGuildRecordFromUntypedObject(obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t["32u1Dx"]);
  obj.value = closure_7;
  return obj;
}
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.iconContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx");

export default function SettingsPrivacyAndSafetyGuildSelectActionSheet() {
  function submitSelection(result, arg1) {
    return tmp4(callback[12]).hideActionSheet();
  }
  const tmp2 = submitSelection(React.useState(""), 2);
  const first = tmp2[0];
  let tmp4 = (function useSelectedSearchableGuildOption() {
    const selectedGuildId = outer1_9().selectedGuildId;
    let obj = first(callback[11]);
    const items = [outer1_5];
    const stateFromStores = obj.useStateFromStores(items, () => outer2_5.getGuild(selectedGuildId));
    if (selectedGuildId !== outer1_7) {
      if (null != stateFromStores) {
        obj = { type: first(callback[8]).SelectOptionType.GUILD, guild: stateFromStores };
        ({ name: obj2.label, id: obj2.value } = stateFromStores);
      }
      return obj;
    }
    obj = outer1_12();
  })();
  const importDefault = tmp4;
  let obj = { maxValues: 1, minValues: 1 };
  const intl = first(callback[10]).intl;
  obj.placeholder = intl.string(first(callback[10]).t["ZImm/x"]);
  callback = React.useCallback((query) => (function queryGuilds(query) {
    function guildRecordToGuildSearchableSelectOption(id) {
      return { type: first(callback[8]).SelectOptionType.GUILD, value: id.id, label: id.name, guild: id };
    }
    const items = [outer2_12()];
    if (0 === query.length) {
      const flattenedGuildIds = outer2_6.getFlattenedGuildIds();
      return flattenedGuildIds.reduce((arr, guildId) => {
        const guild = outer3_5.getGuild(guildId);
        if (null != guild) {
          arr.push(guildRecordToGuildSearchableSelectOption(guild));
        }
        return arr;
      }, items);
    } else {
      let obj = callback(callback[16]);
      obj = { query };
      return obj.queryGuilds(obj).map((record) => guildRecordToGuildSearchableSelectOption(record.record));
    }
  })(query), []);
  let items = [first, callback];
  const memo = React.useMemo(() => callback(first), items);
  obj = {
    onPressOptionItem(arg0, guild) {
      outer1_8(guild.guild.id);
      submitSelection();
    },
    renderHeaderIcon(value) {
      if (value.value === outer1_7) {
        let obj = { size: "xs" };
        let tmp6 = outer1_10(first(callback[14]).GuildSelectDefaultIcon, obj);
      } else {
        obj = { guild: value.guild };
        tmp4 = tmp4(callback[15]);
        obj.size = first(callback[15]).GuildIconSizes.XSMALL;
        tmp6 = outer1_10(tmp4, obj);
      }
      return tmp6;
    },
    renderIcon(value) {
      if (value.value === outer1_7) {
        let tmp6 = outer1_10(first(callback[14]).GuildSelectDefaultIcon, {});
      } else {
        const obj = { guild: value.guild };
        tmp4 = tmp4(callback[15]);
        obj.size = first(callback[15]).GuildIconSizes.SMALL_32;
        tmp6 = outer1_10(tmp4, obj);
      }
      return tmp6;
    },
    iconContainerStyle: _createForOfIteratorHelperLoose().iconContainer,
    selectionActionComponent: obj,
    options: memo,
    selectedCount: 1,
    selectedOptions: items1,
    isSelected(value) {
      return value.value === tmp4.value;
    },
    submitSelection,
    onQueryChange: tmp2[1],
    itemAccessibilityLabel(label) {
      return label.label;
    },
    allowEmpty: false,
    expanded: true
  };
  items1 = [tmp4];
  return jsx(importDefault(callback[13]), {
    onPressOptionItem(arg0, guild) {
      outer1_8(guild.guild.id);
      submitSelection();
    },
    renderHeaderIcon(value) {
      if (value.value === outer1_7) {
        let obj = { size: "xs" };
        let tmp6 = outer1_10(first(callback[14]).GuildSelectDefaultIcon, obj);
      } else {
        obj = { guild: value.guild };
        tmp4 = tmp4(callback[15]);
        obj.size = first(callback[15]).GuildIconSizes.XSMALL;
        tmp6 = outer1_10(tmp4, obj);
      }
      return tmp6;
    },
    renderIcon(value) {
      if (value.value === outer1_7) {
        let tmp6 = outer1_10(first(callback[14]).GuildSelectDefaultIcon, {});
      } else {
        const obj = { guild: value.guild };
        tmp4 = tmp4(callback[15]);
        obj.size = first(callback[15]).GuildIconSizes.SMALL_32;
        tmp6 = outer1_10(tmp4, obj);
      }
      return tmp6;
    },
    iconContainerStyle: _createForOfIteratorHelperLoose().iconContainer,
    selectionActionComponent: obj,
    options: memo,
    selectedCount: 1,
    selectedOptions: items1,
    isSelected(value) {
      return value.value === tmp4.value;
    },
    submitSelection,
    onQueryChange: tmp2[1],
    itemAccessibilityLabel(label) {
      return label.label;
    },
    allowEmpty: false,
    expanded: true
  });
};
