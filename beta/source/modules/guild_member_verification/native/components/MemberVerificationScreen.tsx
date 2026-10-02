// Module ID: 16572
// Function ID: 16573
// Name: MemberVerificationScreen
// Dependencies: [19, 17, 4470, 2073, 4658, 1086, 21, 4837, 588, 558, 576, 5890, 5884, 504, 5907, 4660, 5840, 1113, 4694, 1619, 6462, 16573, 2]

// Module 16572 (MemberVerificationScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import router_utilsAll from "router_utils" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4660 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5840 */;
import MemberVerificationModalDefault from "MemberVerificationModal" /* 5884 */;
import react_mod from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4470 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4658 */;
import Constants from "Constants" /* 1086 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import makeAuthenticated from "makeAuthenticated" /* 16573 */;
import size from "module_2" /* 2 */;

let guildId, navigation;

let c10;
let c9;
let obj2;
let tmp;
let tmp5;
const ActivityIndicator_ActivityIndicator = tmp(5890);
const KeyboardAwareViewDefault = tmp5(6462);
let react = react_mod;
const View = react_native.View;
({ ME: c9, Routes: c10 } = Constants);
const jsx = Fragment.jsx;
let obj = { flex: { flex: 1 }, flexLoading: obj2 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.flexLoading) {
    const tmp11 = <View style={tmp4.flexLoading}>{first}</View>;
    cResult[1] = tmp4.flexLoading;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => <View style={closure_12().flexLoading}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</View>);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    MemberVerificationModalDefault;
    const merged = Object.assign(arg0);
    const tmp10 = <tmp6 />;
    cResult[0] = arg0;
    cResult[1] = tmp10;
    tmp3 = tmp10;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((arg0) => {
  MemberVerificationModalDefault;
  const merged = Object.assign(arg0);
  return <tmp />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let stateFromStores1;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp8;
  const tmp = guildId;
  let tmp2 = stateFromStores1;
  let obj = guildId(stateFromStores1[10]);
  const cResult = obj.c(25);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildChannelStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class A {
      constructor() {
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
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = A;
    cResult[6] = items2;
    tmp11 = items2;
    tmp10 = A;
  } else {
    class A {
      constructor() {
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
      }
    }
    tmp11 = cResult[6];
  }
  const tmpResult3 = tmp(tmp2[13]);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
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
      }
    }
    const items3 = [UserGuildJoinRequestStore];
    cResult[7] = items3;
    tmp13 = items3;
  } else {
    class A {
      constructor() {
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
      }
    }
  }
  if (cResult[8] !== guildId) {
    class T {
      constructor() {
        return UserGuildJoinRequestStore.getRequest(guildId);
      }
    }
    cResult[8] = guildId;
    cResult[9] = T;
    tmp14 = T;
  } else {
    class T {
      constructor() {
        return UserGuildJoinRequestStore.getRequest(guildId);
      }
    }
  }
  const tmpResult4 = tmp(tmp2[13]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
  const tmp16 = onClose(tmp2[14])(stateFromStores2);
  let applicationStatus = tmp16;
  if (cResult[10] === guildId) {
    class T {
      constructor() {
        return UserGuildJoinRequestStore.getRequest(guildId);
      }
    }
    const tmp17 = cResult[11];
    if (tmp16 != null) {
      class T {
        constructor() {
          return UserGuildJoinRequestStore.getRequest(guildId);
        }
      }
    }
    if (tmp17 === undefined) {
      class T {
        constructor() {
          return UserGuildJoinRequestStore.getRequest(guildId);
        }
      }
      if (cResult[14] === guildId) {
        class T {
          constructor() {
            return UserGuildJoinRequestStore.getRequest(guildId);
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
        return UserGuildJoinRequestStore.getRequest(guildId);
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
      const tmp2Result = MemberVerificationAlertActionCreators;
      const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      onClose();
      const obj = { guildId, canWithdraw: true };
      const tmp2Result2 = MemberVerificationAlertActionCreators;
      const result1 = tmp2Result2.openMemberVerificationRejectedAlert(obj);
    }
  };
  cResult[11] = undefined;
  cResult[12] = onClose;
  cResult[13] = fn2;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let stateFromStores1;
  const tmp = guildId;
  let tmp2 = stateFromStores1;
  const children = guildId.children;
  let obj = guildId(stateFromStores1[13]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [GuildChannelStore];
  const items2 = [stateFromStores];
  const obj2 = guildId(stateFromStores1[13]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
  const items3 = [UserGuildJoinRequestStore];
  const obj3 = guildId(stateFromStores1[13]);
  const stateFromStores2 = obj3.useStateFromStores(items3, () => UserGuildJoinRequestStore.getRequest(guildId));
  const tmp6 = onClose(stateFromStores1[14])(stateFromStores2);
  react = tmp6;
  const items4 = [guildId, tmp6, onClose];
  const effect = react.useEffect(() => {
    applicationStatus = undefined;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      onClose();
      const tmp2Result = MemberVerificationAlertActionCreators;
      const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      onClose();
      const obj = { guildId, canWithdraw: true };
      const tmp2Result2 = MemberVerificationAlertActionCreators;
      const result1 = tmp2Result2.openMemberVerificationRejectedAlert(obj);
    }
  }, items4);
  const items5 = [stateFromStores, guildId, onClose, stateFromStores1];
  const effect1 = react.useEffect(() => {
    if (null != stateFromStores) {
      if (null != guildId) {
        if (null != stateFromStores1) {
          const obj = router_utilsAll;
          obj.transitionTo(authStore.CHANNEL(tmp, tmp2));
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
  if (tmp(tmp2[15]).GuildJoinRequestApplicationStatuses.SUBMITTED !== applicationStatus) {
    if (tmp(tmp2[15]).GuildJoinRequestApplicationStatuses.APPROVED !== applicationStatus) {
      if (tmp(tmp2[15]).GuildJoinRequestApplicationStatuses.REJECTED !== applicationStatus) {
        return children;
      }
    }
  }
  return <closure_13 />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let left;
  let right;
  let tmp16;
  let tmp4;
  let obj = navigation(576);
  const cResult = obj.c(19);
  navigation = navigation.navigation;
  guildId = navigation.route.params.guildId;
  const tmp3 = closure_12();
  if (cResult[0] !== navigation) {
    const fn = function n() {
      let index;
      let routes;
      const state = navigation.getState();
      ({ routes, index } = state);
      const obj = navigation;
      if (routes.length > 1) {
        let name;
        if (routes[index - 1] != null) {
          name = tmp6.name;
        }
        if ("member-verification" !== name) {
          obj.goBack();
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
        const obj2 = NavigationRouteUtils;
        obj2.navigateToRootTab(obj3);
      }
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = useSafeAreaInsetsDefault();
  ({ left, right } = tmp6);
  if (null == guildId) {
    let tmp21;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp24 = <closure_13 />;
      cResult[2] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[2];
    }
    tmp16 = tmp21;
  } else {
    if (cResult[3] === left) {
      let tmp7;
      if (cResult[4] === right) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp3.flex) {
        let tmp8;
        if (cResult[7] === tmp7) {
          tmp8 = cResult[8];
        }
        if (cResult[9] === guildId) {
          let tmp9;
          if (cResult[10] === tmp4) {
            tmp9 = cResult[11];
          }
          if (cResult[12] === tmp8) {
            let tmp13;
            if (cResult[13] === tmp9) {
              tmp13 = cResult[14];
            }
            if (cResult[15] === guildId) {
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp13) {
                  tmp16 = cResult[18];
                }
              }
            }
            const tmp19 = <closure_15 guildId={guildId} onClose={tmp4}>{tmp13}</closure_15>;
            cResult[15] = guildId;
            cResult[16] = tmp4;
            cResult[17] = tmp13;
            cResult[18] = tmp19;
            tmp16 = tmp19;
          }
          const tmp15 = jsx(KeyboardAwareViewDefault, { style: tmp8, children: tmp9 });
          cResult[12] = tmp8;
          cResult[13] = tmp9;
          cResult[14] = tmp15;
          tmp13 = tmp15;
        }
        const tmp10 = jsx;
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
  return tmp16;
}) : ((navigation) => {
  let items1;
  let tmp10;
  navigation = navigation.navigation;
  guildId = navigation.route.params.guildId;
  const items = [navigation];
  const tmp = closure_12();
  const callback = react.useCallback(() => {
    let index;
    let routes;
    const state = navigation.getState();
    ({ routes, index } = state);
    const obj = navigation;
    if (routes.length > 1) {
      let name;
      if (routes[index - 1] != null) {
        name = tmp6.name;
      }
      if ("member-verification" !== name) {
        obj.goBack();
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
      const obj2 = NavigationRouteUtils;
      obj2.navigateToRootTab(obj3);
    }
  }, items);
  useSafeAreaInsetsDefault();
  if (null == guildId) {
    tmp10 = <closure_13 />;
  } else {
    let tmp12 = closure_15;
    let obj2 = { style: items1, children: null };
    items1 = [tmp.flex, ];
    let obj3 = { marginLeft: tmp6, marginRight: tmp7 };
    items1[1] = obj3;
    let obj4 = { guildId, onClose: callback };
    KeyboardAwareViewDefault;
    tmp10 = <closure_15 guildId={guildId} onClose={callback}>{null}</closure_15>;
  }
  return tmp10;
});
const authenticated = makeAuthenticated.makeAuthenticated(tmp3);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationScreen.tsx");

export default authenticated;
