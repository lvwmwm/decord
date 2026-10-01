// Module ID: 15487
// Function ID: 15488
// Name: SettingsPrivacyAndSafetyGuildSelectActionSheet
// Dependencies: [32, 19, 2067, 5750, 15486, 21, 4836, 576, 5067, 2059, 1115, 504, 4800, 11300, 14250, 5896, 5754, 2]
// Exports: default

// Module 15487 (SettingsPrivacyAndSafetyGuildSelectActionSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserSettingsSafetySelectedGuildStore from "UserSettingsSafetySelectedGuildStore" /* 15486 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let flattenedGuildIds, record;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
({ GUILD_SELECT_ALL_SERVERS_OPTION_ID: metroImportDefault, setSelectedGuildId: metroImportAll, useUserSafetySettingsSelectedGuildStore: c9 } = UserSettingsSafetySelectedGuildStore);
const jsx = Fragment.jsx;
let obj = { iconContainer: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_12 };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx");

export default function SettingsPrivacyAndSafetyGuildSelectActionSheet() {
  let callback;
  let dangerouslyConstructGuildRecordFromUntypedObject;
  let first;
  let intl;
  let intl2;
  let intl3;
  let obj12;
  let tmp4;
  let obj = react;
  let tmp = closure_11();
  [first, tmp4] = react.useState("");
  const selectedGuildId = closure_9().selectedGuildId;
  let tmp6 = callback;
  let obj2 = first(callback[11]);
  let items = [GuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => guild.getGuild(selectedGuildId));
  if (selectedGuildId !== id) {
    let obj4;
    if (null != stateFromStores) {
      obj4 = { type: tmp5(tmp6[8]).SelectOptionType.GUILD, guild: stateFromStores, label: null, value: null };
      ({ name: obj3.label, id: obj3.value } = stateFromStores);
    }
    function submitSelection() {
      const obj = obj4(callback[12]);
      return obj.hideActionSheet();
    }
    const obj5 = { maxValues: 1, minValues: 1, placeholder: intl3.string(first(tmp6[10]).t["ZImm/x"]) };
    intl3 = tmp5(tmp6[10]).intl;
    callback = obj.useCallback((query) => {
      let dangerouslyConstructGuildRecordFromUntypedObject;
      let intl;
      let intl2;
      let obj2;
      let reduced;
      let obj = { type: first(callback[8]).SelectOptionType.GUILD, guild: dangerouslyConstructGuildRecordFromUntypedObject(obj2), label: intl2.string(first(callback[10]).t["32u1Dx"]), value };
      const tmp2 = first(callback[9]);
      dangerouslyConstructGuildRecordFromUntypedObject = tmp2.dangerouslyConstructGuildRecordFromUntypedObject;
      obj2 = { id: value, name: intl.string(first(callback[10]).t["32u1Dx"]) };
      intl = first(callback[10]).intl;
      intl2 = first(callback[10]).intl;
      const items = [obj];
      const tmp = callback;
      if (0 === query.length) {
        flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
        reduced = flattenedGuildIds.reduce((acc, item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            const obj = { type: first(callback[8]).SelectOptionType.GUILD, value: null, label: null, guild };
            const push = acc.push;
            ({ id: obj.value, name: obj.label } = guild);
            push(obj);
          }
          return acc;
        }, items);
      } else {
        const obj3 = obj4(tmp[16]);
        obj4 = { query };
        const queryGuildsResult = obj3.queryGuilds(obj4);
        reduced = queryGuildsResult.map((record) => {
          record = record.record;
          const obj = { type: first(callback[8]).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
          return obj;
        });
      }
      return reduced;
    }, []);
    const items1 = [first, callback];
    const memo = obj.useMemo(() => callback(first), items1);
    const items2 = [obj4];
    return jsx(obj4(tmp6[13]), {
      onPressOptionItem(arg0, guild) {
          closure_1_8(guild.guild.id);
          const obj = obj4(callback[12]);
          obj.hideActionSheet();
        },
      renderHeaderIcon(value) {
          let tmp6;
          if (value.value === closure_1_7) {
            tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, { size: "xs" });
          } else {
            obj4(callback[15]);
            tmp6 = <tmp4 guild={arg0.guild} size={first(callback[15]).GuildIconSizes.XSMALL} />;
          }
          return tmp6;
        },
      renderIcon(value) {
          let tmp6;
          if (value.value === closure_1_7) {
            tmp6 = jsx(first(callback[14]).GuildSelectDefaultIcon, {});
          } else {
            obj4(callback[15]);
            tmp6 = <tmp4 guild={arg0.guild} size={first(callback[15]).GuildIconSizes.SMALL_32} />;
          }
          return tmp6;
        },
      iconContainerStyle: tmp.iconContainer,
      selectionActionComponent: obj5,
      options: memo,
      selectedCount: 1,
      selectedOptions: items2,
      isSelected(value) {
          return value.value === obj4.value;
        },
      submitSelection,
      onQueryChange: tmp4,
      itemAccessibilityLabel(label) {
          return label.label;
        },
      allowEmpty: false,
      expanded: true
    });
  }
  const obj7 = { type: first(tmp6[8]).SelectOptionType.GUILD, guild: dangerouslyConstructGuildRecordFromUntypedObject(obj12), label: intl2.string(first(tmp6[10]).t["32u1Dx"]), value: id };
  obj12 = { id, name: intl.string(first(tmp6[10]).t["32u1Dx"]) };
  dangerouslyConstructGuildRecordFromUntypedObject = tmp5(tmp6[9]).dangerouslyConstructGuildRecordFromUntypedObject;
  first(tmp6[9]);
  intl = tmp5(tmp6[10]).intl;
  intl2 = tmp5(tmp6[10]).intl;
  obj4 = obj7;
};
