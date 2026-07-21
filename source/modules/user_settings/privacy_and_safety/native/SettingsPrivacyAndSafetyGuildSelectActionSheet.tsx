// Module ID: 14409
// Function ID: 108698
// Name: getAllServersSearchableSelectOption
// Dependencies: []
// Exports: default

// Module 14409 (getAllServersSearchableSelectOption)
function getAllServersSearchableSelectOption() {
  let obj = { type: arg1(dependencyMap[8]).SelectOptionType.GUILD };
  obj = { id: closure_7 };
  const intl = arg1(dependencyMap[10]).intl;
  obj.name = intl.string(arg1(dependencyMap[10]).t.32u1Dx);
  obj.guild = arg1(dependencyMap[9]).dangerouslyConstructGuildRecordFromUntypedObject(obj);
  const intl2 = arg1(dependencyMap[10]).intl;
  obj.label = intl2.string(arg1(dependencyMap[10]).t.32u1Dx);
  obj.value = closure_7;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginRight: importDefault(dependencyMap[7]).space.PX_12 };
obj.iconContainer = obj;
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx");

export default function SettingsPrivacyAndSafetyGuildSelectActionSheet() {
  function submitSelection() {
    return tmp4(callback[12]).hideActionSheet();
  }
  let callback = submitSelection;
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const arg1 = first;
  const tmp4 = function useSelectedSearchableGuildOption() {
    const selectedGuildId = callback2().selectedGuildId;
    const first = selectedGuildId;
    let obj = first(callback[11]);
    const items = [closure_5];
    const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(selectedGuildId));
    if (selectedGuildId !== closure_7) {
      if (null != stateFromStores) {
        obj = { type: first(callback[8]).SelectOptionType.GUILD, guild: stateFromStores };
        ({ name: obj2.label, id: obj2.value } = stateFromStores);
      }
      return obj;
    }
    obj = callback4();
  }();
  const importDefault = tmp4;
  let obj = { "Bool(false)": null, "Bool(false)": null };
  const intl = arg1(dependencyMap[10]).intl;
  obj.placeholder = intl.string(arg1(dependencyMap[10]).t.ZImm/x);
  callback = React.useCallback((query) => function queryGuilds(query) {
    function guildRecordToGuildSearchableSelectOption(id) {
      return { type: guildRecordToGuildSearchableSelectOption(closure_2[8]).SelectOptionType.GUILD, value: id.id, label: id.name, guild: id };
    }
    const items = [callback2()];
    if (0 === query.length) {
      const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      return flattenedGuildIds.reduce((arr, guildId) => {
        const guild = guild.getGuild(guildId);
        if (null != guild) {
          arr.push(guildRecordToGuildSearchableSelectOption(guild));
        }
        return arr;
      }, items);
    } else {
      let obj = callback(closure_2[16]);
      obj = { query };
      return obj.queryGuilds(obj).map((record) => guildRecordToGuildSearchableSelectOption(record.record));
    }
  }(query), []);
  const dependencyMap = callback;
  const items = [first, callback];
  const memo = React.useMemo(() => callback(first), items);
  obj = {
    onPressOptionItem(arg0, guild) {
      callback(guild.guild.id);
      submitSelection();
    },
    renderHeaderIcon(value) {
      if (value.value === closure_7) {
        let obj = { size: "xs" };
        let tmp6 = callback3(first(callback[14]).GuildSelectDefaultIcon, obj);
      } else {
        obj = { guild: value.guild };
        const tmp4 = tmp4(callback[15]);
        obj.size = first(callback[15]).GuildIconSizes.XSMALL;
        tmp6 = callback3(tmp4, obj);
      }
      return tmp6;
    },
    renderIcon(value) {
      if (value.value === closure_7) {
        let tmp6 = callback3(first(callback[14]).GuildSelectDefaultIcon, {});
      } else {
        const obj = { guild: value.guild };
        const tmp4 = tmp4(callback[15]);
        obj.size = first(callback[15]).GuildIconSizes.SMALL_32;
        tmp6 = callback3(tmp4, obj);
      }
      return tmp6;
    },
    iconContainerStyle: callback2().iconContainer,
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
  const items1 = [tmp4];
  return jsx(importDefault(dependencyMap[13]), obj);
};
