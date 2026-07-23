// Module ID: 16476
// Function ID: 128366
// Name: SelectEmojiRolesActionSheet
// Dependencies: [57, 31, 27, 1277, 482, 33, 4130, 689, 5052, 14101, 4660, 1273, 1212, 5186, 5500, 7588, 7495, 4126, 2]
// Exports: default

// Module 16476 (SelectEmojiRolesActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { Fonts } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import importDefaultResult2 from "createTextStyle";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = require("semanticColor").FORM_ROW_VERTICAL_PADDING + 22;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.list = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.label = { flex: 1, flexDirection: "row", alignItems: "center" };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, 16));
_createForOfIteratorHelperLoose.roleName = { flexShrink: 1 };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, marginLeft: 8, paddingHorizontal: 4, height: 16 };
_createForOfIteratorHelperLoose.archivedBadge = obj2;
let obj1 = { flexShrink: 1 };
let obj3 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_BOLD, require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 12, { uppercase: true }));
_createForOfIteratorHelperLoose.archivedBadgeText = obj3;
let obj4 = { uppercase: true };
_createForOfIteratorHelperLoose.divider = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const obj6 = {};
const merged2 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND, 16));
_createForOfIteratorHelperLoose.saveButton = obj6;
_createForOfIteratorHelperLoose.saveButtonDisabled = { opacity: 0.3 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default function SelectEmojiRolesActionSheet(arg0) {
  let emoji;
  let guildId;
  let onCancel;
  let require;
  ({ onSave: require, emoji } = arg0);
  ({ guildId, onCancel } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  const tmp2 = first(React.useState(() => {
    let roles;
    if (null != emoji) {
      roles = emoji.roles;
    }
    if (null == roles) {
      roles = [];
    }
    return new Set(roles);
  }), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = require(14101) /* _createForOfIteratorHelperLoose */;
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  obj = {
    onPress() {
      callback(Array.from(first));
    }
  };
  let saveButtonDisabled = !tmp4;
  obj.disabled = saveButtonDisabled;
  obj.accessibilityRole = "button";
  obj = {};
  let items = [tmp.saveButton, ];
  if (first.size <= 0) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  items[1] = saveButtonDisabled;
  obj.style = items;
  if (null == emoji) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["3UB9ad"]);
  } else {
    let intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t["R3BPH+"]);
  }
  obj.children = stringResult;
  obj.children = callback(require(1273) /* Button */.LegacyText, obj);
  let obj1 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl3.string(require(1212) /* getSystemLocale */.t.JPU0EF);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.subtitle = intl4.string(require(1212) /* getSystemLocale */.t.MZusPv);
  obj1.trailing = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  const tmp5Result = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  let obj2 = { scrollable: true, header: callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj1), startExpanded: true, onDismiss: onCancel };
  let items1 = [subscriptionListingsForGuild.length];
  obj2.children = callback(emoji(7588), {
    inActionSheet: true,
    style: tmp.list,
    itemSize: closure_9,
    sections: items1,
    renderItem(arg0, arg1) {
      let closure_0 = tmp;
      let obj = {};
      obj = {};
      obj = { style: tmp.label };
      const obj1 = { style: subscriptionListingsForGuild[arg1].roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: subscriptionListingsForGuild[arg1].name };
      const items = [outer1_6(outer1_0(subscriptionListingsForGuild[arg1][17]).Text, obj1), ];
      let archived = tmp.archived;
      if (archived) {
        const obj2 = { style: tmp.archivedBadge };
        const obj3 = { style: tmp.archivedBadgeText, variant: "text-xs/bold", color: "text-overlay-light" };
        const intl = outer1_0(tmp[12]).intl;
        obj3.children = intl.string(outer1_0(tmp[12]).t.HRtfn9);
        obj2.children = outer1_6(outer1_0(tmp[17]).Text, obj3);
        archived = outer1_6(subscriptionListingsForGuild, obj2);
      }
      items[1] = archived;
      obj.children = items;
      obj.label = outer1_7(subscriptionListingsForGuild, obj);
      obj.onPress = function onPress() {
        return (function toggleRole(role_id) {
          let closure_0 = role_id;
          return outer2_4((has) => {
            const set = new Set(has);
            if (has.has(closure_0)) {
              set.delete(closure_0);
            } else {
              set.add(closure_0);
            }
            return set;
          });
        })(tmp.role_id);
      };
      const obj4 = { selected: first.has(subscriptionListingsForGuild[arg1].role_id) };
      obj.trailing = outer1_6(outer1_0(subscriptionListingsForGuild[arg1][16]).FormRow.Checkbox, obj4);
      const items1 = [outer1_6(outer1_0(subscriptionListingsForGuild[arg1][16]).FormRow, obj), ];
      let tmp12 = !tmp2;
      if (arg1 !== subscriptionListingsForGuild.length - 1) {
        const obj5 = { style: tmp.divider };
        tmp12 = outer1_6(outer1_0(tmp[16]).FormDivider, obj5);
      }
      items1[1] = tmp12;
      obj.children = items1;
      return outer1_7(outer1_8, obj);
    }
  });
  return callback(require(5500) /* ActionSheet */.ActionSheet, obj2);
};
