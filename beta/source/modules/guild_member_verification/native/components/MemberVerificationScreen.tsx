// Module ID: 16570
// Function ID: 16571
// Name: MemberVerificationScreen
// Dependencies: [19, 17, 4467, 2067, 4656, 1074, 21, 4836, 576, 5889, 5883, 504, 5910, 4658, 5839, 1101, 4692, 1613, 5890, 16571, 2]

// Module 16570 (MemberVerificationScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import router_utilsAll from "router_utils" /* 1101 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5839 */;
import MemberVerificationModalDefault from "MemberVerificationModal" /* 5883 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5889 */;
import react_mod from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4656 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import makeAuthenticated from "makeAuthenticated" /* 16571 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let tmp3;
const KeyboardAwareViewDefault = tmp3(5890);
function Loading() {
  return <View style={closure_12().flexLoading}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</View>;
}
function MemberVerificationRouteView(arg0) {
  MemberVerificationModalDefault;
  const merged = Object.assign(arg0);
  return <tmp />;
}
function ExistingJoinRequestHandler(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let stateFromStores1;
  const tmp = guildId;
  let tmp2 = stateFromStores1;
  const children = guildId.children;
  let obj = guildId(stateFromStores1[11]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [GuildChannelStore];
  const items2 = [stateFromStores];
  const obj2 = guildId(stateFromStores1[11]);
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
  const obj3 = guildId(stateFromStores1[11]);
  const stateFromStores2 = obj3.useStateFromStores(items3, () => UserGuildJoinRequestStore.getRequest(guildId));
  const tmp6 = onClose(stateFromStores1[12])(stateFromStores2);
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
  if (tmp(tmp2[13]).GuildJoinRequestApplicationStatuses.SUBMITTED !== applicationStatus) {
    if (tmp(tmp2[13]).GuildJoinRequestApplicationStatuses.APPROVED !== applicationStatus) {
      if (tmp(tmp2[13]).GuildJoinRequestApplicationStatuses.REJECTED !== applicationStatus) {
        return children;
      }
    }
  }
  return <Loading />;
}
let react = react_mod;
const View = react_native.View;
({ ME: c9, Routes: c10 } = Constants);
const jsx = Fragment.jsx;
let obj = { flex: { flex: 1 }, flexLoading: obj2 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
const authenticated = makeAuthenticated.makeAuthenticated(function MemberVerificationRouteContainer(navigation) {
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
    tmp10 = <Loading />;
  } else {
    let tmp12 = ExistingJoinRequestHandler;
    let obj2 = { style: items1, children: null };
    items1 = [tmp.flex, ];
    let obj3 = { marginLeft: tmp6, marginRight: tmp7 };
    items1[1] = obj3;
    let obj4 = { guildId, onClose: callback };
    KeyboardAwareViewDefault;
    tmp10 = <ExistingJoinRequestHandler guildId={guildId} onClose={callback}>{null}</ExistingJoinRequestHandler>;
  }
  return tmp10;
});
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationScreen.tsx");

export default authenticated;
