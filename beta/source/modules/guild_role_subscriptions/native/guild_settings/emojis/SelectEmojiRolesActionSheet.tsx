// Module ID: 17609
// Function ID: 17610
// Name: SelectEmojiRolesActionSheet
// Dependencies: [32, 19, 17, 1181, 1085, 21, 4836, 576, 5836, 14757, 5435, 1177, 1115, 6570, 6618, 6493, 8053, 4832, 2]
// Exports: default

// Module 17609 (SelectEmojiRolesActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1177 */;
import FormConstants from "FormConstants" /* 1181 */;
import Pressables from "Pressables" /* 5435 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 14757 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, set;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp5;
const intl5 = tmp5(1115);
const BottomSheetTitleHeader2 = tmp5(6570);
const ActionSheet2 = tmp5(6618);
let react = react_mod;
const View = react_native.View;
const FORM_ROW_VERTICAL_PADDING = FormConstants.FORM_ROW_VERTICAL_PADDING;
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
const itemSize = FORM_ROW_VERTICAL_PADDING + 22;
let createStyles = createStyles_mod;
let obj = { list: obj2, label: { flex: 1, flexDirection: "row", alignItems: "center" }, roleName: obj3, archivedBadge: obj4, archivedBadgeText: obj5, divider: obj6, saveButton: obj7, saveButtonDisabled: { opacity: 0.3 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1 };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj4 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.RED_400, marginLeft: 8, paddingHorizontal: 4, height: 16 };
obj5 = {};
const PRIMARY_BOLD = Fonts.PRIMARY_BOLD;
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(PRIMARY_BOLD, nativeDefault.unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj6 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = {};
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default function SelectEmojiRolesActionSheet(arg0) {
  let LegacyText;
  let closure_2;
  let closure_4;
  let emoji;
  let guildId;
  let intl3;
  let intl4;
  let items1;
  let obj3;
  let obj6;
  let onCancel;
  let saveButtonDisabled;
  let stringResult;
  let tmp7Result;
  ({ onSave: require, emoji } = arg0);
  let first;
  react = undefined;
  ({ guildId, onCancel } = arg0);
  const tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = first(react.useState(() => {
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
  }), 2);
  first = tmp2[0];
  react = tmp2[1];
  let tmp4 = first.size > 0;
  const tmp5 = require;
  const tmp6 = dependencyMap;
  let obj = GuildRoleSubscriptionsHooks;
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  const tmp7 = closure_6;
  let obj2 = {
    onPress() {
      require(Array.from(first));
    },
    disabled: saveButtonDisabled,
    accessibilityRole: "button",
    children: tmp7(LegacyText, obj3)
  };
  saveButtonDisabled = !tmp4;
  const PressableOpacity = Pressables.PressableOpacity;
  let items = [tmp.saveButton, ];
  LegacyText = native.LegacyText;
  if (!tmp4) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  obj3 = { style: items, children: stringResult };
  items[1] = saveButtonDisabled;
  if (null == emoji) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t["3UB9ad"]);
  } else {
    let intl = intl5.intl;
    stringResult = intl.string(intl5.t["R3BPH+"]);
  }
  let obj4 = { title: intl3.string(intl5.t.JPU0EF), subtitle: intl4.string(intl5.t.MZusPv), trailing: tmp7Result };
  tmp7Result = tmp7(PressableOpacity, obj2);
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  let obj5 = { scrollable: true, header: tmp7(BottomSheetTitleHeader, obj4), startExpanded: true, onDismiss: onCancel, children: tmp7(emoji(6493), obj6) };
  tmp7(BottomSheetTitleHeader, obj4);
  const ActionSheet = ActionSheet2.ActionSheet;
  obj6 = {
    inActionSheet: true,
    style: tmp.list,
    itemSize,
    sections: items1,
    renderItem(arg0, arg1) {
      let Checkbox;
      let Text;
      let intl;
      let items;
      let obj4;
      let obj6;
      let role_id = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      const obj = { style: closure_2.label, children: items };
      const FormRow = require("Form").FormRow;
      items = [, ];
      const obj2 = { style: closure_2.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: subscriptionListingsForGuild[arg1].name };
      items[0] = closure_1_6(require("Text/Text").Text, obj2);
      let archived = tmp.archived;
      const tmp4 = closure_1_8;
      if (archived) {
        const obj3 = { style: closure_2.archivedBadge, children: closure_1_6(Text, obj4) };
        obj4 = { style: closure_2.archivedBadgeText, variant: "text-xs/bold", color: "text-overlay-light", children: intl.string(require("intl").t.HRtfn9) };
        Text = tmp6(tmp7[17]).Text;
        intl = tmp6(tmp7[12]).intl;
        archived = tmp5(tmp8, obj3);
      }
      const tmp10 = arg1 === diff;
      items[1] = archived;
      const obj5 = {
        label: closure_1_7(subscriptionListingsForGuild, obj),
        onPress() {
          role_id = role_id.role_id;
          return closure_4((has) => {
            set = new Set(has);
            if (has.has(role_id)) {
              set.delete(role_id);
            } else {
              set.add(role_id);
            }
            return set;
          });
        },
        trailing: closure_1_6(Checkbox, obj6)
      };
      obj6 = { selected: first.has(subscriptionListingsForGuild[arg1].role_id) };
      Checkbox = tmp6(tmp7[16]).FormRow.Checkbox;
      const children = [closure_1_6(FormRow, obj5), ];
      let tmp5Result = !tmp10;
      if (tmp5Result) {
        const obj7 = { style: closure_2.divider };
        tmp5Result = tmp5(tmp6(tmp7[16]).FormDivider, obj7);
      }
      children[1] = tmp5Result;
      return closure_1_7(tmp4, { children });
    }
  };
  items1 = [subscriptionListingsForGuild.length];
  return tmp7(ActionSheet, obj5);
};
