// Module ID: 16224
// Function ID: 16225
// Name: GuildSettingsModalMembers
// Dependencies: [109, 32, 19, 17, 502, 4756, 2111, 2105, 2073, 4472, 1378, 9026, 1086, 21, 9268, 4837, 588, 558, 576, 1491, 10451, 4989, 4680, 1127, 10446, 1619, 504, 6684, 8993, 7366, 16225, 6796, 9068, 5833, 9025, 11, 4545, 6472, 8176, 1189, 7682, 6461, 2]

// Module 16224 (GuildSettingsModalMembers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import intl4 from "intl" /* 1127 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4545 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5833 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6684 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 8993 */;
import _mod9268 from "module_9268" /* 9268 */;
import RolePillDefault from "RolePill" /* 10451 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4756 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 2111 */;
import GuildRoleStore from "GuildRoleStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2073 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import UserStore from "UserStore" /* 1378 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9026 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const _modDef9268 = _mod9268;
let closure_11, closure_12, dependencyMap, guildId, navigation;

let closure_17;
let closure_18;
let closure_19;
let obj2;
let obj3;
let closure_3 = ["ref"];
const View = react_native.View;
let GuildMemberStore = GuildMemberStore_mod;
const GuildSettingsSections = Constants.GuildSettingsSections;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
let items = [_mod9268.AutocompleterResultTypes.USER];
let createStyles = createStyles_mod;
let obj = { containerInner: obj2, searchFieldContainer: obj3, roleList: { flexDirection: "row", flexWrap: "wrap", overflow: "hidden", paddingTop: 4 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_12 };
let closure_21 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let end;
  let sortedGuildRoles;
  let start;
  let obj = guild(navigation[18]);
  const cResult = obj.c(29);
  guild = guild.guild;
  const guildMember = guild.guildMember;
  ({ sortedGuildRoles, start, end } = guild);
  const tmp4 = closure_21();
  const obj2 = guild(navigation[19]);
  navigation = obj2.useNavigation();
  if (null == guild) {
    return null;
  } else {
    if (cResult[0] === guild.ownerId) {
      let tmp6;
      let tmp10;
      if (cResult[1] === guildMember.userId) {
        tmp6 = cResult[2];
      }
      if (cResult[3] === guild.id) {
        if (cResult[4] === guildMember.roles) {
          if (cResult[5] === guildMember.userId) {
            let tmp8;
            let arr;
            if (cResult[6] === sortedGuildRoles) {
              tmp8 = cResult[7];
              arr = cResult[8];
            }
            if (cResult[14] === arr) {
              let tmp19;
              if (cResult[15] === tmp4) {
                tmp19 = cResult[16];
              }
              if (cResult[17] === guildMember.userId) {
                let tmp24;
                if (cResult[18] === navigation) {
                  tmp24 = cResult[19];
                }
                if (cResult[20] === end) {
                  if (cResult[21] === guild.id) {
                    if (cResult[22] === guildMember.userId) {
                      if (cResult[23] === tmp6) {
                        if (cResult[24] === tmp8) {
                          if (cResult[25] === start) {
                            if (cResult[26] === tmp19) {
                              let tmp25;
                              if (cResult[27] === tmp24) {
                                tmp25 = cResult[28];
                              }
                              return tmp25;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                class E {
                  constructor() {
                    const obj = { userId: guildMember.userId };
                    navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
                  }
                }
                const obj4 = { userId: guildMember.userId, guildId: guild.id, accessibilityLabel: tmp8, subLabel: tmp19, disabled: tmp6, onPress: tmp24, arrow: true, start, end };
                const tmp27 = closure_17(guildMember(navigation[24]), obj4);
                cResult[20] = end;
                cResult[21] = guild.id;
                cResult[22] = guildMember.userId;
                cResult[23] = tmp6;
                cResult[24] = tmp8;
                cResult[25] = start;
                cResult[26] = tmp19;
                cResult[27] = tmp24;
                cResult[28] = tmp27;
                tmp25 = tmp27;
              }
              class E {
                constructor() {
                  const obj = { userId: guildMember.userId };
                  navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
                }
              }
              cResult[17] = guildMember.userId;
              cResult[18] = navigation;
              cResult[19] = E;
              tmp24 = E;
            }
            let tmp20 = null;
            if (arr.length > 0) {
              class E {
                constructor() {
                  const obj = { userId: guildMember.userId };
                  navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
                }
              }
              tmp23[0] = tmp4.roleList;
              tmp23[2] = arr;
              tmp20 = closure_17(View, tmp23);
            }
            cResult[14] = arr;
            cResult[15] = tmp4;
            cResult[16] = tmp20;
            tmp19 = tmp20;
          }
        }
      }
      const found = sortedGuildRoles.filter(tmp9);
      if (cResult[11] !== guild.id) {
        const fn = function x(role) {
          const obj = { role, guildId: guild.id };
          return closure_17(RolePillDefault, obj, role.id);
        };
        class E {
          constructor() {
            const obj = { userId: guildMember.userId };
            navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
          }
        }
        cResult[12] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[12];
      }
      const mapped = found.map(tmp10);
      let formatToPlainStringResult;
      if (found.length > 0) {
        let tmp17;
        const user = UserStore.getUser(guildMember.userId);
        class E {
          constructor() {
            const obj = { userId: guildMember.userId };
            navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
          }
        }
        const obj3 = guildMember(navigation[21]);
        let str = obj3.getNickname(guild.id, undefined, user);
        if (str == null) {
          const tmp15Result = tmp15(navigation[22]);
          str = tmp15Result.getGlobalName(user);
        }
        if (str == null) {
          if (user != null) {
            const username = user.username;
          }
          class E {
            constructor() {
              const obj = { userId: guildMember.userId };
              navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
            }
          }
        }
        if (str == null) {
          str = "";
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(name) {
              return name.name;
            }
          }
          class E {
            constructor() {
              const obj = { userId: guildMember.userId };
              navigation.push(GuildSettingsSections.MEMBER_EDIT, obj);
            }
          }
          tmp17 = P;
        } else {
          class P {
            constructor(name) {
              return name.name;
            }
          }
        }
        const mapped1 = found.map(tmp17);
        const joined = mapped1.join(", ");
        const intl = tmp(tmp2[23]).intl;
        const obj5 = { memberName: str, roleNames: joined };
        formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[23]).t["6eGpWx"], obj5);
      }
      cResult[3] = guild.id;
      cResult[4] = guildMember.roles;
      cResult[5] = guildMember.userId;
      cResult[6] = sortedGuildRoles;
      cResult[7] = formatToPlainStringResult;
      cResult[8] = mapped;
      tmp8 = formatToPlainStringResult;
      arr = mapped;
    }
    cResult[0] = guild.ownerId;
    cResult[1] = guildMember.userId;
    cResult[2] = guildMember.userId === guild.ownerId;
    tmp6 = tmp7;
  }
}) : ((guild) => {
  let closure_2;
  let end;
  let start;
  let tmp12Result;
  guild = guild.guild;
  const guildMember = guild.guildMember;
  const sortedGuildRoles = guild.sortedGuildRoles;
  ({ start, end } = guild);
  const tmp = closure_21();
  let obj = guild(1491);
  dependencyMap = obj.useNavigation();
  if (null == guild) {
    return null;
  } else {
    const tmp5 = guildMember.userId === guild.ownerId && AuthenticationStore.getId() === guild.ownerId;
    const found = sortedGuildRoles.filter((id) => {
      const roles = guildMember.roles;
      return roles.includes(id.id);
    });
    const mapped = found.map((role) => {
      const obj = { role, guildId: guild.id };
      return closure_17(RolePillDefault, obj, role.id);
    });
    let formatToPlainStringResult;
    if (found.length > 0) {
      const user = UserStore.getUser(guildMember.userId);
      const obj2 = guildMember(4989);
      let str = obj2.getNickname(guild.id, undefined, user);
      const tmp9 = guildMember;
      if (str == null) {
        const tmp9Result = tmp9(4680);
        str = tmp9Result.getGlobalName(user);
      }
      if (str == null) {
        let username;
        if (user != null) {
          username = user.username;
        }
        str = username;
      }
      if (str == null) {
        str = "";
      }
      const mapped1 = found.map((name) => name.name);
      const joined = mapped1.join(", ");
      const intl = tmp2(1127).intl;
      const obj3 = { memberName: str, roleNames: joined };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1127).t["6eGpWx"], obj3);
    }
    const obj4 = {
      userId: guildMember.userId,
      guildId: guild.id,
      accessibilityLabel: formatToPlainStringResult,
      subLabel: tmp12Result,
      disabled: tmp5,
      onPress() {
          const obj = { userId: guildMember.userId };
          closure_2.push(GuildSettingsSections.MEMBER_EDIT, obj);
        },
      arrow: true,
      start,
      end
    };
    tmp12Result = null;
    const tmp14 = guildMember(10446);
    if (mapped.length > 0) {
      const obj5 = { style: tmp.roleList, pointerEvents: "none", children: mapped };
      tmp12Result = tmp12(View, obj5);
    }
    return closure_17(tmp14, obj4);
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_10;
  let first;
  let guild;
  let items8;
  let length;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp36;
  let tmp38;
  let tmp = guildId;
  let tmp2 = guildId;
  let tmp3 = guild;
  const tmp4 = guild;
  let obj = guildId(guild[18]);
  const cResult = obj.c(78);
  guildId = guildId.guildId;
  let obj2 = guildId(guild[19]);
  navigation = obj2.useNavigation();
  closure_21();
  const bottom = navigation(guild[25])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [closure_12, ];
    items[1] = closure_11;
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function p() {
      const obj = { guild: GuildStore.getGuild(guildId), guildLoaded: null != GuildStore.getGuild(guildId), sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId) };
      return obj;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  let tmp2Result = tmp2(tmp4[26]);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(first, tmp11);
  guild = stateFromStoresObject.guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp14 = PermissionStore;
    const items1 = [PermissionStore, UserStore];
    cResult[3] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== guild) {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const items2 = [guild];
    cResult[4] = guild;
    cResult[5] = A;
    cResult[6] = items2;
    tmp17 = items2;
    tmp16 = A;
  } else {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    tmp17 = cResult[6];
  }
  const tmp2Result5 = tmp2(tmp4[26]);
  const stateFromStores = tmp2Result5.useStateFromStores(tmp13, tmp16, tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const items3 = [GuildSettingsStore];
    const fn2 = function j() {
      return GuildSettingsStore.getProps().selectedRoleId;
    };
    cResult[7] = items3;
    cResult[8] = fn2;
    tmp20 = fn2;
    tmp19 = items3;
  } else {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    tmp20 = cResult[8];
  }
  const tmp2Result6 = tmp2(tmp4[26]);
  const stateFromStores1 = tmp2Result6.useStateFromStores(tmp19, tmp20);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const items4 = [GuildMemberCountStore];
    cResult[9] = items4;
    tmp22 = items4;
  } else {
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
  }
  if (cResult[10] === guildId) {
    let tmp26;
    let tmp28;
    let tmp27;
    let tmp40;
    class A {
      constructor() {
        let canPruneGuildMembersResult = null != guild;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const tmp2Result7 = tmp2(tmp4[26]);
    const stateFromStores2 = tmp2Result7.useStateFromStores(tmp22, X, items8);
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          let canPruneGuildMembersResult = null != guild;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
      const items5 = [GuildMemberStore];
      cResult[14] = items5;
      tmp26 = items5;
    } else {
      class A {
        constructor() {
          let canPruneGuildMembersResult = null != guild;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
    }
    if (cResult[15] !== guildId) {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
      const items6 = [guildId];
      cResult[15] = guildId;
      cResult[16] = D;
      cResult[17] = items6;
      tmp28 = items6;
      tmp27 = D;
    } else {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
      tmp28 = cResult[17];
    }
    const tmp2Result8 = tmp2(tmp4[26]);
    const stateFromStoresArray = tmp2Result8.useStateFromStoresArray(tmp26, tmp27, tmp28);
    const _Symbol2 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
      cResult[18] = tmp33;
    } else {
      class D {
        constructor() {
          return GuildMemberStore.getMembers(guildId);
        }
      }
    }
    [tmp36, AuthenticationStore] = stateFromStores(stateFromStores1.useState(tmp32), 2);
    stateFromStores(stateFromStores1.useState(tmp32), 2);
    [tmp38, GuildMemberCountStore] = stateFromStores(stateFromStores1.useState(false), 2);
    stateFromStores(stateFromStores1.useState(false), 2);
    const tmp39 = stateFromStores(stateFromStores1.useState(false), 2);
    GuildMemberStore = tmp39[0];
    closure_11 = tmp39[1];
    const _Symbol3 = Symbol;
    const obj8 = stateFromStores1;
    const tmp34 = stateFromStores;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor() {
          tmp = new closure_1(closure_2[14])((arg0) => {
            closure_1_8(arg0);
            closure_1_11(false);
          }, closure_20, 100);
          return tmp;
        }
      }
      cResult[19] = J;
      tmp40 = J;
    } else {
      class J {
        constructor() {
          tmp = new closure_1(closure_2[14])((arg0) => {
            closure_1_8(arg0);
            closure_1_11(false);
          }, closure_20, 100);
          return tmp;
        }
      }
    }
    closure_12 = tmp34(obj8.useState(tmp40), 1)[0];
    if (cResult[20] === tmp38) {
      class J {
        constructor() {
          tmp = new closure_1(closure_2[14])((arg0) => {
            closure_1_8(arg0);
            closure_1_11(false);
          }, closure_20, 100);
          return tmp;
        }
      }
    }
    if (cResult[26] === guildId) {
      class J {
        constructor() {
          tmp = new closure_1(closure_2[14])((arg0) => {
            closure_1_8(arg0);
            closure_1_11(false);
          }, closure_20, 100);
          return tmp;
        }
      }
      const items7 = [];
      if (tmp38) {
        class J {
          constructor() {
            tmp = new closure_1(closure_2[14])((arg0) => {
              closure_1_8(arg0);
              closure_1_11(false);
            }, closure_20, 100);
            return tmp;
          }
        }
        const iter2 = tmp36[Symbol.iterator]();
        const nextResult = iter2.next();
        while (iter2 !== undefined) {
          class J {
            constructor() {
              tmp = new closure_1(closure_2[14])((arg0) => {
                closure_1_8(arg0);
                closure_1_11(false);
              }, closure_20, 100);
              return tmp;
            }
          }
          let tmp58 = nextResult;
          if (nextResult.type === guildId(guild[14]).AutocompleterResultTypes.USER) {
            class J {
              constructor() {
                tmp = new closure_1(closure_2[14])((arg0) => {
                  closure_1_8(arg0);
                  closure_1_11(false);
                }, closure_20, 100);
                return tmp;
              }
            }
            let member = GuildMemberStore.getMember(guildId, tmp58.record.id);
            let tmp64 = member;
            let tmp42Result = null == member;
            if (!tmp42Result) {
              class J {
                constructor() {
                  tmp = new closure_1(closure_2[14])((arg0) => {
                    closure_1_8(arg0);
                    closure_1_11(false);
                  }, closure_20, 100);
                  return tmp;
                }
              }
              tmp42Result = tmp42(tmp64);
            }
            if (!tmp42Result) {
              class J {
                constructor() {
                  tmp = new closure_1(closure_2[14])((arg0) => {
                    closure_1_8(arg0);
                    closure_1_11(false);
                  }, closure_20, 100);
                  return tmp;
                }
              }
              let arr = items7.push(tmp64);
            }
          }
          continue;
        }
      } else {
        let tmp51;
        class J {
          constructor() {
            tmp = new closure_1(closure_2[14])((arg0) => {
              closure_1_8(arg0);
              closure_1_11(false);
            }, closure_20, 100);
            return tmp;
          }
        }
        const iter = stateFromStoresArray[Symbol.iterator]();
        const nextResult1 = iter.next();
        while (iter !== undefined) {
          class J {
            constructor() {
              tmp = new closure_1(closure_2[14])((arg0) => {
                closure_1_8(arg0);
                closure_1_11(false);
              }, closure_20, 100);
              return tmp;
            }
          }
          let tmp42Result2 = null == UserStore.getUser(nextResult1.userId);
          if (!tmp42Result2) {
            class J {
              constructor() {
                tmp = new closure_1(closure_2[14])((arg0) => {
                  closure_1_8(arg0);
                  closure_1_11(false);
                }, closure_20, 100);
                return tmp;
              }
            }
            tmp42Result2 = tmp42(tmp47);
          }
          if (!tmp42Result2) {
            class J {
              constructor() {
                tmp = new closure_1(closure_2[14])((arg0) => {
                  closure_1_8(arg0);
                  closure_1_11(false);
                }, closure_20, 100);
                return tmp;
              }
            }
            let arr2 = items7.push(tmp47);
          }
          continue;
        }
        const _Symbol4 = Symbol;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor() {
              tmp = new closure_1(closure_2[14])((arg0) => {
                closure_1_8(arg0);
                closure_1_11(false);
              }, closure_20, 100);
              return tmp;
            }
          }
          cResult[29] = tmp52;
          tmp51 = tmp52;
        } else {
          class J {
            constructor() {
              tmp = new closure_1(closure_2[14])((arg0) => {
                closure_1_8(arg0);
                closure_1_11(false);
              }, closure_20, 100);
              return tmp;
            }
          }
        }
        const sorted = items7.sort(tmp51);
      }
      cResult[20] = tmp38;
      cResult[21] = guildId;
      cResult[22] = stateFromStoresArray;
      cResult[23] = tmp36;
      cResult[24] = stateFromStores1;
      cResult[25] = items7;
    }
    function fe(roles) {
      let tmp2 = null != stateFromStores1;
      if (tmp2) {
        const obj = ChannelPermissionsUtils;
        tmp2 = !obj.isEveryoneRoleId(guildId, tmp);
      }
      if (tmp2) {
        roles = roles.roles;
        tmp2 = -1 === roles.indexOf(tmp);
      }
      return tmp2;
    }
    cResult[26] = guildId;
    cResult[27] = stateFromStores1;
    cResult[28] = fe;
  }
  class X {
    constructor() {
      let num = GuildMemberCountStore.getMemberCount(guildId);
      if (num == null) {
        num = 0;
      }
      return num > 0 && num <= 10000 && guildLoaded;
    }
  }
  items8 = [guildId, guildLoaded];
  cResult[10] = guildId;
  cResult[11] = guildLoaded;
  cResult[12] = items8;
  cResult[13] = X;
}) : ((guildId) => {
  let SearchField;
  let _undefined;
  let intl;
  let intl2;
  let intl3;
  let items15;
  let items16;
  let obj11;
  let obj9;
  let tmp32Result;
  const f123825 = () => {
    const tmp = new _modDef9268((arg0) => {
      closure_1_10(arg0);
      closure_1_14(false);
    }, items, 100);
    return tmp;
  };
  guildId = guildId.guildId;
  let guild;
  let first;
  let closure_10;
  let first1;
  closure_12 = undefined;
  let first2;
  let closure_14;
  let first3;
  let tmp = guildId;
  let tmp2 = guild;
  let obj = guildId(guild[19]);
  navigation = obj.useNavigation();
  const tmp4 = closure_21();
  const tmp5 = navigation;
  const bottom = navigation(guild[25])().bottom;
  let obj2 = guildId(guild[26]);
  items = [closure_12, first1];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildStore.getGuild(guildId), guildLoaded: null != GuildStore.getGuild(guildId), sortedGuildRoles: GuildRoleStore.getSortedRoles(guildId) };
    return obj;
  });
  guild = stateFromStoresObject.guild;
  const guildLoaded = stateFromStoresObject.guildLoaded;
  const sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  const items1 = [first2, closure_14];
  const items2 = [guild];
  const obj3 = guildId(guild[26]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let canPruneGuildMembersResult = null != guild;
    if (canPruneGuildMembersResult) {
      const obj = MemberSafetyPermissionsUtils;
      canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items2);
  const items3 = [first3];
  const obj4 = guildId(guild[26]);
  const stateFromStores1 = obj4.useStateFromStores(items3, () => first3.getProps().selectedRoleId);
  const items4 = [first];
  const items5 = [guildId, guildLoaded];
  const obj5 = guildId(guild[26]);
  const stateFromStores2 = obj5.useStateFromStores(items4, () => {
    let num = GuildMemberCountStore.getMemberCount(guildId);
    if (num == null) {
      num = 0;
    }
    return num > 0 && num <= 10000 && guildLoaded;
  }, items5);
  const items6 = [closure_10];
  const items7 = [guildId];
  const obj6 = guildId(guild[26]);
  const stateFromStoresArray = obj6.useStateFromStoresArray(items6, () => GuildMemberStore.getMembers(guildId), items7);
  let tmp11 = stateFromStores(stateFromStores1.useState([]), 2);
  first = tmp11[0];
  closure_10 = tmp11[1];
  const tmp13 = stateFromStores(stateFromStores1.useState(false), 2);
  first1 = tmp13[0];
  closure_12 = tmp13[1];
  const tmp15 = stateFromStores(stateFromStores1.useState(false), 2);
  first2 = tmp15[0];
  closure_14 = tmp15[1];
  first3 = stateFromStores(stateFromStores1.useState(f123825), 2)[0];
  const items8 = [guildId, stateFromStoresArray, first, stateFromStores1, first1];
  const tmp17 = stateFromStores(stateFromStores1.useState(f123825), 2);
  const memo = stateFromStores1.useMemo(() => {
    function guildRoleIsFiltered(roles) {
      let tmp2 = null != stateFromStores1;
      if (tmp2) {
        const obj = guildId(guild[28]);
        tmp2 = !obj.isEveryoneRoleId(closure_1_0, tmp);
      }
      if (tmp2) {
        roles = roles.roles;
        tmp2 = -1 === roles.indexOf(tmp);
      }
      return tmp2;
    }
    items = [];
    const tmp = first1;
    if (tmp) {
      const iter2 = first[Symbol.iterator]();
      const nextResult = iter2.next();
      while (iter2 !== undefined) {
        let tmp21 = nextResult;
        if (nextResult.type === _mod9268.AutocompleterResultTypes.USER) {
          let member = GuildMemberStore.getMember(guildId, tmp21.record.id);
          let tmp28 = member;
          let guildRoleIsFilteredResult = null == member;
          if (!guildRoleIsFilteredResult) {
            guildRoleIsFilteredResult = guildRoleIsFiltered(tmp28);
          }
          if (!guildRoleIsFilteredResult) {
            let arr = items.push(tmp28);
          }
        }
        continue;
      }
    } else {
      let tmp2 = stateFromStoresArray;
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult1 = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult1;
        let guildRoleIsFilteredResult1 = null == UserStore.getUser(nextResult1.userId);
        if (!guildRoleIsFilteredResult1) {
          guildRoleIsFilteredResult1 = guildRoleIsFiltered(tmp8);
        }
        if (!guildRoleIsFilteredResult1) {
          let arr3 = items.push(tmp8);
        }
        continue;
      }
      const sorted = items.sort((nick, nick2) => {
        let str = nick.nick;
        if (str == null) {
          const user = authStore.getUser(nick.userId);
          let username;
          if (user != null) {
            username = user.username;
          }
          str = username;
        }
        if (str == null) {
          str = "";
        }
        let str2 = nick2.nick;
        if (str2 == null) {
          const user1 = authStore.getUser(nick2.userId);
          let username1;
          if (user1 != null) {
            username1 = user1.username;
          }
          str2 = username1;
        }
        if (str2 == null) {
          str2 = "";
        }
        return str.localeCompare(str2);
      });
    }
    return items;
  }, items8);
  const diff = memo.length - 1;
  let c17 = diff;
  const items9 = [stateFromStores, guild, navigation];
  const effect = stateFromStores1.useEffect(() => {
    let canPrune;
    let obj = {
      headerRight() {
        let membersManagementActions;
        const ContextMenu = guildId(guild[29]).ContextMenu;
        const tmp = c17;
        const tmp2 = guildId;
        const tmp3 = guild;
        if (null != closure_1_2) {
          let obj = { guild: tmp4, canPrune };
          const tmp2Result = tmp2(tmp3[30]);
          membersManagementActions = tmp2Result.getMembersManagementActions(obj);
        } else {
          membersManagementActions = [];
        }
        const obj2 = {
          items: membersManagementActions,
          children(ref) {
            let intl;
            ref = ref.ref;
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { source: closure_1_1(closure_1_2[32]), accessibilityLabel: intl.string(closure_1_0(closure_1_2[23]).t.ogxXGq), ref };
            const HeaderActionButton = closure_1_0(closure_1_2[31]).HeaderActionButton;
            intl = closure_1_0(closure_1_2[23]).intl;
            const merged1 = Object.assign(merged);
            return closure_1_17(HeaderActionButton, obj);
          }
        };
        return tmp(ContextMenu, obj2);
      }
    };
    navigation.setOptions(obj);
  }, items9);
  const items10 = [stateFromStores2, guildId];
  const effect1 = stateFromStores1.useEffect(() => {
    const tmp = stateFromStores2;
    if (tmp) {
      const obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(guildId, "", 10000, false);
    }
  }, items10);
  const items11 = [guildId, guildLoaded, first3];
  const effect2 = stateFromStores1.useEffect(() => {
    let obj2;
    let tmp = guildLoaded;
    if (tmp) {
      let obj = { userFilters: obj2 };
      obj2 = { guild: guildId, strict: true };
      first3.setOptions(obj);
    }
    return () => {
      const tmp = guildLoaded;
      if (tmp) {
        const selectRole = navigation(guild[34]).selectRole;
        navigation(guild[34]);
        const obj = navigation(guild[35]);
        const role = selectRole(obj.castGuildIdAsEveryoneGuildRoleId(guildId));
      }
      first3.destroy();
    };
  }, items11);
  let tmp23 = stateFromStores(stateFromStores1.useState(""), 2);
  const first4 = tmp23[0];
  let closure_19 = tmp23[1];
  const items12 = [guildLoaded, guildId, first3];
  const items13 = [memo, first4, first2];
  const callback = stateFromStores1.useCallback((str) => {
    closure_19(str);
    const tmp2 = "" !== str.trim();
    closure_12(tmp2);
    if (tmp2) {
      closure_14(true);
      let tmp12;
      const search = first3.search;
      if (guildLoaded) {
        tmp12 = guildId;
      }
      search(str, tmp12);
    } else {
      first3.clear();
      closure_14(false);
    }
  }, items12);
  const effect3 = stateFromStores1.useEffect(() => {
    if ("" !== first4.trim()) {
      const tmp14 = first2;
      if (!tmp14) {
        let formatToPlainStringResult;
        if (memo.length > 0) {
          const intl2 = intl4.intl;
          const obj = { count: memo.length };
          formatToPlainStringResult = intl2.formatToPlainString(intl4.t.ZGVL3g, obj);
        } else {
          const intl = intl4.intl;
          formatToPlainStringResult = intl.string(intl4.t.oB9grQ);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items13);
  const items14 = [guild, diff, sortedGuildRoles];
  const callback1 = stateFromStores1.useCallback((guildMember) => {
    const index = guildMember.index;
    const obj = { guild, guildMember: guildMember.item, sortedGuildRoles, start: 0 === index, end: index === c17 };
    return _undefined(closure_22, obj);
  }, items14);
  const obj7 = { style: tmp4.containerInner, children: items15 };
  const obj8 = { style: tmp4.searchFieldContainer, children: c17(SearchField, obj9) };
  const callback2 = stateFromStores1.useCallback((userId) => userId.userId, []);
  let tmp30 = closure_19;
  let tmp31 = stateFromStores2;
  obj9 = { size: "md", placeholder: intl.string(guildId(guild[23]).t.pYHobK), onChange: callback, round: true };
  SearchField = guildId(guild[37]).SearchField;
  intl = guildId(guild[23]).intl;
  items15 = [c17(stateFromStores2, obj8), ];
  if (0 !== memo.length) {
    const obj10 = { keyExtractor: callback2, data: memo, renderItem: callback1, contentContainerStyle: obj11 };
    obj11 = { paddingBottom: bottom + tmp5(tmp2[16]).space.PX_16 };
    const FlashList = tmp(tmp2[38]).FlashList;
    tmp32Result = tmp32(FlashList, obj10);
  } else {
    const obj12 = { Illustration: tmp(tmp2[40]).NoResults, title: intl2.string(tmp(tmp2[23]).t.qVQ9ud), body: intl3.string(tmp(tmp2[23]).t.oB9grQ) };
    const EmptyState = tmp(tmp2[39]).EmptyState;
    intl2 = tmp(tmp2[23]).intl;
    intl3 = tmp(tmp2[23]).intl;
    tmp32Result = tmp32(EmptyState, obj12);
  }
  const obj13 = { children: items16 };
  items15[1] = tmp32Result;
  items16 = [first4(tmp31, obj7), c17(tmp(tmp2[41]).NavScrim, {})];
  return first4(tmp30, obj13);
}));
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembers.tsx");

export default memoResult;
