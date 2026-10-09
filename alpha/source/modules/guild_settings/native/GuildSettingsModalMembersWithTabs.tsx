// Module ID: 16944
// Function ID: 16945
// Name: GuildSettingsModalMembersWithTabs
// Dependencies: [109, 32, 19, 17, 2086, 4709, 1390, 21, 5091, 587, 558, 576, 16558, 504, 6961, 1126, 16945, 16946, 16953, 4903, 1503, 9335, 16948, 7082, 8654, 8513, 12313, 10566, 2]

// Module 16944 (GuildSettingsModalMembersWithTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4903 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6961 */;
import ContextMenu2 from "ContextMenu" /* 9335 */;
import MemberSafetyPageTypes from "MemberSafetyPageTypes" /* 16945 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 16946 */;
import GuildSettingsModalMemberApplicationsDefault from "GuildSettingsModalMemberApplications" /* 16953 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let navigation;

let closure_12;
let obj2;
let tmp2;
let unpackModuleId;
const showMembersManagementActionSheet = tmp2(16948);
let closure_3 = ["ref"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { container: obj2, content: { flex: 1 }, tabContainer: { marginTop: 12, minHeight: 32 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createStyles.createStyles(obj);
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalMembersWithTabs(guildId) {
  let closure_5;
  let closure_6;
  let first;
  let items4;
  let obj10;
  let obj5;
  let obj8;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp23;
  let tmp26;
  let tmp37;
  let tmp43;
  let tmp5;
  let tmp9;
  let tmp = guildId;
  let tmp2 = stateFromStores;
  let obj = guildId(stateFromStores[11]);
  const cResult = obj.c(59);
  guildId = guildId.guildId;
  let obj2 = react;
  const tmp4 = _slicedToArray(react.useState(0), 2);
  [tmp5, importDefault] = tmp4;
  const obj3 = guildId(stateFromStores[12]);
  let num = obj3.useSubmittedGuildJoinRequestTotal({ guildId });
  if (num == null) {
    num = 0;
  }
  const tmp6 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function y() {
      return GuildStore.getGuild(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(tmp2[13]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore, UserStore];
    cResult[4] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const fn2 = function x() {
      let canPruneGuildMembersResult = null != stateFromStores;
      if (canPruneGuildMembersResult) {
        const obj = MemberSafetyPermissionsUtils;
        canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
      }
      return canPruneGuildMembersResult;
    };
    const items3 = [stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp16 = items3;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult4 = tmp(tmp2[13]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, tmp15, tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(tmp2[15]).intl;
    const stringResult = intl.string(tmp(tmp2[15]).t.NOOm1Z);
    cResult[8] = stringResult;
    tmp18 = stringResult;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] !== guildId) {
    const obj4 = { label: tmp18, id: tmp(tmp2[16]).MemberSafetyPageTab.ALL_MEMBERS, page: closure_11(require("GuildSettingsModalMembers"), obj5) };
    obj5 = { guildId };
    cResult[9] = guildId;
    cResult[10] = obj4;
    tmp20 = obj4;
  } else {
    tmp20 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[15]).intl;
    const stringResult1 = intl2.string(tmp(tmp2[15]).t["4eQVBO"]);
    cResult[11] = stringResult1;
    tmp23 = stringResult1;
  } else {
    tmp23 = cResult[11];
  }
  let tmp25;
  if (num > 0) {
    tmp25 = num;
  }
  if (cResult[12] !== guildId) {
    const obj6 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.SUBMITTED };
    const tmp29 = require("GuildSettingsModalMemberApplications");
    const tmp30 = closure_11(tmp29, obj6);
    cResult[12] = guildId;
    cResult[13] = tmp30;
    tmp26 = tmp30;
  } else {
    tmp26 = cResult[13];
  }
  if (cResult[14] === tmp25) {
    let tmp31;
    let tmp32;
    let tmp34;
    let tmp38;
    let tmp40;
    if (cResult[15] === tmp26) {
      tmp31 = cResult[16];
    }
    const _Symbol = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[15]).intl;
      const stringResult2 = intl3.string(tmp(tmp2[15]).t.bSZkla);
      cResult[17] = stringResult2;
      tmp32 = stringResult2;
    } else {
      tmp32 = cResult[17];
    }
    if (cResult[18] !== guildId) {
      const obj7 = { label: tmp32, id: tmp(tmp2[16]).MemberSafetyPageTab.REJECTED, page: closure_11(tmp37, obj8) };
      obj8 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.REJECTED };
      cResult[18] = guildId;
      cResult[19] = obj7;
      tmp34 = obj7;
      tmp37 = require("GuildSettingsModalMemberApplications");
    } else {
      tmp34 = cResult[19];
    }
    const _Symbol2 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(tmp2[15]).intl;
      const stringResult3 = intl4.string(tmp(tmp2[15]).t.aURgY2);
      cResult[20] = stringResult3;
      tmp38 = stringResult3;
    } else {
      tmp38 = cResult[20];
    }
    if (cResult[21] !== guildId) {
      const obj9 = { label: tmp38, id: tmp(tmp2[16]).MemberSafetyPageTab.APPROVED, page: closure_11(tmp43, obj10) };
      obj10 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.APPROVED };
      cResult[21] = guildId;
      cResult[22] = obj9;
      tmp40 = obj9;
      tmp43 = require("GuildSettingsModalMemberApplications");
    } else {
      tmp40 = cResult[22];
    }
    if (cResult[23] === tmp31) {
      if (cResult[24] === tmp34) {
        if (cResult[25] === tmp40) {
          let tmp44;
          if (cResult[26] === tmp20) {
            tmp44 = cResult[27];
          }
          const tmpResult5 = tmp(tmp2[20]);
          navigation = tmpResult5.useNavigation();
          if (cResult[28] === stateFromStores1) {
            let tmp46;
            if (cResult[29] === stateFromStores) {
              tmp46 = cResult[30];
            }
            _slicedToArray = tmp46;
            if (cResult[31] === navigation) {
              let tmp47;
              let tmp49;
              if (cResult[32] === tmp46) {
                tmp47 = cResult[33];
              }
              react = tmp47;
              const _Symbol3 = Symbol;
              class X {
                constructor(arg0) {
                  let closure_0 = arg0;
                  const obj = {
                    headerRight() {
                      let tmp = null;
                      if (0 === closure_0) {
                        tmp = closure_5();
                      }
                      return tmp;
                    }
                  };
                  navigation.setOptions(obj);
                }
              }
              if (tmp48 === Symbol.for("react.memo_cache_sentinel")) {
                const fn4 = function $(nativeEvent) {
                  importDefault(nativeEvent.nativeEvent.layout.width);
                };
                cResult[34] = fn4;
                class X {
                  constructor(arg0) {
                    let closure_0 = arg0;
                    const obj = {
                      headerRight() {
                        let tmp = null;
                        if (0 === closure_0) {
                          tmp = closure_5();
                        }
                        return tmp;
                      }
                    };
                    navigation.setOptions(obj);
                  }
                }
              } else {
                tmp49 = cResult[34];
              }
              let num32 = 0;
              if (num > 0) {
                num32 = 1;
              }
              if (cResult[35] === tmp5) {
                if (cResult[36] === tmp44) {
                  if (cResult[37] === tmp47) {
                    let tmp50;
                    if (cResult[38] === num32) {
                      tmp50 = cResult[39];
                    }
                    const tmpResult6 = tmp(tmp2[25]);
                    const segmentedControlState = tmpResult6.useSegmentedControlState(tmp50);
                    class X {
                      constructor(arg0) {
                        let closure_0 = arg0;
                        const obj = {
                          headerRight() {
                            let tmp = null;
                            if (0 === closure_0) {
                              tmp = closure_5();
                            }
                            return tmp;
                          }
                        };
                        navigation.setOptions(obj);
                      }
                    }
                    if (cResult[40] === segmentedControlState.activeIndex) {
                      let tmp52;
                      let tmp53;
                      let tmp57;
                      if (cResult[41] === tmp47) {
                        tmp52 = cResult[42];
                        tmp53 = cResult[43];
                      }
                      const effect = obj2.useEffect(tmp52, tmp53);
                      const _Symbol4 = Symbol;
                      class X {
                        constructor(arg0) {
                          let closure_0 = arg0;
                          const obj = {
                            headerRight() {
                              let tmp = null;
                              if (0 === closure_0) {
                                tmp = closure_5();
                              }
                              return tmp;
                            }
                          };
                          navigation.setOptions(obj);
                        }
                      }
                      if (tmp55 === Symbol.for("react.memo_cache_sentinel")) {
                        function ie(toLocaleString) {
                          const obj = guildId(stateFromStores[26]);
                          return "(" + obj.defaultCountFormatter(toLocaleString) + ")";
                        }
                        cResult[44] = ie;
                        class X {
                          constructor(arg0) {
                            let closure_0 = arg0;
                            const obj = {
                              headerRight() {
                                let tmp = null;
                                if (0 === closure_0) {
                                  tmp = closure_5();
                                }
                                return tmp;
                              }
                            };
                            navigation.setOptions(obj);
                          }
                        }
                      }
                      if (cResult[45] !== segmentedControlState) {
                        const obj11 = { state: segmentedControlState, grow: true, formatCount: null };
                        class X {
                          constructor(arg0) {
                            let closure_0 = arg0;
                            const obj = {
                              headerRight() {
                                let tmp = null;
                                if (0 === closure_0) {
                                  tmp = closure_5();
                                }
                                return tmp;
                              }
                            };
                            navigation.setOptions(obj);
                          }
                        }
                        const tmp59 = closure_11(tmp(tmp2[26]).Tabs, obj11);
                        cResult[45] = segmentedControlState;
                        cResult[46] = tmp59;
                        tmp57 = tmp59;
                      } else {
                        tmp57 = cResult[46];
                      }
                      if (cResult[47] === tmp6.tabContainer) {
                        let tmp60;
                        let tmp64;
                        if (cResult[48] === tmp57) {
                          tmp60 = cResult[49];
                        }
                        if (cResult[50] !== segmentedControlState) {
                          class X {
                            constructor(arg0) {
                              let closure_0 = arg0;
                              const obj = {
                                headerRight() {
                                  let tmp = null;
                                  if (0 === closure_0) {
                                    tmp = closure_5();
                                  }
                                  return tmp;
                                }
                              };
                              navigation.setOptions(obj);
                            }
                          }
                          cResult[50] = segmentedControlState;
                          cResult[51] = tmp66;
                          tmp64 = tmp66;
                        } else {
                          tmp64 = cResult[51];
                        }
                        if (cResult[52] === tmp6.content) {
                          let tmp67;
                          if (cResult[53] === tmp64) {
                            tmp67 = cResult[54];
                          }
                          if (cResult[55] === tmp6.container) {
                            if (cResult[56] === tmp60) {
                              let tmp70;
                              if (cResult[57] === tmp67) {
                                tmp70 = cResult[58];
                              }
                              return tmp70;
                            }
                          }
                          class X {
                            constructor(arg0) {
                              let closure_0 = arg0;
                              const obj = {
                                headerRight() {
                                  let tmp = null;
                                  if (0 === closure_0) {
                                    tmp = closure_5();
                                  }
                                  return tmp;
                                }
                              };
                              navigation.setOptions(obj);
                            }
                          }
                          const obj13 = { style: tmp6.container, children: items4 };
                          items4 = [tmp60, tmp67];
                          const tmp72 = closure_12(View, obj13);
                          cResult[55] = tmp6.container;
                          cResult[56] = tmp60;
                          cResult[57] = tmp67;
                          cResult[58] = tmp72;
                          tmp70 = tmp72;
                        }
                        class X {
                          constructor(arg0) {
                            let closure_0 = arg0;
                            const obj = {
                              headerRight() {
                                let tmp = null;
                                if (0 === closure_0) {
                                  tmp = closure_5();
                                }
                                return tmp;
                              }
                            };
                            navigation.setOptions(obj);
                          }
                        }
                        const obj14 = { style: tmp6.content, onLayout: tmp49, children: tmp64 };
                        const tmp69 = closure_11(View, obj14);
                        cResult[52] = tmp6.content;
                        cResult[53] = tmp64;
                        cResult[54] = tmp69;
                        tmp67 = tmp69;
                      }
                      const obj15 = { style: tmp6.tabContainer, children: tmp57 };
                      const tmp63 = closure_11(View, obj15);
                      cResult[47] = tmp6.tabContainer;
                      cResult[48] = tmp57;
                      cResult[49] = tmp63;
                      tmp60 = tmp63;
                    }
                    function ae() {
                      activeIndex = activeIndex.activeIndex;
                      closure_6(activeIndex.get());
                    }
                    const items5 = [segmentedControlState.activeIndex, tmp47];
                    cResult[40] = segmentedControlState.activeIndex;
                    cResult[41] = tmp47;
                    cResult[42] = ae;
                    cResult[43] = items5;
                    tmp53 = items5;
                    tmp52 = ae;
                  }
                }
              }
              const obj16 = { pageWidth: tmp5, items: tmp44, defaultIndex: num32, onSetActiveIndex: tmp47 };
              cResult[35] = tmp5;
              cResult[36] = tmp44;
              cResult[37] = tmp47;
              cResult[38] = num32;
              cResult[39] = obj16;
              tmp50 = obj16;
            }
            class X {
              constructor(arg0) {
                let closure_0 = arg0;
                const obj = {
                  headerRight() {
                    let tmp = null;
                    if (0 === closure_0) {
                      tmp = closure_5();
                    }
                    return tmp;
                  }
                };
                navigation.setOptions(obj);
              }
            }
            cResult[31] = navigation;
            cResult[32] = tmp46;
            cResult[33] = X;
            tmp47 = X;
          }
          const fn3 = function j() {
            let membersManagementActions;
            let tmp = unpackModuleId;
            const ContextMenu = ContextMenu2.ContextMenu;
            if (null != stateFromStores) {
              let obj = { guild: tmp4, canPrune: stateFromStores1 };
              const tmp2Result = showMembersManagementActionSheet;
              membersManagementActions = tmp2Result.getMembersManagementActions(obj);
            } else {
              membersManagementActions = [];
            }
            const obj2 = {
              items: membersManagementActions,
              children(ref) {
                let intl;
                ref = ref.ref;
                const obj = { source: closure_1_1(stateFromStores[24]), accessibilityLabel: intl.string(guildId(stateFromStores[15]).t.ogxXGq), ref };
                const tmp = navigation(ref, stateFromStores1);
                const HeaderActionButton = guildId(stateFromStores[23]).HeaderActionButton;
                intl = guildId(stateFromStores[15]).intl;
                const merged = Object.assign(tmp);
                return closure_1_11(HeaderActionButton, obj);
              }
            };
            return tmp(ContextMenu, obj2);
          };
          cResult[28] = stateFromStores1;
          cResult[29] = stateFromStores;
          cResult[30] = fn3;
          tmp46 = fn3;
        }
      }
    }
    const items6 = [tmp20, tmp31, tmp34, tmp40];
    cResult[23] = tmp31;
    cResult[24] = tmp34;
    cResult[25] = tmp40;
    cResult[26] = tmp20;
    cResult[27] = items6;
    tmp44 = items6;
  }
  const obj17 = { label: tmp23, id: tmp(tmp2[16]).MemberSafetyPageTab.PENDING, count: tmp25, page: tmp26 };
  cResult[14] = tmp25;
  cResult[15] = tmp26;
  cResult[16] = obj17;
  tmp31 = obj17;
}) : (function GuildSettingsModalMembersWithTabs(guildId) {
  let callback3;
  let items8;
  let num2;
  guildId = guildId.guildId;
  let num;
  let stateFromStores;
  let stateFromStores1;
  navigation = undefined;
  let callback;
  let callback1;
  let segmentedControlState;
  let obj = callback;
  let tmp = navigation(callback.useState(0), 2);
  let closure_1 = tmp[1];
  const tmp4 = num;
  const first = tmp[0];
  let obj2 = guildId(num[12]);
  num = obj2.useSubmittedGuildJoinRequestTotal({ guildId });
  if (num == null) {
    num = 0;
  }
  const tmp5 = closure_13();
  let items = [segmentedControlState];
  const items1 = [guildId];
  const tmp3Result = guildId(tmp4[13]);
  stateFromStores = tmp3Result.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [PermissionStore, UserStore];
  const items3 = [stateFromStores];
  const tmp3Result4 = guildId(tmp4[13]);
  stateFromStores1 = tmp3Result4.useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      const obj = MemberSafetyPermissionsUtils;
      canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items3);
  const items4 = [guildId, num];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    let obj4;
    let obj6;
    let obj8;
    let tmp4Result;
    let tmp4Result3;
    let tmp4Result4;
    let tmp6;
    const obj = { label: intl.string(intl5.t.NOOm1Z), id: MemberSafetyPageTypes.MemberSafetyPageTab.ALL_MEMBERS, page: unpackModuleId(GuildSettingsModalMembersDefault, obj2) };
    intl = intl5.intl;
    const items = [obj, , , ];
    obj2 = { guildId };
    const obj3 = { label: intl2.string(intl5.t["4eQVBO"]), id: MemberSafetyPageTypes.MemberSafetyPageTab.PENDING, count: tmp6, page: unpackModuleId(tmp4Result, obj4) };
    intl2 = intl5.intl;
    tmp6 = undefined;
    if (num > 0) {
      tmp6 = num;
    }
    obj4 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
    items[1] = obj3;
    tmp4Result = GuildSettingsModalMemberApplicationsDefault;
    const obj5 = { label: intl3.string(intl5.t.bSZkla), id: MemberSafetyPageTypes.MemberSafetyPageTab.REJECTED, page: unpackModuleId(tmp4Result3, obj6) };
    intl3 = tmp(1126).intl;
    obj6 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED };
    items[2] = obj5;
    tmp4Result3 = GuildSettingsModalMemberApplicationsDefault;
    const obj7 = { label: intl4.string(intl5.t.aURgY2), id: MemberSafetyPageTypes.MemberSafetyPageTab.APPROVED, page: unpackModuleId(tmp4Result4, obj8) };
    intl4 = tmp(1126).intl;
    obj8 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED };
    items[3] = obj7;
    tmp4Result4 = GuildSettingsModalMemberApplicationsDefault;
    return items;
  }, items4);
  const tmp3Result5 = guildId(tmp4[20]);
  navigation = tmp3Result5.useNavigation();
  const items5 = [stateFromStores1, stateFromStores];
  callback = obj.useCallback(() => {
    let membersManagementActions;
    const ContextMenu = ContextMenu2.ContextMenu;
    const tmp = unpackModuleId;
    if (null != stateFromStores) {
      let obj = { guild: tmp4, canPrune: stateFromStores1 };
      const tmp2Result = showMembersManagementActionSheet;
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
        const obj = { source: closure_1_1(num[24]), accessibilityLabel: intl.string(guildId(num[15]).t.ogxXGq), ref };
        const HeaderActionButton = guildId(num[23]).HeaderActionButton;
        intl = guildId(num[15]).intl;
        const merged1 = Object.assign(merged);
        return closure_1_11(HeaderActionButton, obj);
      }
    };
    return tmp(ContextMenu, obj2);
  }, items5);
  const items6 = [navigation, callback];
  callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = {
      headerRight() {
        let tmp = null;
        if (0 === closure_0) {
          tmp = callback();
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items6);
  const callback2 = obj.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = { pageWidth: first, items: memo, defaultIndex: num2, onSetActiveIndex: callback1 };
  num2 = 0;
  const useSegmentedControlState = tmp3(tmp4[25]).useSegmentedControlState;
  guildId(tmp4[25]);
  if (num > 0) {
    num2 = 1;
  }
  segmentedControlState = useSegmentedControlState(obj3);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = obj.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  let obj4 = { style: tmp5.container, children: items8 };
  let obj5 = { style: tmp5.tabContainer, children: closure_11(tmp3(tmp4[26]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback3 }) };
  callback3 = obj.useCallback((toLocaleString) => {
    const obj = guildId(num[26]);
    return "(" + obj.defaultCountFormatter(toLocaleString) + ")";
  }, []);
  items8 = [closure_11(callback1, obj5), ];
  let obj6 = { style: tmp5.content, onLayout: callback2, children: closure_11(tmp3(tmp4[27]).SegmentedControlPages, { state: segmentedControlState }) };
  items8[1] = closure_11(callback1, obj6);
  return closure_12(callback1, obj4);
}));
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default memoResult;
