// Module ID: 18309
// Function ID: 18310
// Name: SelectEmojiRolesActionSheet
// Dependencies: [32, 19, 17, 1204, 1096, 21, 5090, 587, 5902, 558, 576, 15307, 8555, 5086, 1126, 1200, 6189, 6828, 6752, 6885, 2]

// Module 18309 (SelectEmojiRolesActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 1200 */;
import FormConstants from "FormConstants" /* 1204 */;
import Pressables from "Pressables" /* 6189 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15307 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import TextStyles_mod from "TextStyles" /* 5902 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const intl5 = tmp5(1126);
const BottomSheetTitleHeader2 = tmp5(6828);
const ActionSheet2 = tmp5(6885);
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
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectEmojiRolesActionSheet(onSave) {
  let closure_2;
  let closure_4;
  let first1;
  let tmp13;
  let tmp14;
  let tmp8;
  const tmp = onSave;
  let obj = onSave(576);
  const cResult = obj.c(41);
  onSave = onSave.onSave;
  const emoji = onSave.emoji;
  const onCancel = onSave.onCancel;
  const guildId = onSave.guildId;
  let tmp4 = closure_10();
  dependencyMap = tmp4;
  const tmp5 = null == emoji;
  let roles;
  const first = cResult[0];
  if (emoji != null) {
    roles = emoji.roles;
  }
  if (first !== roles) {
    let roles1;
    if (emoji != null) {
      roles1 = emoji.roles;
    }
    const fn = function s() {
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
    };
    cResult[0] = roles1;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  let tmp10 = first1(react.useState(tmp8), 2);
  first1 = tmp10[0];
  react = tmp10[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeSoftDeleted: true, sortDeletedListingsLast: true };
    cResult[2] = obj2;
    tmp13 = obj2;
  } else {
    tmp13 = cResult[2];
  }
  const tmpResult = tmp(15307);
  const subscriptionListingsForGuild = tmpResult.useSubscriptionListingsForGuild(guildId, tmp13);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function toggleRole(arg0) {
      let closure_0 = arg0;
      return closure_4((has) => {
        set = new Set(has);
        if (has.has(closure_0)) {
          set.delete(closure_0);
        } else {
          set.add(closure_0);
        }
        return set;
      });
    }
    cResult[3] = toggleRole;
    tmp14 = toggleRole;
  } else {
    tmp14 = cResult[3];
  }
  let closure_6 = tmp14;
  if (cResult[4] === onSave) {
    let tmp15;
    if (cResult[5] === first1) {
      tmp15 = cResult[6];
    }
    if (cResult[7] === first1) {
      if (cResult[8] === tmp4.archivedBadge) {
        if (cResult[9] === tmp4.archivedBadgeText) {
          if (cResult[10] === tmp4.divider) {
            if (cResult[11] === tmp4.label) {
              if (cResult[12] === tmp4.roleName) {
                let tmp16;
                if (cResult[13] === subscriptionListingsForGuild) {
                  tmp16 = cResult[14];
                }
                let saveButtonDisabled = tmp17;
                if (first1.size <= 0) {
                  saveButtonDisabled = tmp4.saveButtonDisabled;
                }
                if (cResult[15] === tmp4.saveButton) {
                  let tmp18;
                  let tmp19;
                  if (cResult[16] === saveButtonDisabled) {
                    tmp18 = cResult[17];
                  }
                  if (cResult[18] !== tmp5) {
                    let stringResult;
                    let intl = tmp(1126).intl;
                    const string = intl.string;
                    const t = tmp(1126).t;
                    if (tmp5) {
                      stringResult = string(t["3UB9ad"]);
                    } else {
                      stringResult = string(t["R3BPH+"]);
                    }
                    cResult[18] = tmp5;
                    cResult[19] = stringResult;
                    tmp19 = stringResult;
                  } else {
                    tmp19 = cResult[19];
                  }
                  if (cResult[20] === tmp18) {
                    let tmp21;
                    if (cResult[21] === tmp19) {
                      tmp21 = cResult[22];
                    }
                    if (cResult[23] === tmp15) {
                      if (cResult[24] === tmp21) {
                        let tmp24;
                        let tmp28;
                        let tmp27;
                        let tmp31;
                        let tmp34;
                        if (cResult[25] === first1.size <= 0) {
                          tmp24 = cResult[26];
                        }
                        const _Symbol = Symbol;
                        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(1126).intl;
                          const stringResult1 = intl2.string(tmp(1126).t.JPU0EF);
                          const intl3 = tmp(1126).intl;
                          const stringResult2 = intl3.string(tmp(1126).t.MZusPv);
                          cResult[27] = stringResult1;
                          cResult[28] = stringResult2;
                          tmp28 = stringResult2;
                          tmp27 = stringResult1;
                        } else {
                          tmp27 = cResult[27];
                          tmp28 = cResult[28];
                        }
                        if (cResult[29] !== tmp24) {
                          let obj3 = { title: tmp27, subtitle: tmp28, trailing: tmp24 };
                          const tmp33 = closure_6(tmp(6828).BottomSheetTitleHeader, obj3);
                          cResult[29] = tmp24;
                          cResult[30] = tmp33;
                          tmp31 = tmp33;
                        } else {
                          tmp31 = cResult[30];
                        }
                        if (cResult[31] !== subscriptionListingsForGuild.length) {
                          let items = [subscriptionListingsForGuild.length];
                          cResult[31] = subscriptionListingsForGuild.length;
                          cResult[32] = items;
                          tmp34 = items;
                        } else {
                          tmp34 = cResult[32];
                        }
                        if (cResult[33] === tmp16) {
                          if (cResult[34] === tmp4.list) {
                            let tmp35;
                            if (cResult[35] === tmp34) {
                              tmp35 = cResult[36];
                            }
                            if (cResult[37] === tmp31) {
                              if (cResult[38] === onCancel) {
                                let tmp40;
                                if (cResult[39] === tmp35) {
                                  tmp40 = cResult[40];
                                }
                                return tmp40;
                              }
                            }
                            let obj4 = { scrollable: true, header: tmp31, startExpanded: true, onDismiss: onCancel, children: tmp35 };
                            const tmp42 = closure_6(tmp(6885).ActionSheet, obj4);
                            cResult[37] = tmp31;
                            cResult[38] = onCancel;
                            cResult[39] = tmp35;
                            cResult[40] = tmp42;
                            tmp40 = tmp42;
                          }
                        }
                        let obj5 = { inActionSheet: true, style: tmp4.list, itemSize, sections: tmp34, renderItem: tmp16 };
                        const tmp39 = closure_6(emoji(6752), obj5);
                        cResult[33] = tmp16;
                        cResult[34] = tmp4.list;
                        cResult[35] = tmp34;
                        cResult[36] = tmp39;
                        tmp35 = tmp39;
                      }
                    }
                    let obj6 = { onPress: tmp15, disabled: first1.size <= 0, accessibilityRole: "button", children: tmp21 };
                    const tmp26 = closure_6(tmp(6189).PressableOpacity, obj6);
                    cResult[23] = tmp15;
                    cResult[24] = tmp21;
                    cResult[25] = first1.size <= 0;
                    cResult[26] = tmp26;
                    tmp24 = tmp26;
                  }
                  let obj7 = { style: tmp18, children: tmp19 };
                  const tmp23 = closure_6(tmp(1200).LegacyText, obj7);
                  cResult[20] = tmp18;
                  cResult[21] = tmp19;
                  cResult[22] = tmp23;
                  tmp21 = tmp23;
                }
                const items1 = [tmp4.saveButton, saveButtonDisabled];
                cResult[15] = tmp4.saveButton;
                cResult[16] = saveButtonDisabled;
                cResult[17] = items1;
                tmp18 = items1;
              }
            }
          }
        }
      }
    }
    function renderRow(arg0, arg1) {
      let Checkbox;
      let Text;
      let intl;
      let items;
      let obj4;
      let obj6;
      const role_id = tmp;
      const diff = subscriptionListingsForGuild.length - 1;
      const obj = { style: closure_2.label, children: items };
      const FormRow = onSave(closure_2[12]).FormRow;
      items = [, ];
      const obj2 = { style: closure_2.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: subscriptionListingsForGuild[arg1].name };
      items[0] = closure_6(onSave(closure_2[13]).Text, obj2);
      let archived = tmp.archived;
      const tmp4 = closure_1_8;
      if (archived) {
        const obj3 = { style: closure_2.archivedBadge, children: closure_6(Text, obj4) };
        obj4 = { style: closure_2.archivedBadgeText, variant: "text-xs/bold", color: "text-overlay-light", children: intl.string(onSave(closure_2[14]).t.HRtfn9) };
        Text = tmp6(tmp7[13]).Text;
        intl = tmp6(tmp7[14]).intl;
        archived = tmp5(tmp8, obj3);
      }
      const tmp10 = arg1 === diff;
      items[1] = archived;
      const obj5 = {
        label: closure_1_7(subscriptionListingsForGuild, obj),
        onPress() {
          return closure_6(role_id.role_id);
        },
        trailing: closure_6(Checkbox, obj6)
      };
      obj6 = { selected: first1.has(subscriptionListingsForGuild[arg1].role_id) };
      Checkbox = tmp6(tmp7[12]).FormRow.Checkbox;
      const children = [closure_6(FormRow, obj5), ];
      let tmp5Result = !tmp10;
      if (tmp5Result) {
        const obj7 = { style: closure_2.divider };
        tmp5Result = tmp5(tmp6(tmp7[12]).FormDivider, obj7);
      }
      children[1] = tmp5Result;
      return closure_1_7(tmp4, { children });
    }
    cResult[7] = first1;
    cResult[8] = tmp4.archivedBadge;
    cResult[9] = tmp4.archivedBadgeText;
    cResult[10] = tmp4.divider;
    cResult[11] = tmp4.label;
    cResult[12] = tmp4.roleName;
    cResult[13] = subscriptionListingsForGuild;
    cResult[14] = renderRow;
    tmp16 = renderRow;
  }
  function handleSave() {
    onSave(Array.from(first1));
  }
  cResult[4] = onSave;
  cResult[5] = first1;
  cResult[6] = handleSave;
  tmp15 = handleSave;
}) : (function SelectEmojiRolesActionSheet(arg0) {
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
    onPress: function handleSave() {
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
  let obj5 = { scrollable: true, header: tmp7(BottomSheetTitleHeader, obj4), startExpanded: true, onDismiss: onCancel, children: tmp7(emoji(6752), obj6) };
  tmp7(BottomSheetTitleHeader, obj4);
  const ActionSheet = ActionSheet2.ActionSheet;
  obj6 = {
    inActionSheet: true,
    style: tmp.list,
    itemSize,
    sections: items1,
    renderItem: function renderRow(arg0, arg1) {
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
        Text = tmp6(tmp7[13]).Text;
        intl = tmp6(tmp7[14]).intl;
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
      Checkbox = tmp6(tmp7[12]).FormRow.Checkbox;
      const children = [closure_1_6(FormRow, obj5), ];
      let tmp5Result = !tmp10;
      if (tmp5Result) {
        const obj7 = { style: closure_2.divider };
        tmp5Result = tmp5(tmp6(tmp7[12]).FormDivider, obj7);
      }
      children[1] = tmp5Result;
      return closure_1_7(tmp4, { children });
    }
  };
  items1 = [subscriptionListingsForGuild.length];
  return tmp7(ActionSheet, obj5);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default tmp10;
