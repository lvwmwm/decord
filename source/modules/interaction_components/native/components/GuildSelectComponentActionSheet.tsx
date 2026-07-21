// Module ID: 13496
// Function ID: 102414
// Name: GuildSelectComponentActionSheet
// Dependencies: []
// Exports: default

// Module 13496 (GuildSelectComponentActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ guildIdentity: { "Null": 7, "Null": 370 }, iconContainer: { marginRight: 16 }, avatar: { marginRight: 4 } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx");

export default function GuildSelectComponentActionSheet(arg0) {
  let selectedGuild;
  ({ selectedGuild, onSelectGuild: closure_0, user: closure_1 } = arg0);
  let closure_6;
  function submitSelection() {
    return lib(tmp[9]).hideActionSheet();
  }
  let closure_7 = submitSelection;
  const tmp = callback3();
  const dependencyMap = tmp;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  let callback = first;
  let obj = { type: arg1(dependencyMap[7]).SelectOptionType.GUILD, value: selectedGuild.id, label: selectedGuild.name, guild: selectedGuild };
  const tmp4 = callback(React.useState(obj), 2);
  const first1 = tmp4[0];
  const React = first1;
  let closure_5 = tmp4[1];
  if (null != first1) {
    const items = [first1];
    let items1 = items;
  } else {
    items1 = [];
  }
  obj = { "Bool(false)": null, "Bool(false)": null };
  const intl = arg1(dependencyMap[8]).intl;
  obj.placeholder = intl.string(arg1(dependencyMap[8]).t.ZImm/x);
  callback = React.useCallback((query) => function queryGuilds(query) {
    function guildRecordToGuildSearchableSelectOption(id) {
      return { type: guildRecordToGuildSearchableSelectOption(closure_2[7]).SelectOptionType.GUILD, value: id.id, label: id.name, guild: id };
    }
    if (0 === query.length) {
      const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const _Array = Array;
      const array = new Array();
      return flattenedGuildIds.reduce((arr, guildId) => {
        const guild = guild.getGuild(guildId);
        if (null != guild) {
          arr.push(guildRecordToGuildSearchableSelectOption(guild));
        }
        return arr;
      }, array);
    } else {
      let obj = callback(closure_2[15]);
      obj = { query };
      return obj.queryGuilds(obj).map((record) => guildRecordToGuildSearchableSelectOption(record.record));
    }
  }(query), []);
  closure_6 = callback;
  const items2 = [first, callback];
  const memo = React.useMemo(() => callback(first), items2);
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
      return callback3(lib(tmp[11]), { guild: guild.guild });
    },
    renderHeaderIcon(guild) {
      const obj = {};
      const tmp = lib(tmp[11]);
      obj.size = callback(tmp[11]).GuildIconSizes.XSMALL;
      obj.guild = guild.guild;
      return callback3(tmp, obj);
    },
    iconContainerStyle: tmp.iconContainer,
    renderDescription(guild) {
      const hasAvatarForGuildResult = lib.hasAvatarForGuild(guild.guild.id);
      let obj = lib(tmp[12]);
      let username = obj.getNickname(guild.guild.id, undefined, lib);
      obj = { style: tmp.guildIdentity };
      let tmp5 = hasAvatarForGuildResult;
      if (hasAvatarForGuildResult) {
        obj = { size: callback(tmp[13]).AvatarSizes.SIZE_16, style: tmp.avatar, user: lib, guildId: guild.guild.id, animate: true };
        tmp5 = callback3(callback(tmp[13]).Avatar, obj);
      }
      const items = [tmp5, ];
      const obj1 = {};
      if (null == username) {
        username = lib.username;
      }
      obj1.children = username;
      items[1] = callback3(callback(tmp[14]).Text, obj1);
      obj.children = items;
      return closure_9(closure_5, obj);
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
  return callback2(importDefault(dependencyMap[10]), obj);
};
