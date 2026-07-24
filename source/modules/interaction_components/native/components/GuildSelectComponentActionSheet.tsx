// Module ID: 13668
// Function ID: 104927
// Name: GuildSelectComponentActionSheet
// Dependencies: [57, 31, 27, 1838, 4970, 33, 4130, 4359, 1212, 4098, 10994, 5513, 4319, 1273, 4126, 4974, 2]
// Exports: default

// Module 13668 (GuildSelectComponentActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ guildIdentity: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 16 }, avatar: { marginRight: 4 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx");

export default function GuildSelectComponentActionSheet(arg0) {
  let importDefault;
  let require;
  let selectedGuild;
  ({ selectedGuild, onSelectGuild: require, user: importDefault } = arg0);
  let callback;
  function submitSelection() {
    return outer1_1(tmp[9]).hideActionSheet();
  }
  let tmp = callback2();
  const dependencyMap = tmp;
  const tmp2 = first(first1.useState(""), 2);
  first = tmp2[0];
  let obj = { type: require(4359) /* ActionComponentState */.SelectOptionType.GUILD, value: selectedGuild.id, label: selectedGuild.name, guild: selectedGuild };
  const tmp4 = first(first1.useState(obj), 2);
  first1 = tmp4[0];
  let closure_5 = tmp4[1];
  if (null != first1) {
    let items = [first1];
    let items1 = items;
  } else {
    items1 = [];
  }
  obj = { maxValues: 1, minValues: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl.string(require(1212) /* getSystemLocale */.t["ZImm/x"]);
  callback = first1.useCallback((query) => (function queryGuilds(query) {
    function guildRecordToGuildSearchableSelectOption(id) {
      return { type: outer3_0(table[7]).SelectOptionType.GUILD, value: id.id, label: id.name, guild: id };
    }
    if (0 === query.length) {
      const flattenedGuildIds = submitSelection.getFlattenedGuildIds();
      const _Array = Array;
      const array = new Array();
      return flattenedGuildIds.reduce((arr, guildId) => {
        const guild = callback.getGuild(guildId);
        if (null != guild) {
          arr.push(guildRecordToGuildSearchableSelectOption(guild));
        }
        return arr;
      }, array);
    } else {
      let obj = outer2_1(table[15]);
      obj = { query };
      return obj.queryGuilds(obj).map((record) => guildRecordToGuildSearchableSelectOption(record.record));
    }
  })(query), []);
  const items2 = [first, callback];
  const memo = first1.useMemo(() => callback(first), items2);
  obj = {
    onPressOptionItem(arg0, guild) {
      callback(guild.guild);
      callback2(guild);
      submitSelection();
    },
    onRemoveOptionItem() {
      callback2(null);
    },
    renderIcon(guild) {
      return outer1_8(outer1_1(tmp[11]), { guild: guild.guild });
    },
    renderHeaderIcon(guild) {
      const obj = {};
      tmp = outer1_1(tmp[11]);
      obj.size = outer1_0(tmp[11]).GuildIconSizes.XSMALL;
      obj.guild = guild.guild;
      return outer1_8(tmp, obj);
    },
    iconContainerStyle: tmp.iconContainer,
    renderDescription(guild) {
      const hasAvatarForGuildResult = closure_1.hasAvatarForGuild(guild.guild.id);
      let obj = outer1_1(tmp[12]);
      let username = obj.getNickname(guild.guild.id, undefined, closure_1);
      obj = { style: tmp.guildIdentity };
      let tmp5 = hasAvatarForGuildResult;
      if (hasAvatarForGuildResult) {
        obj = { size: outer1_0(tmp[13]).AvatarSizes.SIZE_16, style: tmp.avatar, user: closure_1, guildId: guild.guild.id, animate: true };
        tmp5 = outer1_8(outer1_0(tmp[13]).Avatar, obj);
      }
      const items = [tmp5, ];
      const obj1 = { variant: "text-sm/medium", color: "text-default" };
      if (null == username) {
        username = closure_1.username;
      }
      obj1.children = username;
      items[1] = outer1_8(outer1_0(tmp[14]).Text, obj1);
      obj.children = items;
      return outer1_9(closure_5, obj);
    },
    selectionActionComponent: obj,
    options: memo,
    selectedCount: items1.length,
    selectedOptions: items1,
    isSelected(value) {
      value = undefined;
      if (null != first1) {
        value = first1.value;
      }
      return value.value === value;
    },
    submitSelection,
    onQueryChange: tmp2[1],
    itemAccessibilityLabel(label) {
      return label.label;
    },
    allowEmpty: false,
    expanded: true
  };
  return callback(importDefault(10994), obj);
};
