// Module ID: 14500
// Function ID: 14501
// Name: ConjureAppChannelSheet
// Dependencies: [19, 14497, 4857, 4937, 1084, 21, 5005, 587, 558, 576, 5641, 7406, 5271, 6015, 14498, 14472, 14333, 9631, 14329, 504, 5247, 10805, 10932, 10160, 9086, 7047, 6963, 6971, 12356, 1125, 11632, 10803, 3864, 10187, 6972, 5724, 7547, 10950, 11027, 8619, 10933, 10037, 5302, 5306, 7281, 2]

// Module 14500 (ConjureAppChannelSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5247 */;
import Text_Text from "Text/Text" /* 5271 */;
import useChannelNameDefault from "useChannelName" /* 5641 */;
import Stack_Stack from "Stack/Stack" /* 6015 */;
import useAppChannelApplication from "useAppChannelApplication" /* 7406 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9086 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10160 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10805 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10932 */;
import openConjureAppChannelSheet from "openConjureAppChannelSheet" /* 14498 */;
import react_mod from "react" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 14497 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
let BottomSheet, _require, obj1, showActionSheetResult, tmp5;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
let react = react_mod;
({ ChannelSettingsSections: metroImportDefault, InstantInviteSources: metroImportAll, Permissions: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { content: obj2, centered: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppChannelSheetHeader(channel) {
  let items;
  const obj = react2;
  const cResult = obj.c(9);
  channel = channel.channel;
  const tmp4 = closure_13();
  const tmp6 = useChannelNameDefault(channel);
  const obj2 = useAppChannelApplication;
  const appChannelApplication = obj2.useAppChannelApplication(channel);
  if (cResult[0] === tmp6) {
    let tmp8;
    if (cResult[1] === tmp4.centered) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === appChannelApplication) {
      let tmp10;
      if (cResult[4] === tmp4.centered) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp8) {
        let tmp13;
        if (cResult[7] === tmp10) {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
      const obj3 = { spacing: nativeDefault.space.PX_4, align: "center", children: items };
      const Stack = tmp(6015).Stack;
      items = [tmp8, tmp10];
      const tmp15 = unpackModuleId(Stack, obj3);
      cResult[6] = tmp8;
      cResult[7] = tmp10;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    }
    let tmp11 = null;
    if (null != appChannelApplication) {
      const obj4 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp4.centered, children: appChannelApplication.name };
      tmp11 = authStore(tmp(5271).Text, obj4);
    }
    cResult[3] = appChannelApplication;
    cResult[4] = tmp4.centered;
    cResult[5] = tmp11;
    tmp10 = tmp11;
  }
  const obj5 = { variant: "heading-lg/bold", lineClamp: 1, style: tmp4.centered, children: tmp6 };
  const tmp9 = authStore(Text_Text.Heading, obj5);
  cResult[0] = tmp6;
  cResult[1] = tmp4.centered;
  cResult[2] = tmp9;
  tmp8 = tmp9;
}) : (function ConjureAppChannelSheetHeader(channel) {
  let items;
  channel = channel.channel;
  const tmp = closure_13();
  const tmp3 = useChannelNameDefault(channel);
  const obj = useAppChannelApplication;
  const appChannelApplication = obj.useAppChannelApplication(channel);
  const obj2 = { spacing: nativeDefault.space.PX_4, align: "center", children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj3 = { variant: "heading-lg/bold", lineClamp: 1, style: tmp.centered, children: tmp3 };
  items[0] = authStore(Text_Text.Heading, obj3);
  let tmp7Result = null;
  const tmp6 = unpackModuleId;
  const tmp7 = authStore;
  if (null != appChannelApplication) {
    const obj4 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.centered, children: appChannelApplication.name };
    tmp7Result = tmp7(Text_Text.Text, obj4);
  }
  items[1] = tmp7Result;
  return tmp6(Stack, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSheetAction(arg0) {
  let closure_0;
  let tmp2;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    let fn = null;
    if (null != arg0) {
      fn = () => {
        const obj = openConjureAppChannelSheet;
        const result = obj.closeConjureAppChannelSheet();
        closure_0();
      };
    }
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useSheetAction(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    let fn = null;
    if (null != closure_0) {
      fn = () => {
        const obj = closure_0(dependencyMap[14]);
        const result = obj.closeConjureAppChannelSheet();
        closure_1_0();
      };
    }
    return fn;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppChannelSheetContent(channel) {
  let TableRowIcon;
  let TableRowIcon2;
  let TableRowIcon3;
  let TableRowIcon4;
  let TableRowIcon5;
  let closure_3;
  let first;
  let items5;
  let obj11;
  let obj13;
  let obj4;
  let obj7;
  let obj9;
  let remixProject;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp = channel;
  let tmp2 = remixProject;
  let obj = channel(remixProject[9]);
  const cResult = obj.c(75);
  channel = channel.channel;
  let guild_id = channel.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  const tmpResult = tmp(tmp2[15]);
  const appChannelAppActions = tmpResult.useAppChannelAppActions(channel);
  remixProject = guild_id(tmp2[16])(channel, true).remixProject;
  const tmpResult5 = tmp(tmp2[17]);
  const isConjureMobileEnabled = tmpResult5.useIsConjureMobileEnabled(null != remixProject, "ConjureAppChannelSheet");
  const tmp7 = guild_id(tmp2[18])(channel);
  react = tmp7;
  const tmpResult6 = tmp(tmp2[17]);
  const isConjureMobileEnabled1 = tmpResult6.useIsConjureMobileEnabled(null != tmp7, "ConjureAppChannelSheet");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function p() {
      const obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel) };
      return obj;
    };
    const items1 = [channel];
    cResult[1] = channel;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult7 = tmp(tmp2[19]);
  const stateFromStoresObject = tmpResult7.useStateFromStoresObject(first, tmp11, tmp12);
  const canManageChannel = stateFromStoresObject.canManageChannel;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [canManageChannel];
    cResult[4] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== channel.id) {
    class N {
      constructor() {
        return ChannelMemberCountStore.getMemberCount(channel.id).total;
      }
    }
    const items3 = [channel.id];
    cResult[5] = channel.id;
    cResult[6] = N;
    cResult[7] = items3;
    tmp17 = items3;
    tmp16 = N;
  } else {
    class N {
      constructor() {
        return ChannelMemberCountStore.getMemberCount(channel.id).total;
      }
    }
    tmp17 = cResult[7];
  }
  const tmpResult8 = tmp(tmp2[19]);
  const stateFromStores = tmpResult8.useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[8] === channel.id) {
    class N {
      constructor() {
        return ChannelMemberCountStore.getMemberCount(channel.id).total;
      }
    }
    const effect = react.useEffect(V, items5);
    const tmp22 = closure_15(appChannelAppActions.reload);
    const tmp23 = closure_15(appChannelAppActions.close);
    const tmp24 = closure_15(appChannelAppActions.appInfo);
    closure_15(appChannelAppActions.devicePermissions);
    closure_15(appChannelAppActions.report);
    if (cResult[12] === guild_id) {
      class N {
        constructor() {
          return ChannelMemberCountStore.getMemberCount(channel.id).total;
        }
      }
      if (cResult[15] !== tmp7) {
        class U {
          constructor() {
            if (null != closure_3) {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              openConjureHomeScreenDefault(tmp.id);
            }
          }
        }
        cResult[15] = tmp7;
        cResult[16] = U;
      } else {
        class U {
          constructor() {
            if (null != closure_3) {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              openConjureHomeScreenDefault(tmp.id);
            }
          }
        }
      }
      if (cResult[17] === canManageChannel) {
        let tmp37Result;
        class U {
          constructor() {
            if (null != closure_3) {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              openConjureHomeScreenDefault(tmp.id);
            }
          }
        }
        if (cResult[20] !== channel.id) {
          class J {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = openConjureAppChannelSheet;
              const result1 = obj2.openConjureAppChannelMembersSheet(channel.id);
            }
          }
          cResult[20] = channel.id;
          cResult[21] = J;
        } else {
          class J {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = openConjureAppChannelSheet;
              const result1 = obj2.openConjureAppChannelMembersSheet(channel.id);
            }
          }
        }
        if (cResult[22] !== channel) {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
          cResult[22] = channel;
          cResult[23] = Y;
        } else {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
        }
        if (isConjureMobileEnabled) {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
        }
        if (isConjureMobileEnabled) {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
        }
        if (isConjureMobileEnabled1) {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
        }
        if (isConjureMobileEnabled1) {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
        }
        if (cResult[24] !== channel) {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
          let obj2 = { channel };
          cResult[24] = channel;
          cResult[25] = closure_10(closure_14, obj2);
          const tmp34 = closure_10(closure_14, obj2);
        } else {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
        }
        if (cResult[26] === tmp23) {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
          if (cResult[29] === isConjureMobileEnabled) {
            class Y {
              constructor() {
                const obj = openConjureAppChannelSheet;
                const result = obj.closeConjureAppChannelSheet();
                const obj2 = instant_invite_InstantInviteUtils;
                const obj3 = { source: metroImportAll.CONTEXT_MENU };
                const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
              }
            }
            if (cResult[32] === isConjureMobileEnabled1) {
              let tmp50;
              class Y {
                constructor() {
                  const obj = openConjureAppChannelSheet;
                  const result = obj.closeConjureAppChannelSheet();
                  const obj2 = instant_invite_InstantInviteUtils;
                  const obj3 = { source: metroImportAll.CONTEXT_MENU };
                  const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                }
              }
              if (cResult[35] !== tmp24) {
                let tmp43;
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
                if (null != tmp24) {
                  class Y {
                    constructor() {
                      const obj = openConjureAppChannelSheet;
                      const result = obj.closeConjureAppChannelSheet();
                      const obj2 = instant_invite_InstantInviteUtils;
                      const obj3 = { source: metroImportAll.CONTEXT_MENU };
                      const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                    }
                  }
                  let obj3 = { onPress: tmp24, icon: closure_10(TableRowIcon5, obj4), label: null };
                  const TableRow5 = tmp(tmp2[26]).TableRow;
                  obj4 = { IconComponent: tmp(tmp2[35]).CircleInformationIcon };
                  TableRowIcon5 = tmp(tmp2[27]).TableRowIcon;
                  const string5 = tmp(tmp2[29]).intl.string;
                  class X {
                    constructor() {
                      tmp2 = null != remixProject;
                      tmp = remixProject;
                      if (tmp2) {
                        tmp3 = c1;
                        tmp2 = null != c1;
                      }
                      if (tmp2) {
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        tmp7 = closure_0(closure_2[20]);
                        obj1 = { key: null, content: null };
                        showActionSheet = tmp7.showActionSheet;
                        obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                        tmp8 = jsx;
                        tmp9 = closure_1;
                        obj4 = { project: null, currentGuildId: null, onRemixed: null };
                        obj4.project = tmp;
                        tmp10 = c1;
                        obj4.currentGuildId = c1;
                        obj4.onRemixed = function onRemixed(arg0) {
                          return guild_id(remixProject[22])(arg0);
                        };
                        obj1.content = jsx(closure_1(closure_2[21]), obj4);
                        showActionSheetResult = showActionSheet(obj1);
                      }
                      return;
                    }
                  }
                  tmp43 = closure_10(TableRow5, obj3);
                }
                cResult[35] = tmp24;
                cResult[36] = tmp43;
              } else {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
              }
              if (canManageChannel) {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
              } else {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
              }
              if (cResult[37] !== tmp44) {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
                const obj5 = { IconComponent: tmp44 };
                cResult[37] = tmp44;
                cResult[38] = closure_10(tmp(tmp2[27]).TableRowIcon, obj5);
                const tmp46 = closure_10(tmp(tmp2[27]).TableRowIcon, obj5);
              } else {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
              }
              if (cResult[39] !== canManageChannel) {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
                const string6 = tmp48.string;
                const t = tmp(tmp2[29]).t;
                cResult[39] = canManageChannel;
                cResult[40] = string6(canManageChannel ? t.XPDhcc : t.h850Ss);
                const string6Result = string6(canManageChannel ? t.XPDhcc : t.h850Ss);
              } else {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
              }
              const _Symbol = Symbol;
              if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
                const tmp51 = closure_10(tmp(tmp2[34]).TableRowArrow, {});
                cResult[41] = tmp51;
                tmp50 = tmp51;
              } else {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
              }
              if (cResult[42] === tmp29) {
                class Y {
                  constructor() {
                    const obj = openConjureAppChannelSheet;
                    const result = obj.closeConjureAppChannelSheet();
                    const obj2 = instant_invite_InstantInviteUtils;
                    const obj3 = { source: metroImportAll.CONTEXT_MENU };
                    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                  }
                }
              }
              class X {
                constructor() {
                  tmp2 = null != remixProject;
                  tmp = remixProject;
                  if (tmp2) {
                    tmp3 = c1;
                    tmp2 = null != c1;
                  }
                  if (tmp2) {
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[14]);
                    result = obj.closeConjureAppChannelSheet();
                    tmp7 = closure_0(closure_2[20]);
                    obj1 = { key: null, content: null };
                    showActionSheet = tmp7.showActionSheet;
                    obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                    tmp8 = jsx;
                    tmp9 = closure_1;
                    obj4 = { project: null, currentGuildId: null, onRemixed: null };
                    obj4.project = tmp;
                    tmp10 = c1;
                    obj4.currentGuildId = c1;
                    obj4.onRemixed = function onRemixed(arg0) {
                      return guild_id(remixProject[22])(arg0);
                    };
                    obj1.content = jsx(closure_1(closure_2[21]), obj4);
                    showActionSheetResult = showActionSheet(obj1);
                  }
                  return;
                }
              }
              tmp54[0] = tmp29;
              tmp54[1] = tmp45;
              tmp54[2] = tmp47;
              tmp54[3] = tmp50;
              cResult[42] = tmp29;
              cResult[43] = tmp45;
              cResult[44] = tmp47;
              cResult[45] = closure_10(tmp(tmp2[26]).TableRow, tmp54);
              const tmp55 = closure_10(tmp(tmp2[26]).TableRow, tmp54);
            }
            let tmp41 = null;
            if (isConjureMobileEnabled1) {
              class Y {
                constructor() {
                  const obj = openConjureAppChannelSheet;
                  const result = obj.closeConjureAppChannelSheet();
                  const obj2 = instant_invite_InstantInviteUtils;
                  const obj3 = { source: metroImportAll.CONTEXT_MENU };
                  const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
                }
              }
              const obj6 = { onPress: tmp28, icon: closure_10(TableRowIcon4, obj7), label: null, trailing: closure_10(tmp(tmp2[34]).TableRowArrow, {}) };
              const TableRow4 = tmp(tmp2[26]).TableRow;
              obj7 = { IconComponent: tmp(tmp2[33]).PencilIcon };
              TableRowIcon4 = tmp(tmp2[27]).TableRowIcon;
              const string4 = tmp(tmp2[29]).intl.string;
              class X {
                constructor() {
                  tmp2 = null != remixProject;
                  tmp = remixProject;
                  if (tmp2) {
                    tmp3 = c1;
                    tmp2 = null != c1;
                  }
                  if (tmp2) {
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[14]);
                    result = obj.closeConjureAppChannelSheet();
                    tmp7 = closure_0(closure_2[20]);
                    obj1 = { key: null, content: null };
                    showActionSheet = tmp7.showActionSheet;
                    obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                    tmp8 = jsx;
                    tmp9 = closure_1;
                    obj4 = { project: null, currentGuildId: null, onRemixed: null };
                    obj4.project = tmp;
                    tmp10 = c1;
                    obj4.currentGuildId = c1;
                    obj4.onRemixed = function onRemixed(arg0) {
                      return guild_id(remixProject[22])(arg0);
                    };
                    obj1.content = jsx(closure_1(closure_2[21]), obj4);
                    showActionSheetResult = showActionSheet(obj1);
                  }
                  return;
                }
              }
              tmp41 = closure_10(TableRow4, obj6);
            }
            cResult[32] = isConjureMobileEnabled1;
            cResult[33] = tmp28;
            cResult[34] = tmp41;
            class X {
              constructor() {
                tmp2 = null != remixProject;
                tmp = remixProject;
                if (tmp2) {
                  tmp3 = c1;
                  tmp2 = null != c1;
                }
                if (tmp2) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  tmp7 = closure_0(closure_2[20]);
                  obj1 = { key: null, content: null };
                  showActionSheet = tmp7.showActionSheet;
                  obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                  tmp8 = jsx;
                  tmp9 = closure_1;
                  obj4 = { project: null, currentGuildId: null, onRemixed: null };
                  obj4.project = tmp;
                  tmp10 = c1;
                  obj4.currentGuildId = c1;
                  obj4.onRemixed = function onRemixed(arg0) {
                    return guild_id(remixProject[22])(arg0);
                  };
                  obj1.content = jsx(closure_1(closure_2[21]), obj4);
                  showActionSheetResult = showActionSheet(obj1);
                }
                return;
              }
            }
          }
          let tmp40 = null;
          if (isConjureMobileEnabled) {
            class Y {
              constructor() {
                const obj = openConjureAppChannelSheet;
                const result = obj.closeConjureAppChannelSheet();
                const obj2 = instant_invite_InstantInviteUtils;
                const obj3 = { source: metroImportAll.CONTEXT_MENU };
                const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
              }
            }
            const obj8 = { onPress: tmp27, icon: closure_10(TableRowIcon3, obj9), label: null };
            const TableRow3 = tmp(tmp2[26]).TableRow;
            obj9 = { IconComponent: tmp(tmp2[31]).RemixIcon };
            TableRowIcon3 = tmp(tmp2[27]).TableRowIcon;
            const string3 = tmp(tmp2[29]).intl.string;
            class X {
              constructor() {
                tmp2 = null != remixProject;
                tmp = remixProject;
                if (tmp2) {
                  tmp3 = c1;
                  tmp2 = null != c1;
                }
                if (tmp2) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  tmp7 = closure_0(closure_2[20]);
                  obj1 = { key: null, content: null };
                  showActionSheet = tmp7.showActionSheet;
                  obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                  tmp8 = jsx;
                  tmp9 = closure_1;
                  obj4 = { project: null, currentGuildId: null, onRemixed: null };
                  obj4.project = tmp;
                  tmp10 = c1;
                  obj4.currentGuildId = c1;
                  obj4.onRemixed = function onRemixed(arg0) {
                    return guild_id(remixProject[22])(arg0);
                  };
                  obj1.content = jsx(closure_1(closure_2[21]), obj4);
                  showActionSheetResult = showActionSheet(obj1);
                }
                return;
              }
            }
            tmp40 = closure_10(TableRow3, obj8);
          }
          cResult[29] = isConjureMobileEnabled;
          cResult[30] = tmp27;
          cResult[31] = tmp40;
          class X {
            constructor() {
              tmp2 = null != remixProject;
              tmp = remixProject;
              if (tmp2) {
                tmp3 = c1;
                tmp2 = null != c1;
              }
              if (tmp2) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[14]);
                result = obj.closeConjureAppChannelSheet();
                tmp7 = closure_0(closure_2[20]);
                obj1 = { key: null, content: null };
                showActionSheet = tmp7.showActionSheet;
                obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                tmp8 = jsx;
                tmp9 = closure_1;
                obj4 = { project: null, currentGuildId: null, onRemixed: null };
                obj4.project = tmp;
                tmp10 = c1;
                obj4.currentGuildId = c1;
                obj4.onRemixed = function onRemixed(arg0) {
                  return guild_id(remixProject[22])(arg0);
                };
                obj1.content = jsx(closure_1(closure_2[21]), obj4);
                showActionSheetResult = showActionSheet(obj1);
              }
              return;
            }
          }
        }
        if (null != tmp22) {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
          let tmp38 = null;
          const TableRowGroup = tmp(tmp2[25]).TableRowGroup;
          if (null != tmp22) {
            class Y {
              constructor() {
                const obj = openConjureAppChannelSheet;
                const result = obj.closeConjureAppChannelSheet();
                const obj2 = instant_invite_InstantInviteUtils;
                const obj3 = { source: metroImportAll.CONTEXT_MENU };
                const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
              }
            }
            const obj10 = { onPress: tmp22, icon: closure_10(TableRowIcon, obj11), label: null };
            const TableRow = tmp(tmp2[26]).TableRow;
            obj11 = { IconComponent: tmp(tmp2[28]).RefreshIcon };
            TableRowIcon = tmp(tmp2[27]).TableRowIcon;
            const string = tmp(tmp2[29]).intl.string;
            class X {
              constructor() {
                tmp2 = null != remixProject;
                tmp = remixProject;
                if (tmp2) {
                  tmp3 = c1;
                  tmp2 = null != c1;
                }
                if (tmp2) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  tmp7 = closure_0(closure_2[20]);
                  obj1 = { key: null, content: null };
                  showActionSheet = tmp7.showActionSheet;
                  obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                  tmp8 = jsx;
                  tmp9 = closure_1;
                  obj4 = { project: null, currentGuildId: null, onRemixed: null };
                  obj4.project = tmp;
                  tmp10 = c1;
                  obj4.currentGuildId = c1;
                  obj4.onRemixed = function onRemixed(arg0) {
                    return guild_id(remixProject[22])(arg0);
                  };
                  obj1.content = jsx(closure_1(closure_2[21]), obj4);
                  showActionSheetResult = showActionSheet(obj1);
                }
                return;
              }
            }
            tmp38 = closure_10(TableRow, obj10);
          }
          const items4 = [tmp38, ];
          let tmp39 = null;
          if (null != tmp23) {
            class Y {
              constructor() {
                const obj = openConjureAppChannelSheet;
                const result = obj.closeConjureAppChannelSheet();
                const obj2 = instant_invite_InstantInviteUtils;
                const obj3 = { source: metroImportAll.CONTEXT_MENU };
                const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
              }
            }
            const obj12 = { onPress: tmp23, icon: closure_10(TableRowIcon2, obj13), label: null };
            const TableRow2 = tmp(tmp2[26]).TableRow;
            obj13 = { IconComponent: tmp(tmp2[30]).DoorExitIcon };
            TableRowIcon2 = tmp(tmp2[27]).TableRowIcon;
            const string2 = tmp(tmp2[29]).intl.string;
            class X {
              constructor() {
                tmp2 = null != remixProject;
                tmp = remixProject;
                if (tmp2) {
                  tmp3 = c1;
                  tmp2 = null != c1;
                }
                if (tmp2) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  tmp7 = closure_0(closure_2[20]);
                  obj1 = { key: null, content: null };
                  showActionSheet = tmp7.showActionSheet;
                  obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                  tmp8 = jsx;
                  tmp9 = closure_1;
                  obj4 = { project: null, currentGuildId: null, onRemixed: null };
                  obj4.project = tmp;
                  tmp10 = c1;
                  obj4.currentGuildId = c1;
                  obj4.onRemixed = function onRemixed(arg0) {
                    return guild_id(remixProject[22])(arg0);
                  };
                  obj1.content = jsx(closure_1(closure_2[21]), obj4);
                  showActionSheetResult = showActionSheet(obj1);
                }
                return;
              }
            }
            tmp39 = closure_10(TableRow2, obj12);
          }
          const obj14 = { hasIcons: true, children: null };
          items4[1] = tmp39;
          class X {
            constructor() {
              tmp2 = null != remixProject;
              tmp = remixProject;
              if (tmp2) {
                tmp3 = c1;
                tmp2 = null != c1;
              }
              if (tmp2) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[14]);
                result = obj.closeConjureAppChannelSheet();
                tmp7 = closure_0(closure_2[20]);
                obj1 = { key: null, content: null };
                showActionSheet = tmp7.showActionSheet;
                obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                tmp8 = jsx;
                tmp9 = closure_1;
                obj4 = { project: null, currentGuildId: null, onRemixed: null };
                obj4.project = tmp;
                tmp10 = c1;
                obj4.currentGuildId = c1;
                obj4.onRemixed = function onRemixed(arg0) {
                  return guild_id(remixProject[22])(arg0);
                };
                obj1.content = jsx(closure_1(closure_2[21]), obj4);
                showActionSheetResult = showActionSheet(obj1);
              }
              return;
            }
          }
          tmp37Result = tmp37(TableRowGroup, obj14);
        } else {
          class Y {
            constructor() {
              const obj = openConjureAppChannelSheet;
              const result = obj.closeConjureAppChannelSheet();
              const obj2 = instant_invite_InstantInviteUtils;
              const obj3 = { source: metroImportAll.CONTEXT_MENU };
              const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
            }
          }
        }
        class X {
          constructor() {
            tmp2 = null != remixProject;
            tmp = remixProject;
            if (tmp2) {
              tmp3 = c1;
              tmp2 = null != c1;
            }
            if (tmp2) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[14]);
              result = obj.closeConjureAppChannelSheet();
              tmp7 = closure_0(closure_2[20]);
              obj1 = { key: null, content: null };
              showActionSheet = tmp7.showActionSheet;
              obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
              tmp8 = jsx;
              tmp9 = closure_1;
              obj4 = { project: null, currentGuildId: null, onRemixed: null };
              obj4.project = tmp;
              tmp10 = c1;
              obj4.currentGuildId = c1;
              obj4.onRemixed = function onRemixed(arg0) {
                return guild_id(remixProject[22])(arg0);
              };
              obj1.content = jsx(closure_1(closure_2[21]), obj4);
              showActionSheetResult = showActionSheet(obj1);
            }
            return;
          }
        }
        cResult[26] = tmp23;
        cResult[27] = tmp22;
        cResult[28] = tmp37Result;
      }
      const fn2 = function z() {
        const obj = openConjureAppChannelSheet;
        const result = obj.closeConjureAppChannelSheet();
        const obj2 = ChannelSettingsActionCreatorsDefault;
        obj2.setSection(canManageChannel ? metroImportDefault.OVERVIEW : metroImportDefault.NOTIFICATIONS);
        const tmp3Result = ChannelSettingsActionCreatorsDefault;
        tmp3Result.open(channel.id);
      };
      cResult[17] = canManageChannel;
      cResult[18] = channel.id;
      cResult[19] = fn2;
      class X {
        constructor() {
          tmp2 = null != remixProject;
          tmp = remixProject;
          if (tmp2) {
            tmp3 = c1;
            tmp2 = null != c1;
          }
          if (tmp2) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[14]);
            result = obj.closeConjureAppChannelSheet();
            tmp7 = closure_0(closure_2[20]);
            obj1 = { key: null, content: null };
            showActionSheet = tmp7.showActionSheet;
            obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
            tmp8 = jsx;
            tmp9 = closure_1;
            obj4 = { project: null, currentGuildId: null, onRemixed: null };
            obj4.project = tmp;
            tmp10 = c1;
            obj4.currentGuildId = c1;
            obj4.onRemixed = function onRemixed(arg0) {
              return guild_id(remixProject[22])(arg0);
            };
            obj1.content = jsx(closure_1(closure_2[21]), obj4);
            showActionSheetResult = showActionSheet(obj1);
          }
          return;
        }
      }
    }
    class X {
      constructor() {
        tmp2 = null != remixProject;
        tmp = remixProject;
        if (tmp2) {
          tmp3 = c1;
          tmp2 = null != c1;
        }
        if (tmp2) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[14]);
          result = obj.closeConjureAppChannelSheet();
          tmp7 = closure_0(closure_2[20]);
          obj1 = { key: null, content: null };
          showActionSheet = tmp7.showActionSheet;
          obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
          tmp8 = jsx;
          tmp9 = closure_1;
          obj4 = { project: null, currentGuildId: null, onRemixed: null };
          obj4.project = tmp;
          tmp10 = c1;
          obj4.currentGuildId = c1;
          obj4.onRemixed = function onRemixed(arg0) {
            return guild_id(remixProject[22])(arg0);
          };
          obj1.content = jsx(closure_1(closure_2[21]), obj4);
          showActionSheetResult = showActionSheet(obj1);
        }
        return;
      }
    }
    cResult[12] = guild_id;
    cResult[13] = remixProject;
    cResult[14] = X;
  }
  class V {
    constructor() {
      if (null != guild_id) {
        const count = ChannelMemberCountStore.requestCount(tmp, channel.id);
      }
    }
  }
  items5 = [guild_id, channel.id];
  cResult[8] = channel.id;
  cResult[9] = guild_id;
  cResult[10] = V;
  cResult[11] = items5;
}) : (function ConjureAppChannelSheetContent(channel) {
  let ChannelNotificationIcon;
  let TableRow10;
  let TableRowIcon;
  let TableRowIcon10;
  let TableRowIcon2;
  let TableRowIcon3;
  let TableRowIcon4;
  let TableRowIcon5;
  let TableRowIcon6;
  let TableRowIcon7;
  let TableRowIcon8;
  let TableRowIcon9;
  let closure_3;
  let formatToPlainStringResult;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let obj12;
  let obj14;
  let obj16;
  let obj19;
  let obj21;
  let obj24;
  let obj26;
  let obj27;
  let obj7;
  let obj9;
  let string;
  let t;
  let tmp22Result;
  channel = channel.channel;
  let remixProject;
  react = undefined;
  let canManageChannel;
  let guild_id = channel.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let tmp2 = channel;
  const tmp3 = remixProject;
  let obj = channel(remixProject[15]);
  const appChannelAppActions = obj.useAppChannelAppActions(channel);
  remixProject = guild_id(remixProject[16])(channel, true).remixProject;
  let obj2 = channel(remixProject[17]);
  const isConjureMobileEnabled = obj2.useIsConjureMobileEnabled(null != remixProject, "ConjureAppChannelSheet");
  const tmp7 = guild_id(remixProject[18])(channel);
  react = tmp7;
  let obj3 = channel(remixProject[17]);
  const isConjureMobileEnabled1 = obj3.useIsConjureMobileEnabled(null != tmp7, "ConjureAppChannelSheet");
  const items = [PermissionStore];
  const items1 = [channel];
  const obj4 = channel(remixProject[19]);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => {
    const obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel) };
    return obj;
  }, items1);
  canManageChannel = stateFromStoresObject.canManageChannel;
  const canInvite = stateFromStoresObject.canInvite;
  const items2 = [canManageChannel];
  const items3 = [channel.id];
  const obj5 = channel(remixProject[19]);
  const stateFromStores = obj5.useStateFromStores(items2, () => ChannelMemberCountStore.getMemberCount(channel.id).total, items3);
  const items4 = [guild_id, channel.id];
  const effect = react.useEffect(() => {
    if (null != guild_id) {
      const count = ChannelMemberCountStore.requestCount(tmp, channel.id);
    }
  }, items4);
  const tmp12 = closure_15(appChannelAppActions.reload);
  const tmp13 = closure_15(appChannelAppActions.close);
  const tmp14 = closure_15(appChannelAppActions.appInfo);
  const tmp15 = closure_15(appChannelAppActions.devicePermissions);
  const tmp16 = closure_15(appChannelAppActions.report);
  const items5 = [guild_id, remixProject];
  const items6 = [tmp7];
  const callback = react.useCallback(() => {
    let obj3;
    let tmp2 = null != remixProject;
    const tmp = remixProject;
    if (tmp2) {
      tmp2 = null != guild_id;
    }
    if (tmp2) {
      const obj = openConjureAppChannelSheet;
      const result = obj.closeConjureAppChannelSheet();
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: authStore(ConjureRemixSheetDefault, obj3) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj3 = {
        project: tmp,
        currentGuildId: guild_id,
        onRemixed(arg0) {
            return guild_id(remixProject[22])(arg0);
          }
      };
      showActionSheet(obj2);
    }
  }, items5);
  const items7 = [canManageChannel, channel.id];
  const callback1 = react.useCallback(() => {
    if (null != closure_3) {
      const obj = openConjureAppChannelSheet;
      const result = obj.closeConjureAppChannelSheet();
      openConjureHomeScreenDefault(tmp.id);
    }
  }, items6);
  const items8 = [channel.id];
  const callback2 = react.useCallback(() => {
    const obj = openConjureAppChannelSheet;
    const result = obj.closeConjureAppChannelSheet();
    const obj2 = ChannelSettingsActionCreatorsDefault;
    obj2.setSection(canManageChannel ? metroImportDefault.OVERVIEW : metroImportDefault.NOTIFICATIONS);
    const tmp3Result = ChannelSettingsActionCreatorsDefault;
    tmp3Result.open(channel.id);
  }, items7);
  const items9 = [channel];
  const callback3 = react.useCallback(() => {
    const obj = openConjureAppChannelSheet;
    const result = obj.closeConjureAppChannelSheet();
    const obj2 = openConjureAppChannelSheet;
    const result1 = obj2.openConjureAppChannelMembersSheet(channel.id);
  }, items8);
  const callback4 = react.useCallback(() => {
    const obj = openConjureAppChannelSheet;
    const result = obj.closeConjureAppChannelSheet();
    const obj2 = instant_invite_InstantInviteUtils;
    const obj3 = { source: metroImportAll.CONTEXT_MENU };
    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
  }, items9);
  const children = [closure_10(closure_14, { channel }), , , , ];
  const tmp23 = closure_12;
  if (null != tmp12) {
    let tmp24Result = null;
    const TableRowGroup = tmp2(tmp3[25]).TableRowGroup;
    if (null != tmp12) {
      const obj6 = { onPress: tmp12, icon: closure_10(TableRowIcon, obj7), label: intl.string(tmp2(tmp3[29]).t.kHie4V) };
      const TableRow = tmp2(tmp3[26]).TableRow;
      obj7 = { IconComponent: tmp2(tmp3[28]).RefreshIcon };
      TableRowIcon = tmp2(tmp3[27]).TableRowIcon;
      intl = tmp2(tmp3[29]).intl;
      tmp24Result = tmp24(TableRow, obj6);
    }
    const items11 = [tmp24Result, ];
    let tmp24Result8 = null;
    if (null != tmp13) {
      const obj8 = { onPress: tmp13, icon: closure_10(TableRowIcon2, obj9), label: intl2.string(tmp2(tmp3[29]).t.VkMnR2) };
      const TableRow2 = tmp2(tmp3[26]).TableRow;
      obj9 = { IconComponent: tmp2(tmp3[30]).DoorExitIcon };
      TableRowIcon2 = tmp2(tmp3[27]).TableRowIcon;
      intl2 = tmp2(tmp3[29]).intl;
      tmp24Result8 = tmp24(TableRow2, obj8);
    }
    const obj10 = { hasIcons: true, children: items11 };
    items11[1] = tmp24Result8;
    tmp22Result = tmp22(TableRowGroup, obj10);
  } else {
    tmp22Result = null;
  }
  children[1] = tmp22Result;
  let tmp24Result9 = null;
  const TableRowGroup2 = tmp2(tmp3[25]).TableRowGroup;
  if (isConjureMobileEnabled) {
    tmp24Result9 = null;
    if (null != remixProject) {
      tmp24Result9 = null;
      if (null != guild_id) {
        const obj11 = { onPress: callback, icon: closure_10(TableRowIcon3, obj12), label: intl3.string(guild_id(tmp3[32]).KMwCb7) };
        const TableRow3 = tmp2(tmp3[26]).TableRow;
        obj12 = { IconComponent: tmp2(tmp3[31]).RemixIcon };
        TableRowIcon3 = tmp2(tmp3[27]).TableRowIcon;
        intl3 = tmp2(tmp3[29]).intl;
        tmp24Result9 = tmp24(TableRow3, obj11);
      }
    }
  }
  const items12 = [tmp24Result9, , , , ];
  let tmp24Result10 = null;
  if (isConjureMobileEnabled1) {
    tmp24Result10 = null;
    if (null != tmp7) {
      tmp24Result10 = null;
      if (null != guild_id) {
        const obj13 = { onPress: callback1, icon: closure_10(TableRowIcon4, obj14), label: intl4.string(guild_id(tmp3[32]).jMMrDM), trailing: closure_10(tmp2(tmp3[34]).TableRowArrow, {}) };
        const TableRow4 = tmp2(tmp3[26]).TableRow;
        obj14 = { IconComponent: tmp2(tmp3[33]).PencilIcon };
        TableRowIcon4 = tmp2(tmp3[27]).TableRowIcon;
        intl4 = tmp2(tmp3[29]).intl;
        tmp24Result10 = tmp24(TableRow4, obj13);
      }
    }
  }
  items12[1] = tmp24Result10;
  let tmp24Result11 = null;
  if (null != tmp14) {
    const obj15 = { onPress: tmp14, icon: closure_10(TableRowIcon5, obj16), label: intl5.string(tmp2(tmp3[29]).t.Sh2z9g) };
    const TableRow5 = tmp2(tmp3[26]).TableRow;
    obj16 = { IconComponent: tmp2(tmp3[35]).CircleInformationIcon };
    TableRowIcon5 = tmp2(tmp3[27]).TableRowIcon;
    intl5 = tmp2(tmp3[29]).intl;
    tmp24Result11 = tmp24(TableRow5, obj15);
  }
  items12[2] = tmp24Result11;
  const obj17 = { onPress: callback2, icon: closure_10(TableRowIcon6, { IconComponent: ChannelNotificationIcon }), label: string(canManageChannel ? t.XPDhcc : t.h850Ss), trailing: closure_10(tmp2(tmp3[34]).TableRowArrow, {}) };
  const TableRow6 = tmp2(tmp3[26]).TableRow;
  TableRowIcon6 = tmp2(tmp3[27]).TableRowIcon;
  if (canManageChannel) {
    ChannelNotificationIcon = tmp2(tmp3[36]).SettingsIcon;
  } else {
    ChannelNotificationIcon = tmp2(tmp3[37]).ChannelNotificationIcon;
  }
  const intl6 = tmp2(tmp3[29]).intl;
  string = intl6.string;
  t = tmp2(tmp3[29]).t;
  items12[3] = closure_10(TableRow6, obj17);
  let tmp24Result12 = null;
  if (null != tmp15) {
    const obj18 = { onPress: tmp15, icon: closure_10(TableRowIcon7, obj19), label: intl7.string(guild_id(tmp3[32]).wum6n2), trailing: closure_10(tmp2(tmp3[34]).TableRowArrow, {}) };
    const TableRow7 = tmp2(tmp3[26]).TableRow;
    obj19 = { IconComponent: tmp2(tmp3[38]).ShieldIcon };
    TableRowIcon7 = tmp2(tmp3[27]).TableRowIcon;
    intl7 = tmp2(tmp3[29]).intl;
    tmp24Result12 = tmp24(TableRow7, obj18);
  }
  items12[4] = tmp24Result12;
  children[2] = closure_11(TableRowGroup2, { hasIcons: true, children: items12 });
  const TableRowGroup3 = tmp2(tmp3[25]).TableRowGroup;
  const obj20 = { onPress: callback3, icon: closure_10(TableRowIcon8, obj21), label: formatToPlainStringResult, trailing: closure_10(tmp2(tmp3[34]).TableRowArrow, {}) };
  const TableRow8 = tmp2(tmp3[26]).TableRow;
  obj21 = { IconComponent: tmp2(tmp3[39]).GroupIcon };
  TableRowIcon8 = tmp2(tmp3[27]).TableRowIcon;
  if (null != stateFromStores) {
    const intl9 = tmp2(tmp3[29]).intl;
    const obj22 = { count: stateFromStores };
    formatToPlainStringResult = intl9.formatToPlainString(tmp2(tmp3[29]).t.AWmdd9, obj22);
  } else {
    const intl8 = tmp2(tmp3[29]).intl;
    formatToPlainStringResult = intl8.string(tmp2(tmp3[29]).t.x87QCk);
  }
  const items13 = [closure_10(TableRow8, obj20), ];
  let tmp24Result13 = null;
  if (canInvite) {
    const obj23 = { onPress: callback4, icon: closure_10(TableRowIcon9, obj24), label: intl10.string(tmp2(tmp3[29]).t["f1+QIK"]), trailing: closure_10(tmp2(tmp3[34]).TableRowArrow, {}) };
    const TableRow9 = tmp2(tmp3[26]).TableRow;
    obj24 = { IconComponent: tmp2(tmp3[40]).GroupPlusIcon };
    TableRowIcon9 = tmp2(tmp3[27]).TableRowIcon;
    intl10 = tmp2(tmp3[29]).intl;
    tmp24Result13 = tmp24(TableRow9, obj23);
  }
  items13[1] = tmp24Result13;
  children[3] = closure_11(TableRowGroup3, { hasIcons: true, children: items13 });
  let tmp24Result14 = null;
  if (null != tmp16) {
    const obj25 = { hasIcons: true, children: closure_10(TableRow10, obj26) };
    const TableRowGroup4 = tmp2(tmp3[25]).TableRowGroup;
    obj26 = { onPress: tmp16, variant: "danger", icon: closure_10(TableRowIcon10, obj27), label: intl11.string(tmp2(tmp3[29]).t.NgA5vp) };
    TableRow10 = tmp2(tmp3[26]).TableRow;
    obj27 = { IconComponent: tmp2(tmp3[41]).FlagIcon, variant: "danger" };
    TableRowIcon10 = tmp2(tmp3[27]).TableRowIcon;
    intl11 = tmp2(tmp3[29]).intl;
    tmp24Result14 = tmp24(TableRowGroup4, obj25);
  }
  children[4] = tmp24Result14;
  return closure_11(tmp23, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppChannelSheet(channelId) {
  let BottomSheetScrollView;
  let first;
  let obj3;
  let obj5;
  let obj6;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  let obj = channelId(576);
  const cResult = obj.c(12);
  channelId = channelId.channelId;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== stateFromStores) {
    const fn2 = function b() {
      if (null == stateFromStores) {
        const obj = openConjureAppChannelSheet;
        const result = obj.closeConjureAppChannelSheet();
      }
    };
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  const effect = react.useEffect(tmp10, tmp11);
  let tmp13 = null;
  if (null != stateFromStores) {
    let tmp14;
    if (cResult[7] !== stateFromStores) {
      const obj2 = { spacing: stateFromStores(587).space.PX_24, children: closure_10(closure_16, obj3) };
      const Stack = tmp(6015).Stack;
      obj3 = { channel: stateFromStores };
      const tmp18 = closure_10(Stack, obj2);
      cResult[7] = stateFromStores;
      cResult[8] = tmp18;
      tmp14 = tmp18;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp4.content) {
      let tmp19;
      if (cResult[10] === tmp14) {
        tmp19 = cResult[11];
      }
      tmp13 = tmp19;
    }
    const obj4 = { startExpanded: true, scrollable: true, children: closure_10(BottomSheetScrollView, obj5) };
    BottomSheet = tmp(5302).BottomSheet;
    obj5 = { children: closure_10(channelId(7281).SafeAreaPaddingView, obj6) };
    BottomSheetScrollView = tmp(5306).BottomSheetScrollView;
    obj6 = { bottom: true, style: tmp4.content, children: tmp14 };
    const tmp21 = closure_10(BottomSheet, obj4);
    cResult[9] = tmp4.content;
    cResult[10] = tmp14;
    cResult[11] = tmp21;
    tmp19 = tmp21;
  }
  return tmp13;
}) : (function ConjureAppChannelSheet(channelId) {
  let BottomSheetScrollView;
  let SafeAreaPaddingView;
  let Stack;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  channelId = channelId.channelId;
  const tmp = closure_13();
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = openConjureAppChannelSheet;
      const result = obj.closeConjureAppChannelSheet();
    }
  }, items2);
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj2 = { startExpanded: true, scrollable: true, children: closure_10(BottomSheetScrollView, obj3) };
    BottomSheet = tmp2(5302).BottomSheet;
    obj3 = { children: closure_10(SafeAreaPaddingView, obj4) };
    BottomSheetScrollView = tmp2(5306).BottomSheetScrollView;
    obj4 = { bottom: true, style: tmp.content, children: closure_10(Stack, obj5) };
    SafeAreaPaddingView = tmp2(7281).SafeAreaPaddingView;
    obj5 = { spacing: stateFromStores(587).space.PX_24, children: closure_10(closure_16, obj6) };
    Stack = tmp2(6015).Stack;
    obj6 = { channel: stateFromStores };
    tmp6 = closure_10(BottomSheet, obj2);
  }
  return tmp6;
}));
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelSheet.tsx");

export default memoResult;
