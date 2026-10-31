// Module ID: 19990
// Function ID: 19991
// Name: SelectEmojiRolesActionSheet
// Dependencies: [32, 19, 17, 4920, 21, 5014, 575, 1625, 7217, 17190, 504, 6980, 5624, 1113, 7321, 5272, 7223, 6974, 13250, 7306, 2]
// Exports: default

// Module 19990 (SelectEmojiRolesActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: { flex: 1 }, row: obj2, label: obj3, roleName: { flexShrink: 1 }, saveButtonDisabled: { opacity: 0.3 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default function SelectEmojiRolesActionSheet(guildId) {
  let Text;
  let closure_3;
  let closure_5;
  let emoji;
  let first;
  let intl3;
  let intl4;
  let items2;
  let obj6;
  let saveButtonDisabled;
  let stringResult;
  let tmp10;
  let tmp9Result;
  guildId = guildId.guildId;
  ({ onSave: importDefault, emoji } = guildId);
  first = undefined;
  closure_5 = undefined;
  const onCancel = guildId.onCancel;
  const tmp = closure_9();
  _slicedToArray = tmp;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp4 = require("useScaledRowHeight")();
  [first, closure_5] = first.useState(() => {
    let roles;
    const _Set = Set;
    if (emoji != null) {
      roles = emoji.roles;
    }
    if (roles == null) {
      roles = [];
    }
    const _Set1 = new _Set(roles);
    return _Set1;
  });
  const tmp7 = first.size > 0;
  const tmp8 = guildId;
  let obj = guildId(emoji[9]);
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  let obj2 = guildId(emoji[10]);
  let items = [subscriptionListingsForGuild];
  const items1 = [guildId, subscriptionListingsForGuild];
  let closure_7 = obj2.useStateFromStoresArray(items, () => subscriptionListingsForGuild.map((role_id) => subscriptionListingsForGuild.getRole(guildId, role_id.role_id)), items1);
  let obj3 = {
    onPress: function handleSave() {
      importDefault(Array.from(first));
    },
    disabled: tmp10,
    accessibilityRole: "button",
    accessibilityState: { disabled: tmp10 },
    style: saveButtonDisabled,
    children: tmp9(Text, { variant: "text-md/semibold", color: "text-brand", children: stringResult })
  };
  tmp10 = !tmp7;
  saveButtonDisabled = undefined;
  const PressableOpacity = guildId(emoji[11]).PressableOpacity;
  const tmp2 = importDefault;
  if (!tmp7) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  Text = tmp8(tmp3[12]).Text;
  if (null == emoji) {
    const intl2 = tmp8(tmp3[13]).intl;
    stringResult = intl2.string(tmp8(tmp3[13]).t["3UB9ad"]);
  } else {
    let intl = tmp8(tmp3[13]).intl;
    stringResult = intl.string(tmp8(tmp3[13]).t["R3BPH+"]);
  }
  let obj4 = { title: intl3.string(tmp8(emoji[13]).t.JPU0EF), subtitle: intl4.string(tmp8(emoji[13]).t.MZusPv), trailing: tmp9Result };
  tmp9Result = closure_7(PressableOpacity, obj3);
  const BottomSheetTitleHeader = tmp8(tmp3[14]).BottomSheetTitleHeader;
  intl3 = tmp8(tmp3[13]).intl;
  intl4 = tmp8(tmp3[13]).intl;
  let obj5 = { scrollable: true, header: tmp9(BottomSheetTitleHeader, obj4), startExpanded: true, onDismiss: onCancel, children: tmp9(tmp2(emoji[16]), obj6) };
  closure_7(BottomSheetTitleHeader, obj4);
  BottomSheet = tmp8(tmp3[15]).BottomSheet;
  obj6 = {
    inActionSheet: true,
    style: tmp.list,
    estimatedListSize: "windowSize",
    itemSize: tmp4,
    insetEnd: bottom,
    sections: items2,
    renderItem: function renderRow(arg0, arg1) {
      let TableCheckboxRow;
      let items;
      let obj2;
      let obj3;
      let obj5;
      let obj8;
      let tmp10;
      let tmp13;
      let tmp7Result;
      let role_id = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      const intl = guildId(emoji[13]).intl;
      const stringResult = intl.string(guildId(emoji[13]).t.HRtfn9);
      const obj = { style: closure_3.row, children: closure_7(TableCheckboxRow, obj2) };
      obj2 = {
        start: 0 === arg1,
        end: arg1 === diff,
        label: tmp10(closure_5, obj3),
        accessibilityHint: tmp13,
        checked: first.has(subscriptionListingsForGuild[arg1].role_id),
        onPress() {
          role_id = role_id.role_id;
          return closure_5((has) => {
            set = new Set(has);
            if (has.has(role_id)) {
              set.delete(role_id);
            } else {
              set.add(role_id);
            }
            return set;
          });
        }
      };
      obj3 = { style: closure_3.label, children: items };
      TableCheckboxRow = guildId(emoji[17]).TableCheckboxRow;
      tmp10 = closure_1_8;
      if (null != closure_7[arg1]) {
        const obj4 = { style: closure_3.roleName, children: closure_7(require("RoleName"), obj5) };
        obj5 = { role: closure_7[arg1], children: subscriptionListingsForGuild[arg1].name };
        tmp7Result = tmp7(tmp8, obj4);
      } else {
        const obj6 = { style: closure_3.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: subscriptionListingsForGuild[arg1].name };
        tmp7Result = tmp7(tmp4(tmp5[12]).Text, obj6);
      }
      items = [tmp7Result, ];
      let archived = tmp.archived;
      if (archived) {
        const obj7 = { type: obj8, variant: "critical" };
        obj8 = { text: stringResult };
        archived = tmp7(tmp4(tmp5[19]).Badge, obj7);
      }
      items[1] = archived;
      tmp13 = undefined;
      if (subscriptionListingsForGuild[arg1].archived) {
        tmp13 = stringResult;
      }
      return closure_7(closure_5, obj);
    }
  };
  items2 = [subscriptionListingsForGuild.length];
  return closure_7(BottomSheet, obj5);
};
