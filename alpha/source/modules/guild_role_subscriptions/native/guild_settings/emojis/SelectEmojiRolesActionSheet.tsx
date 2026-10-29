// Module ID: 19869
// Function ID: 19870
// Name: SelectEmojiRolesActionSheet
// Dependencies: [32, 19, 17, 4911, 21, 5005, 587, 558, 576, 1631, 7204, 17078, 504, 1125, 6960, 13064, 5271, 7293, 6968, 7308, 7210, 5302, 2]

// Module 19869 (SelectEmojiRolesActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4911 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectEmojiRolesActionSheet(guildId) {
  let closure_3;
  let closure_5;
  let emoji;
  let first1;
  let tmp10;
  let tmp15;
  let tmp16;
  const tmp = guildId;
  let obj = guildId(emoji[8]);
  const cResult = obj.c(47);
  guildId = guildId.guildId;
  const onSave = guildId.onSave;
  emoji = guildId.emoji;
  const onCancel = guildId.onCancel;
  const tmp4 = closure_9();
  _slicedToArray = tmp4;
  const tmp5 = onSave;
  const bottom = onSave(emoji[9])().bottom;
  const tmp6 = onSave(emoji[10])();
  const tmp7 = null == emoji;
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
    const fn = function b() {
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
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  [first1, closure_5] = first1.useState(tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeSoftDeleted: true, sortDeletedListingsLast: true };
    cResult[2] = obj2;
    tmp15 = obj2;
  } else {
    tmp15 = cResult[2];
  }
  const tmpResult = tmp(emoji[11]);
  const subscriptionListingsForGuild = tmpResult.useSubscriptionListingsForGuild(guildId, tmp15);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [subscriptionListingsForGuild];
    cResult[3] = items;
    tmp16 = items;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === guildId) {
    let tmp18;
    let tmp19;
    let tmp21;
    if (cResult[5] === subscriptionListingsForGuild) {
      tmp18 = cResult[6];
      tmp19 = cResult[7];
    }
    const tmpResult2 = tmp(emoji[12]);
    const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp16, tmp18, tmp19);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      function toggleRole(arg0) {
        let closure_0 = arg0;
        return closure_5((has) => {
          set = new Set(has);
          if (has.has(closure_0)) {
            set.delete(closure_0);
          } else {
            set.add(closure_0);
          }
          return set;
        });
      }
      cResult[8] = toggleRole;
      tmp21 = toggleRole;
    } else {
      tmp21 = cResult[8];
    }
    let closure_8 = tmp21;
    if (cResult[9] === onSave) {
      let tmp22;
      if (cResult[10] === first1) {
        tmp22 = cResult[11];
      }
      if (cResult[12] === stateFromStoresArray) {
        if (cResult[13] === first1) {
          if (cResult[14] === tmp4.label) {
            if (cResult[15] === tmp4.roleName) {
              if (cResult[16] === tmp4.row) {
                let tmp23;
                let tmp25;
                let tmp27;
                let tmp29;
                if (cResult[17] === subscriptionListingsForGuild) {
                  tmp23 = cResult[18];
                }
                if (cResult[19] !== first1.size <= 0) {
                  let obj3 = { disabled: first1.size <= 0 };
                  cResult[19] = first1.size <= 0;
                  cResult[20] = obj3;
                  tmp25 = obj3;
                } else {
                  tmp25 = cResult[20];
                }
                let saveButtonDisabled;
                if (first1.size <= 0) {
                  saveButtonDisabled = tmp4.saveButtonDisabled;
                }
                if (cResult[21] !== tmp7) {
                  let stringResult;
                  let intl = tmp(tmp2[13]).intl;
                  const string = intl.string;
                  const t = tmp(tmp2[13]).t;
                  if (tmp7) {
                    stringResult = string(t["3UB9ad"]);
                  } else {
                    stringResult = string(t["R3BPH+"]);
                  }
                  cResult[21] = tmp7;
                  cResult[22] = stringResult;
                  tmp27 = stringResult;
                } else {
                  tmp27 = cResult[22];
                }
                if (cResult[23] !== tmp27) {
                  let obj4 = { variant: "text-md/semibold", color: "text-brand", children: tmp27 };
                  const tmp31 = stateFromStoresArray(tmp(emoji[16]).Text, obj4);
                  cResult[23] = tmp27;
                  cResult[24] = tmp31;
                  tmp29 = tmp31;
                } else {
                  tmp29 = cResult[24];
                }
                if (cResult[25] === tmp22) {
                  if (cResult[26] === tmp25) {
                    if (cResult[27] === saveButtonDisabled) {
                      if (cResult[28] === tmp29) {
                        let tmp32;
                        let tmp36;
                        let tmp35;
                        let tmp39;
                        let tmp42;
                        if (cResult[29] === first1.size <= 0) {
                          tmp32 = cResult[30];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(tmp2[13]).intl;
                          const stringResult1 = intl2.string(tmp(emoji[13]).t.JPU0EF);
                          const intl3 = tmp(tmp2[13]).intl;
                          const stringResult2 = intl3.string(tmp(emoji[13]).t.MZusPv);
                          cResult[31] = stringResult1;
                          cResult[32] = stringResult2;
                          tmp36 = stringResult2;
                          tmp35 = stringResult1;
                        } else {
                          tmp35 = cResult[31];
                          tmp36 = cResult[32];
                        }
                        if (cResult[33] !== tmp32) {
                          let obj5 = { title: tmp35, subtitle: tmp36, trailing: tmp32 };
                          const tmp41 = stateFromStoresArray(tmp(emoji[19]).BottomSheetTitleHeader, obj5);
                          cResult[33] = tmp32;
                          cResult[34] = tmp41;
                          tmp39 = tmp41;
                        } else {
                          tmp39 = cResult[34];
                        }
                        if (cResult[35] !== subscriptionListingsForGuild.length) {
                          const items1 = [subscriptionListingsForGuild.length];
                          cResult[35] = subscriptionListingsForGuild.length;
                          cResult[36] = items1;
                          tmp42 = items1;
                        } else {
                          tmp42 = cResult[36];
                        }
                        if (cResult[37] === tmp23) {
                          if (cResult[38] === tmp6) {
                            if (cResult[39] === bottom) {
                              if (cResult[40] === tmp4.list) {
                                let tmp43;
                                if (cResult[41] === tmp42) {
                                  tmp43 = cResult[42];
                                }
                                if (cResult[43] === tmp39) {
                                  if (cResult[44] === onCancel) {
                                    let tmp46;
                                    if (cResult[45] === tmp43) {
                                      tmp46 = cResult[46];
                                    }
                                    return tmp46;
                                  }
                                }
                                let obj6 = { scrollable: true, header: tmp39, startExpanded: true, onDismiss: onCancel, children: tmp43 };
                                const tmp48 = stateFromStoresArray(tmp(emoji[21]).BottomSheet, obj6);
                                cResult[43] = tmp39;
                                cResult[44] = onCancel;
                                cResult[45] = tmp43;
                                cResult[46] = tmp48;
                                tmp46 = tmp48;
                              }
                            }
                          }
                        }
                        let obj7 = { inActionSheet: true, style: tmp4.list, estimatedListSize: "windowSize", itemSize: tmp6, insetEnd: bottom, sections: tmp42, renderItem: tmp23 };
                        const tmp45 = stateFromStoresArray(tmp5(emoji[20]), obj7);
                        cResult[37] = tmp23;
                        cResult[38] = tmp6;
                        cResult[39] = bottom;
                        cResult[40] = tmp4.list;
                        cResult[41] = tmp42;
                        cResult[42] = tmp45;
                        tmp43 = tmp45;
                      }
                    }
                  }
                }
                let obj8 = { onPress: tmp22, disabled: first1.size <= 0, accessibilityRole: "button", accessibilityState: tmp25, style: saveButtonDisabled, children: tmp29 };
                const tmp34 = stateFromStoresArray(tmp(emoji[18]).PressableOpacity, obj8);
                cResult[25] = tmp22;
                cResult[26] = tmp25;
                cResult[27] = saveButtonDisabled;
                cResult[28] = tmp29;
                cResult[29] = first1.size <= 0;
                cResult[30] = tmp34;
                tmp32 = tmp34;
              }
            }
          }
        }
      }
      function renderRow(arg0, arg1) {
        let TableCheckboxRow;
        let items;
        let obj2;
        let obj3;
        let obj5;
        let obj8;
        let tmp10;
        let tmp13;
        let tmp7Result;
        const role_id = tmp;
        const diff = subscriptionListingsForGuild.length - 1;
        const intl = guildId(emoji[13]).intl;
        const stringResult = intl.string(guildId(emoji[13]).t.HRtfn9);
        const obj = { style: closure_3.row, children: stateFromStoresArray(TableCheckboxRow, obj2) };
        obj2 = {
          start: 0 === arg1,
          end: arg1 === diff,
          label: tmp10(closure_5, obj3),
          accessibilityHint: tmp13,
          checked: first1.has(subscriptionListingsForGuild[arg1].role_id),
          onPress() {
            return closure_8(role_id.role_id);
          }
        };
        obj3 = { style: closure_3.label, children: items };
        TableCheckboxRow = guildId(emoji[14]).TableCheckboxRow;
        tmp10 = closure_8;
        if (null != stateFromStoresArray[arg1]) {
          const obj4 = { style: closure_3.roleName, children: stateFromStoresArray(onSave(emoji[15]), obj5) };
          obj5 = { role: stateFromStoresArray[arg1], children: subscriptionListingsForGuild[arg1].name };
          tmp7Result = tmp7(tmp8, obj4);
        } else {
          const obj6 = { style: closure_3.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: subscriptionListingsForGuild[arg1].name };
          tmp7Result = tmp7(tmp4(tmp5[16]).Text, obj6);
        }
        items = [tmp7Result, ];
        let archived = tmp.archived;
        if (archived) {
          const obj7 = { type: obj8, variant: "critical" };
          obj8 = { text: stringResult };
          archived = tmp7(tmp4(tmp5[17]).Badge, obj7);
        }
        items[1] = archived;
        tmp13 = undefined;
        if (subscriptionListingsForGuild[arg1].archived) {
          tmp13 = stringResult;
        }
        return stateFromStoresArray(closure_5, obj);
      }
      cResult[12] = stateFromStoresArray;
      cResult[13] = first1;
      cResult[14] = tmp4.label;
      cResult[15] = tmp4.roleName;
      cResult[16] = tmp4.row;
      cResult[17] = subscriptionListingsForGuild;
      cResult[18] = renderRow;
      tmp23 = renderRow;
    }
    function handleSave() {
      onSave(Array.from(first1));
    }
    cResult[9] = onSave;
    cResult[10] = first1;
    cResult[11] = handleSave;
    tmp22 = handleSave;
  }
  class H {
    constructor() {
      return subscriptionListingsForGuild.map((role_id) => subscriptionListingsForGuild.getRole(guildId, role_id.role_id));
    }
  }
  const items2 = [guildId, subscriptionListingsForGuild];
  cResult[4] = guildId;
  cResult[5] = subscriptionListingsForGuild;
  cResult[6] = H;
  cResult[7] = items2;
  tmp19 = items2;
  tmp18 = H;
}) : (function SelectEmojiRolesActionSheet(guildId) {
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
  let obj = guildId(emoji[11]);
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId, { includeSoftDeleted: true, sortDeletedListingsLast: true });
  let obj2 = guildId(emoji[12]);
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
  const PressableOpacity = guildId(emoji[18]).PressableOpacity;
  const tmp2 = importDefault;
  if (!tmp7) {
    saveButtonDisabled = tmp.saveButtonDisabled;
  }
  Text = tmp8(tmp3[16]).Text;
  if (null == emoji) {
    const intl2 = tmp8(tmp3[13]).intl;
    stringResult = intl2.string(tmp8(tmp3[13]).t["3UB9ad"]);
  } else {
    let intl = tmp8(tmp3[13]).intl;
    stringResult = intl.string(tmp8(tmp3[13]).t["R3BPH+"]);
  }
  let obj4 = { title: intl3.string(tmp8(emoji[13]).t.JPU0EF), subtitle: intl4.string(tmp8(emoji[13]).t.MZusPv), trailing: tmp9Result };
  tmp9Result = closure_7(PressableOpacity, obj3);
  const BottomSheetTitleHeader = tmp8(tmp3[19]).BottomSheetTitleHeader;
  intl3 = tmp8(tmp3[13]).intl;
  intl4 = tmp8(tmp3[13]).intl;
  let obj5 = { scrollable: true, header: tmp9(BottomSheetTitleHeader, obj4), startExpanded: true, onDismiss: onCancel, children: tmp9(tmp2(emoji[20]), obj6) };
  closure_7(BottomSheetTitleHeader, obj4);
  BottomSheet = tmp8(tmp3[21]).BottomSheet;
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
      TableCheckboxRow = guildId(emoji[14]).TableCheckboxRow;
      tmp10 = closure_1_8;
      if (null != closure_7[arg1]) {
        const obj4 = { style: closure_3.roleName, children: closure_7(require("RoleName"), obj5) };
        obj5 = { role: closure_7[arg1], children: subscriptionListingsForGuild[arg1].name };
        tmp7Result = tmp7(tmp8, obj4);
      } else {
        const obj6 = { style: closure_3.roleName, lineClamp: 1, variant: "text-md/medium", color: "interactive-text-active", children: subscriptionListingsForGuild[arg1].name };
        tmp7Result = tmp7(tmp4(tmp5[16]).Text, obj6);
      }
      items = [tmp7Result, ];
      let archived = tmp.archived;
      if (archived) {
        const obj7 = { type: obj8, variant: "critical" };
        obj8 = { text: stringResult };
        archived = tmp7(tmp4(tmp5[17]).Badge, obj7);
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
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx");

export default tmp4;
