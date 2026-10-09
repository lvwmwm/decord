// Module ID: 11841
// Function ID: 11842
// Name: AppLauncherRoleListActionSheet
// Dependencies: [32, 109, 19, 6814, 2119, 2118, 1085, 21, 558, 576, 8605, 11842, 504, 6815, 5087, 8200, 6186, 6101, 5055, 11807, 11809, 2]

// Module 11841 (AppLauncherRoleListActionSheet)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import fuzzysearchDefault from "fuzzysearch" /* 6101 */;
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 6815 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11842 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6814 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_12;
let map1;
let tmp;
const ShieldUserIcon2 = tmp(8605);
let closure_4 = ["guildRole", "guildId"];
let react = react_mod;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const AppLauncherRoleListActionSheet_str = "AppLauncherRoleListActionSheet";
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleIcon(role) {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(10);
  role = role.role;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (null != role) {
    let tmp5;
    let tmp7;
    if (cResult[1] !== role) {
      const tmp6 = null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
      cResult[1] = role;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    } else {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp5) {
      const obj3 = { backgroundColor: tmp5 };
      cResult[3] = tmp5;
      cResult[4] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[4];
    }
    first = tmp7;
  }
  let str = "interactive-text-default";
  if (null != role) {
    str = "white";
  }
  if (cResult[5] !== str) {
    const obj4 = { size: "sm", color: str };
    const tmp10 = authStore2(ShieldUserIcon2.ShieldUserIcon, obj4);
    cResult[5] = str;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[6];
  }
  if (cResult[7] === first) {
    let tmp11;
    if (cResult[8] === tmp8) {
      tmp11 = cResult[9];
    }
    return tmp11;
  }
  const tmp12 = authStore2(AppLauncherOptionIconDefault, { icon: tmp8, wrapperStyle: first });
  cResult[7] = first;
  cResult[8] = tmp8;
  cResult[9] = tmp12;
  tmp11 = tmp12;
}) : (function RoleIcon(role) {
  role = role.role;
  let str = "interactive-text-default";
  const tmp3 = AppLauncherOptionIconDefault;
  const ShieldUserIcon = ShieldUserIcon2.ShieldUserIcon;
  if (null != role) {
    str = "white";
  }
  const obj2 = { icon: authStore2(ShieldUserIcon, { size: "sm", color: str }), wrapperStyle: {} };
  return authStore2(tmp3, obj2);
});
let closure_15 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleRow(guildRole) {
  let closure_0;
  let items2;
  let tmp10;
  let tmp6;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] !== guildRole) {
    guildRole = guildRole.guildRole;
    let id = guildRole;
    const guildId = guildRole.guildId;
    _require = guildId;
    const tmp9 = _objectWithoutProperties(guildRole, closure_4);
    cResult[0] = guildRole;
    cResult[1] = guildId;
    cResult[2] = guildRole;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    _require = cResult[1];
    id = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleMemberCountStore];
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    let tmp12;
    let tmp14;
    let tmp18;
    let tmp17;
    if (cResult[6] === tmp5.id) {
      tmp12 = cResult[7];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
    if (cResult[8] !== tmp5) {
      const tmp16 = isEveryoneRole(tmp5);
      cResult[8] = tmp5;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    if (cResult[10] !== tmp4) {
      class C {
        constructor() {
          const obj = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj.fetchMemberCounts(closure_0);
        }
      }
      const items1 = [tmp4];
      cResult[10] = tmp4;
      cResult[11] = C;
      cResult[12] = items1;
      tmp18 = items1;
      tmp17 = C;
    } else {
      class C {
        constructor() {
          const obj = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj.fetchMemberCounts(closure_0);
        }
      }
      tmp18 = cResult[12];
    }
    const effect = react.useEffect(tmp17, tmp18);
    if (cResult[13] !== tmp5.name) {
      class C {
        constructor() {
          const obj = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj.fetchMemberCounts(closure_0);
        }
      }
      const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5.name };
      cResult[13] = tmp5.name;
      cResult[14] = closure_12(require("Text/Text").Text, obj2);
      const tmp22 = closure_12(require("Text/Text").Text, obj2);
    } else {
      class C {
        constructor() {
          const obj = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj.fetchMemberCounts(closure_0);
        }
      }
    }
    if (cResult[15] !== tmp5) {
      class C {
        constructor() {
          const obj = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj.fetchMemberCounts(closure_0);
        }
      }
      const obj3 = { role: tmp5 };
      cResult[15] = tmp5;
      cResult[16] = closure_12(closure_15, obj3);
      const tmp25 = closure_12(closure_15, obj3);
    } else {
      class C {
        constructor() {
          const obj = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj.fetchMemberCounts(closure_0);
        }
      }
    }
    if (cResult[17] === tmp14) {
      class C {
        constructor() {
          const obj = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj.fetchMemberCounts(closure_0);
        }
      }
      if (cResult[20] === tmp5.id) {
        class C {
          constructor() {
            const obj = GuildRoleMemberActionCreatorsAll;
            const memberCounts = obj.fetchMemberCounts(closure_0);
          }
        }
      }
      const obj4 = { label: tmp21, icon: tmp23, trailing: tmp26 };
      const TableRow = tmp(6186).TableRow;
      const merged = Object.assign(tmp6);
      cResult[20] = tmp5.id;
      cResult[21] = tmp6;
      cResult[22] = tmp21;
      cResult[23] = tmp23;
      cResult[24] = tmp26;
      cResult[25] = closure_12(TableRow, obj4, tmp5.id);
      const tmp35 = closure_12(TableRow, obj4, tmp5.id);
    }
    let tmp28 = null;
    if (!tmp14) {
      class C {
        constructor() {
          const obj = GuildRoleMemberActionCreatorsAll;
          const memberCounts = obj.fetchMemberCounts(closure_0);
        }
      }
      if (null != stateFromStores) {
        class C {
          constructor() {
            const obj = GuildRoleMemberActionCreatorsAll;
            const memberCounts = obj.fetchMemberCounts(closure_0);
          }
        }
        const obj5 = { variant: "text-sm/normal", color: "text-muted", children: items2 };
        const Text = tmp(5087).Text;
        items2 = [closure_12(require("GroupIcon").GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
        tmp28 = closure_13(Text, obj5);
      }
    }
    cResult[17] = tmp14;
    cResult[18] = stateFromStores;
    cResult[19] = tmp28;
  }
  const fn = function v() {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(closure_0);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[id.id];
    }
    return tmp2;
  };
  cResult[5] = tmp4;
  cResult[6] = tmp5.id;
  cResult[7] = fn;
  tmp12 = fn;
}) : (function RoleRow(guildRole) {
  let items2;
  let obj3;
  let tmp8;
  guildRole = guildRole.guildRole;
  const guildId = guildRole.guildId;
  const merged = Object.assign(guildRole, Object.assign({ guildRole: 0, guildId: 0 }));
  let tmp2 = guildRole;
  let obj = guildRole(504);
  const items = [GuildRoleMemberCountStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guildId);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[guildRole.id];
    }
    return tmp2;
  });
  const items1 = [guildId];
  const tmp5 = isEveryoneRole(guildRole);
  const effect = react.useEffect(() => {
    const obj = GuildRoleMemberActionCreatorsAll;
    const memberCounts = obj.fetchMemberCounts(guildId);
  }, items1);
  const obj2 = { label: closure_12(guildRole(5087).Text, obj3), icon: closure_12(closure_15, { role: guildRole }), trailing: tmp8 };
  const TableRow = guildRole(6186).TableRow;
  tmp8 = null;
  obj3 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildRole.name };
  if (!tmp5) {
    tmp8 = null;
    if (null != stateFromStores) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: items2 };
      const Text = tmp2(5087).Text;
      items2 = [closure_12(tmp2(8200).GroupIcon, { size: "xxs", color: "text-muted" }), " ", stateFromStores];
      tmp8 = closure_13(Text, obj4);
    }
  }
  const merged1 = Object.assign(merged);
  return closure_12(TableRow, obj2, guildRole.id);
});
let closure_16 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherRoleListActionSheet(onRolePress) {
  let closure_7;
  let first;
  let first1;
  let ref;
  let tmp10;
  let tmp9;
  let tmp = onRolePress;
  let obj = onRolePress(first[9]);
  const cResult = obj.c(27);
  onRolePress = onRolePress.onRolePress;
  const onActionSheetDismiss = onRolePress.onActionSheetDismiss;
  const option = onRolePress.option;
  const guild_id = onRolePress.channel.guild_id;
  let tmp4 = ref(react.useState(""), 2);
  first = tmp4[0];
  closure_4 = tmp4[1];
  ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function c() {
      return GuildRoleStore.getSortedRoles(guild_id);
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(first[12]);
  const stateFromStores = tmpResult.useStateFromStores(first1, tmp9);
  if (cResult[3] === first) {
    let arr3;
    let tmp12;
    if (cResult[4] === stateFromStores) {
      arr3 = cResult[5];
    }
    if (cResult[8] !== onActionSheetDismiss) {
      function hideActionSheet() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(AppLauncherRoleListActionSheet_str);
        onActionSheetDismiss();
      }
      cResult[8] = onActionSheetDismiss;
      cResult[9] = hideActionSheet;
      tmp12 = hideActionSheet;
    } else {
      tmp12 = cResult[9];
    }
    react = tmp12;
    if (cResult[10] === tmp12) {
      let tmp13;
      if (cResult[11] === onRolePress) {
        tmp13 = cResult[12];
      }
      let closure_8 = tmp13;
      if (cResult[13] === guild_id) {
        if (cResult[14] === tmp13) {
          let tmp14;
          let tmp17;
          let tmp22Result;
          if (cResult[15] === arr3.length) {
            tmp14 = cResult[16];
          }
          const _Symbol = Symbol;
          class Item {
            constructor(arg0) {
              item = onRolePress.item;
              index = onRolePress.index;
              obj = {
                guildId: guild_id,
                guildRole: item,
                onPress() {
                              const obj = { role: item };
                              return closure_8(obj);
                            },
                start: 0 === index,
                end: index === closure_6.length - 1
              };
              return closure_1_12(closure_1_16, obj);
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class Item {
              constructor(arg0) {
                item = onRolePress.item;
                index = onRolePress.index;
                obj = {
                  guildId: guild_id,
                  guildRole: item,
                  onPress() {
                                  const obj = { role: item };
                                  return closure_8(obj);
                                },
                  start: 0 === index,
                  end: index === closure_6.length - 1
                };
                return closure_1_12(closure_1_16, obj);
              }
            }
            cResult[18] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[18];
          }
          if (cResult[19] === tmp14) {
            if (cResult[20] === arr3) {
              let tmp21;
              if (cResult[21] === 0 === arr3.length) {
                tmp21 = cResult[22];
              }
              if (cResult[23] === onActionSheetDismiss) {
                if (cResult[24] === option) {
                  let tmp25;
                  if (cResult[25] === tmp21) {
                    tmp25 = cResult[26];
                  }
                  return tmp25;
                }
              }
              class Item {
                constructor(arg0) {
                  item = onRolePress.item;
                  index = onRolePress.index;
                  obj = {
                    guildId: guild_id,
                    guildRole: item,
                    onPress() {
                                      const obj = { role: item };
                                      return closure_8(obj);
                                    },
                    start: 0 === index,
                    end: index === closure_6.length - 1
                  };
                  return closure_1_12(closure_1_16, obj);
                }
              }
              tmp27[0] = option;
              tmp27[1] = onActionSheetDismiss;
              const items1 = [tmp17, tmp21];
              tmp27[2] = items1;
              const tmp28 = closure_13(tmp(first[20]).AppLauncherCommandOptionActionSheet, tmp27);
              cResult[23] = onActionSheetDismiss;
              cResult[24] = option;
              cResult[25] = tmp21;
              cResult[26] = tmp28;
              tmp25 = tmp28;
            }
          }
          const tmpResult2 = tmp(first[19]);
          if (0 === arr3.length) {
            tmp22Result = tmp22(tmpResult2.AppLauncherListEmptyState, {});
          } else {
            const obj3 = { ref, data: arr3, renderItem: null };
            class Item {
              constructor(arg0) {
                item = onRolePress.item;
                index = onRolePress.index;
                obj = {
                  guildId: guild_id,
                  guildRole: item,
                  onPress() {
                                  const obj = { role: item };
                                  return closure_8(obj);
                                },
                  start: 0 === index,
                  end: index === closure_6.length - 1
                };
                return closure_1_12(closure_1_16, obj);
              }
            }
            tmp22Result = tmp22(tmpResult2.AppLauncherList, obj3);
          }
          cResult[19] = tmp14;
          cResult[20] = arr3;
          cResult[21] = 0 === arr3.length;
          cResult[22] = tmp22Result;
          tmp21 = tmp22Result;
        }
      }
      class Item {
        constructor(arg0) {
          item = onRolePress.item;
          index = onRolePress.index;
          obj = {
            guildId: guild_id,
            guildRole: item,
            onPress() {
                      const obj = { role: item };
                      return closure_8(obj);
                    },
            start: 0 === index,
            end: index === closure_6.length - 1
          };
          return closure_1_12(closure_1_16, obj);
        }
      }
      cResult[13] = guild_id;
      cResult[14] = tmp13;
      cResult[15] = arr3.length;
      cResult[16] = Item;
      tmp14 = Item;
    }
    function handleRolePress(role) {
      const obj = { role: role.role };
      onRolePress(obj);
      closure_7();
    }
    cResult[10] = tmp12;
    cResult[11] = onRolePress;
    cResult[12] = handleRolePress;
    tmp13 = handleRolePress;
  }
  if (cResult[6] !== first) {
    const fn2 = function y(id) {
      let tmp = first === id.id;
      const str = first;
      if (!tmp) {
        const str2 = id.name;
        const tmp4 = fuzzysearchDefault;
        const trimmed = str.trim();
        tmp = tmp4(trimmed, str2.toLowerCase());
      }
      return tmp;
    };
    cResult[6] = first;
    class Item {
      constructor(arg0) {
        item = onRolePress.item;
        index = onRolePress.index;
        obj = {
          guildId: guild_id,
          guildRole: item,
          onPress() {
                  const obj = { role: item };
                  return closure_8(obj);
                },
          start: 0 === index,
          end: index === closure_6.length - 1
        };
        return closure_1_12(closure_1_16, obj);
      }
    }
    cResult[7] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[7];
  }
  const found = stateFromStores.filter(tmp10);
  cResult[3] = first;
  cResult[4] = stateFromStores;
  cResult[5] = found;
  arr3 = found;
}) : (function AppLauncherRoleListActionSheet(channel) {
  let items2;
  let onActionSheetDismiss;
  let require;
  let tmp8Result;
  ({ onRolePress: require, onActionSheetDismiss } = channel);
  let ref;
  let memo;
  const guild_id = channel.channel.guild_id;
  const option = channel.option;
  let tmp = ref(memo.useState(""), 2);
  const first = tmp[0];
  closure_4 = tmp[1];
  ref = memo.useRef(null);
  let tmp4 = require;
  let obj = require("get initialized");
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild_id));
  const items1 = [stateFromStores, first];
  memo = memo.useMemo(() => stateFromStores.filter((id) => {
    let tmp = closure_1_3 === id.id;
    const str = closure_1_3;
    if (!tmp) {
      const str2 = id.name;
      const tmp4 = onActionSheetDismiss(first[17]);
      const trimmed = str.trim();
      tmp = tmp4(trimmed, str2.toLowerCase());
    }
    return tmp;
  }), items1);
  let obj2 = { option, onDismiss: onActionSheetDismiss, children: items2 };
  const length = memo.length;
  const AppLauncherCommandOptionActionSheet = require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet;
  items2 = [, ];
  const obj3 = {
    onChange: function handleQueryUpdate(str) {
      closure_4(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  items2[0] = closure_12(require("AppLauncherList").AppLauncherListSearchBar, obj3);
  const tmp7 = closure_13;
  if (0 === length) {
    tmp8Result = tmp8(tmp4(tmp5[19]).AppLauncherListEmptyState, {});
  } else {
    const obj4 = {
      ref,
      data: memo,
      renderItem: function Item(item) {
          item = item.item;
          const index = item.index;
          let obj = {
            guildId: guild_id,
            guildRole: item,
            onPress() {
              const obj = { role: item };
              _require(obj);
              const obj2 = closure_1_1(first[18]);
              obj2.hideActionSheet(closure_1_14);
              onActionSheetDismiss();
            },
            start: 0 === index,
            end: index === memo.length - 1
          };
          return closure_1_12(closure_1_16, obj);
        }
    };
    tmp8Result = tmp8(tmp4(tmp5[19]).AppLauncherList, obj4);
  }
  items2[1] = tmp8Result;
  return tmp7(AppLauncherCommandOptionActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx");

export default tmp5;
export const APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = "AppLauncherRoleListActionSheet";
export const RoleIcon = tmp3;
export const RoleRow = tmp4;
