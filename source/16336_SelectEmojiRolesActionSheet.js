// Module ID: 16336
// Function ID: 126058
// Name: SelectEmojiRolesActionSheet
// Dependencies: []
// Exports: default

// Module 16336 (SelectEmojiRolesActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const Fonts = arg1(dependencyMap[4]).Fonts;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[5]));
let closure_9 = arg1(dependencyMap[3]).FORM_ROW_VERTICAL_PADDING + 22;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.list = obj;
obj.label = { marginBottom: null, borderRadius: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", backgroundColor: true };
const obj1 = { flexShrink: 1 };
const tmp2 = arg1(dependencyMap[5]);
const merged = Object.assign(importDefault(dependencyMap[8])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj.roleName = obj1;
const importDefaultResult = importDefault(dependencyMap[8]);
obj.archivedBadge = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.RED_400 };
const obj2 = { borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.RED_400 };
const obj3 = {};
const merged1 = Object.assign(importDefault(dependencyMap[8])(Fonts.PRIMARY_BOLD, importDefault(dependencyMap[7]).unsafe_rawColors.WHITE, 12, { uppercase: true }));
obj.archivedBadgeText = obj3;
const importDefaultResult1 = importDefault(dependencyMap[8]);
const obj4 = { uppercase: true };
obj.divider = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
const obj5 = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
const obj6 = {};
const merged2 = Object.assign(importDefault(dependencyMap[8])(Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[7]).colors.CONTROL_BRAND_FOREGROUND, 16));
obj.saveButton = obj6;
obj.saveButtonDisabled = { opacity: 0.3 };
let closure_10 = obj.createStyles(obj);
const importDefaultResult2 = importDefault(dependencyMap[8]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default function SelectEmojiRolesActionSheet(arg0) {
  let emoji;
  let guildId;
  let onCancel;
  ({ onSave: closure_0, emoji } = arg0);
  const importDefault = emoji;
  ({ guildId, onCancel } = arg0);
  const tmp = callback3();
  const dependencyMap = tmp;
  const tmp2 = callback(React.useState(() => {
    let roles;
    if (null != emoji) {
      roles = emoji.roles;
    }
    if (null == roles) {
      roles = [];
    }
    return new Set(roles);
  }), 2);
  const first = tmp2[0];
  const callback = first;
  const React = tmp2[1];
  let obj = arg1(dependencyMap[9]);
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, { position: null, top: null });
  const View = subscriptionListingsForGuild;
  obj = {
    onPress() {
      callback(Array.from(first));
    }
  };
  let saveButtonDisabled = !tmp4;
  obj.disabled = saveButtonDisabled;
  obj.accessibilityRole = "button";
  obj = {};
  const items = [tmp.saveButton, ];
  if (first.size <= 0) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  items[1] = saveButtonDisabled;
  obj.style = items;
  if (null == emoji) {
    const intl2 = arg1(dependencyMap[12]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[12]).t.3UB9ad);
  } else {
    const intl = arg1(dependencyMap[12]).intl;
    stringResult = intl.string(arg1(dependencyMap[12]).t.R3BPH+);
  }
  obj.children = stringResult;
  obj.children = callback2(arg1(dependencyMap[11]).LegacyText, obj);
  const obj1 = {};
  const intl3 = arg1(dependencyMap[12]).intl;
  obj1.title = intl3.string(arg1(dependencyMap[12]).t.JPU0EF);
  const intl4 = arg1(dependencyMap[12]).intl;
  obj1.subtitle = intl4.string(arg1(dependencyMap[12]).t.MZusPv);
  obj1.trailing = callback2(arg1(dependencyMap[10]).PressableOpacity, obj);
  const tmp5Result = callback2(arg1(dependencyMap[10]).PressableOpacity, obj);
  const obj2 = { -1383050488: 24, -1600148191: 24, -1353556895: null, header: callback2(arg1(dependencyMap[13]).BottomSheetTitleHeader, obj1), onDismiss: onCancel };
  const items1 = [subscriptionListingsForGuild.length];
  obj2.children = callback2(importDefault(dependencyMap[15]), {
    inActionSheet: true,
    style: tmp.list,
    itemSize: closure_9,
    sections: items1,
    renderItem(arg0, arg1) {
      const tmp = subscriptionListingsForGuild[arg1];
      let obj = {};
      obj = {};
      obj = { style: tmp.label };
      const items = [callback2(tmp(tmp[17]).Text, { style: tmp.roleName, children: tmp.name }), ];
      let archived = tmp.archived;
      if (archived) {
        const obj2 = { style: tmp.archivedBadge };
        const obj3 = { Promise: 369098752, marginTop: 16777216, flags: 882, style: tmp.archivedBadgeText };
        const intl = tmp(tmp[12]).intl;
        obj3.children = intl.string(tmp(tmp[12]).t.HRtfn9);
        obj2.children = callback2(tmp(tmp[17]).Text, obj3);
        archived = callback2(subscriptionListingsForGuild, obj2);
      }
      items[1] = archived;
      obj.children = items;
      obj.label = closure_7(subscriptionListingsForGuild, obj);
      obj.onPress = function onPress() {
        return function toggleRole(role_id) {
          return callback((has) => {
            const set = new Set(has);
            if (has.has(has)) {
              set.delete(has);
            } else {
              set.add(has);
            }
            return set;
          });
        }(tmp.role_id);
      };
      const obj4 = { selected: first.has(tmp.role_id) };
      obj.trailing = callback2(tmp(tmp[16]).FormRow.Checkbox, obj4);
      const items1 = [callback2(tmp(tmp[16]).FormRow, obj), ];
      let tmp12 = !tmp2;
      if (arg1 !== subscriptionListingsForGuild.length - 1) {
        const obj5 = { style: tmp.divider };
        tmp12 = callback2(tmp(tmp[16]).FormDivider, obj5);
      }
      items1[1] = tmp12;
      obj.children = items1;
      return closure_7(closure_8, obj);
    }
  });
  return callback2(arg1(dependencyMap[14]).ActionSheet, obj2);
};
