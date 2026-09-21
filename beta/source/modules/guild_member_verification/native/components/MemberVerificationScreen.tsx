// Module ID: 17221
// Function ID: 17222
// Name: MemberVerificationScreen
// Dependencies: [19, 17, 2100, 2067, 4581, 1078, 21, 4758, 580, 558, 568, 5796, 5790, 504, 5813, 4583, 5746, 1105, 4616, 1616, 7287, 17222, 2]

// Module 17221 (MemberVerificationScreen)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import router_utilsAll from "router_utils" /* 1105 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4583 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4616 */;
import MemberVerificationModalDefault from "MemberVerificationModal" /* 5790 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5796 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2100 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4581 */;

const KeyboardAwareViewDefault = tmp5(7287);
require = fn;
const View = fn(17).View;
const Constants = fn(1078);
({ ME: closure_9, Routes: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { flex: { flex: 1 }, flexLoading: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.flexLoading) {
    const obj2 = { style: tmp4.flexLoading, children: first };
    const tmp11 = <View style={tmp4.flexLoading}>{first}</View>;
    cResult[1] = tmp4.flexLoading;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => <View style={closure_12().flexLoading}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</View>);
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp10 = jsx(MemberVerificationModalDefault, {});
    cResult[0] = arg0;
    cResult[1] = tmp10;
    let tmp3 = tmp10;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((arg0) => {
  const merged = Object.assign(arg0);
  return jsx(MemberVerificationModalDefault, {});
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(stateFromStores1[10]).c(25);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = guildId(stateFromStores1[10]);
  const stateFromStores = guildId(stateFromStores1[13]).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildChannelStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_2) {
          tmp3 = closure_6;
          defaultChannel = closure_6.getDefaultChannel(tmp.id);
          id = undefined;
          if (defaultChannel != null) {
            id = defaultChannel.id;
          }
          tmp2 = id;
        }
        return tmp2;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = A;
    cResult[6] = items2;
    let tmp11 = items2;
    const tmp10 = A;
  } else {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_2) {
          tmp3 = closure_6;
          defaultChannel = closure_6.getDefaultChannel(tmp.id);
          id = undefined;
          if (defaultChannel != null) {
            id = defaultChannel.id;
          }
          tmp2 = id;
        }
        return tmp2;
      }
    }
    tmp11 = cResult[6];
  }
  const tmpResult = guildId(stateFromStores1[13]);
  stateFromStores1 = guildId(stateFromStores1[13]).useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_2) {
          tmp3 = closure_6;
          defaultChannel = closure_6.getDefaultChannel(tmp.id);
          id = undefined;
          if (defaultChannel != null) {
            id = defaultChannel.id;
          }
          tmp2 = id;
        }
        return tmp2;
      }
    }
    const items3 = [UserGuildJoinRequestStore];
    cResult[7] = items3;
    const tmp13 = items3;
  } else {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_2) {
          tmp3 = closure_6;
          defaultChannel = closure_6.getDefaultChannel(tmp.id);
          id = undefined;
          if (defaultChannel != null) {
            id = defaultChannel.id;
          }
          tmp2 = id;
        }
        return tmp2;
      }
    }
  }
  if (cResult[8] !== guildId) {
    class T {
      constructor() {
        return closure_8.getRequest(guildId);
      }
    }
    cResult[8] = guildId;
    cResult[9] = T;
    const tmp14 = T;
  } else {
    class T {
      constructor() {
        return closure_8.getRequest(guildId);
      }
    }
  }
  const tmpResult3 = guildId(stateFromStores1[13]);
  const stateFromStores2 = guildId(stateFromStores1[13]).useStateFromStores(tmp13, tmp14);
  const tmp16 = onClose(stateFromStores1[14])(stateFromStores2);
  let applicationStatus = tmp16;
  if (cResult[10] === guildId) {
    class T {
      constructor() {
        return closure_8.getRequest(guildId);
      }
    }
    if (tmp16 != null) {
      class T {
        constructor() {
          return closure_8.getRequest(guildId);
        }
      }
    }
    if (cResult[11] === undefined) {
      class T {
        constructor() {
          return closure_8.getRequest(guildId);
        }
      }
      if (cResult[14] === guildId) {
        class T {
          constructor() {
            return closure_8.getRequest(guildId);
          }
        }
      }
      const items4 = [guildId, tmp16, onClose];
      cResult[14] = guildId;
      cResult[15] = tmp16;
      cResult[16] = onClose;
      cResult[17] = items4;
    }
  }
  cResult[10] = guildId;
  if (tmp16 != null) {
    class T {
      constructor() {
        return closure_8.getRequest(guildId);
      }
    }
  }
  const fn2 = function y() {
    applicationStatus = undefined;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      onClose();
      const result = tmp2(5746).openMemberVerificationPendingAlert(guildId);
      const tmp2Result = tmp2(5746);
    } else if (tmp2(4583).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      onClose();
      const obj = { guildId, canWithdraw: true };
      const result1 = tmp2(5746).openMemberVerificationRejectedAlert(obj);
      const tmp2Result2 = tmp2(5746);
    }
  };
  cResult[11] = undefined;
  cResult[12] = onClose;
  cResult[13] = fn2;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let stateFromStores1;
  const items = [GuildStore];
  const stateFromStores = guildId(stateFromStores1[13]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(stateFromStores1[13]);
  const items1 = [GuildChannelStore];
  const items2 = [stateFromStores];
  stateFromStores1 = guildId(stateFromStores1[13]).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(tmp.id);
      let id;
      if (defaultChannel != null) {
        id = defaultChannel.id;
      }
      tmp2 = id;
    }
    return tmp2;
  }, items2);
  const obj2 = guildId(stateFromStores1[13]);
  const items3 = [UserGuildJoinRequestStore];
  const stateFromStores2 = guildId(stateFromStores1[13]).useStateFromStores(items3, () => UserGuildJoinRequestStore.getRequest(guildId));
  const tmp6 = onClose(stateFromStores1[14])(stateFromStores2);
  noop = tmp6;
  const items4 = [guildId, tmp6, onClose];
  const effect = noop.useEffect(() => {
    applicationStatus = undefined;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      onClose();
      const result = tmp2(5746).openMemberVerificationPendingAlert(guildId);
      const tmp2Result = tmp2(5746);
    } else if (tmp2(4583).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      onClose();
      const obj = { guildId, canWithdraw: true };
      const result1 = tmp2(5746).openMemberVerificationRejectedAlert(obj);
      const tmp2Result2 = tmp2(5746);
    }
  }, items4);
  const items5 = [stateFromStores, guildId, onClose, stateFromStores1];
  const effect1 = noop.useEffect(() => {
    if (null != stateFromStores) {
      if (null != guildId) {
        if (null != stateFromStores1) {
          router_utilsAll.transitionTo(v65535.CHANNEL(tmp, tmp2));
        }
      }
    }
    if (null == guildId) {
      onClose();
    }
  }, items5);
  let applicationStatus;
  if (tmp6 != null) {
    applicationStatus = tmp6.applicationStatus;
  }
  if (guildId(stateFromStores1[15]).GuildJoinRequestApplicationStatuses.SUBMITTED !== applicationStatus) {
    if (tmp(tmp2[15]).GuildJoinRequestApplicationStatuses.APPROVED !== applicationStatus) {
      if (tmp(tmp2[15]).GuildJoinRequestApplicationStatuses.REJECTED !== applicationStatus) {
        return guildId.children;
      }
    }
  }
  return <closure_13 />;
});
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const makeAuthenticated = fn(17222);
const authenticated = makeAuthenticated.makeAuthenticated(ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = navigation(568).c(19);
  navigation = navigation.navigation;
  guildId = navigation.route.params.guildId;
  const tmp3 = closure_12();
  if (cResult[0] !== navigation) {
    const fn = function n() {
      state = navigation.getState();
      ({ routes, index } = state);
      if (routes.length > 1) {
        let name;
        if (routes[index - 1] != null) {
          name = tmp6.name;
        }
        if ("member-verification" !== name) {
          navigation.goBack();
        } else {
          let diff = index;
          if (index >= 0) {
            while (null != routes[diff]) {
              if ("member-verification" !== tmp10.name) {
                let obj4 = NavigationRouteUtils;
                let popScreensResult = obj4.popScreens(index - diff);
                break;
              } else {
                diff = diff - 1;
                if (diff >= 0) {
                  continue;
                } else {
                  break;
                }
                break;
              }
              break;
            }
          }
        }
      } else {
        const obj3 = { screen: "guilds", guildId };
        NavigationRouteUtils.navigateToRootTab(obj3);
      }
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const obj = navigation(568);
  ({ left, right } = useSafeAreaInsetsDefault());
  if (null == guildId) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp24 = <closure_13 />;
      cResult[2] = tmp24;
    }
  } else {
    if (cResult[3] === left) {
      if (cResult[4] === right) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp3.flex) {
        if (cResult[7] === tmp7) {
          let tmp8 = cResult[8];
        }
        if (cResult[9] === guildId) {
          if (cResult[10] === tmp4) {
            let tmp9 = cResult[11];
          }
          if (cResult[12] === tmp8) {
            if (cResult[13] === tmp9) {
              let tmp13 = cResult[14];
            }
            if (cResult[15] === guildId) {
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp13) {
                  let tmp16 = cResult[18];
                }
                return tmp16;
              }
            }
            let obj2 = { guildId, onClose: tmp4, children: tmp13 };
            const tmp19 = <closure_15 guildId={guildId} onClose={tmp4}>{tmp13}</closure_15>;
            cResult[15] = guildId;
            cResult[16] = tmp4;
            cResult[17] = tmp13;
            cResult[18] = tmp19;
            tmp16 = tmp19;
          }
          let obj3 = { style: tmp8, children: tmp9 };
          const tmp15 = jsx(KeyboardAwareViewDefault, { style: tmp8, children: tmp9 });
          cResult[12] = tmp8;
          cResult[13] = tmp9;
          cResult[14] = tmp15;
          tmp13 = tmp15;
        }
        let obj4 = { guildId, onClose: tmp4 };
        let tmp12 = <closure_14 guildId={guildId} onClose={tmp4} />;
        cResult[9] = guildId;
        cResult[10] = tmp4;
        cResult[11] = tmp12;
        tmp9 = tmp12;
      }
      const items = [tmp3.flex, tmp7];
      cResult[6] = tmp3.flex;
      cResult[7] = tmp7;
      cResult[8] = items;
      tmp8 = items;
    }
    const obj5 = { marginLeft: left, marginRight: right };
    cResult[3] = left;
    cResult[4] = right;
    cResult[5] = obj5;
    tmp7 = obj5;
  }
}) : ((navigation) => {
  navigation = navigation.navigation;
  guildId = navigation.route.params.guildId;
  const items = [navigation];
  const callback = noop.useCallback(() => {
    state = navigation.getState();
    ({ routes, index } = state);
    if (routes.length > 1) {
      let name;
      if (routes[index - 1] != null) {
        name = tmp6.name;
      }
      if ("member-verification" !== name) {
        navigation.goBack();
      } else {
        let diff = index;
        if (index >= 0) {
          while (null != routes[diff]) {
            if ("member-verification" !== tmp10.name) {
              let obj4 = NavigationRouteUtils;
              let popScreensResult = obj4.popScreens(index - diff);
              break;
            } else {
              diff = diff - 1;
              if (diff >= 0) {
                continue;
              } else {
                break;
              }
              break;
            }
            break;
          }
        }
      }
    } else {
      const obj3 = { screen: "guilds", guildId };
      NavigationRouteUtils.navigateToRootTab(obj3);
    }
  }, items);
  useSafeAreaInsetsDefault();
  if (null == guildId) {
    let tmp10 = <closure_13 />;
  } else {
    const obj = { guildId, onClose: callback, children: null };
    let obj2 = { style: null, children: null };
    const items1 = [tmp.flex, ];
    let obj3 = { marginLeft: tmp6, marginRight: tmp7 };
    items1[1] = obj3;
    obj2.style = items1;
    let obj4 = { guildId, onClose: callback };
    obj2.children = <closure_14 guildId={guildId} onClose={callback} />;
    obj.children = jsx(KeyboardAwareViewDefault, { style: null, children: null });
    tmp10 = <closure_15 guildId={guildId} onClose={callback}>{null}</closure_15>;
    const tmp3Result = KeyboardAwareViewDefault;
  }
  return tmp10;
}));
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationScreen.tsx");

export default authenticated;
