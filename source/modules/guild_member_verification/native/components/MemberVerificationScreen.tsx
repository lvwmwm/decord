// Module ID: 15477
// Function ID: 118951
// Name: Loading
// Dependencies: [31, 27, 1907, 1838, 3948, 653, 33, 4130, 689, 5584, 9183, 566, 5450, 3950, 9188, 1198, 3981, 1557, 5585, 15478, 2]

// Module 15477 (Loading)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import { Routes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import makeAuthenticated from "makeAuthenticated";

const require = arg1;
function Loading() {
  return <View style={_createForOfIteratorHelperLoose().flexLoading}>{jsx(require(5584) /* ActivityIndicator */.ActivityIndicator, {})}</View>;
}
function MemberVerificationRouteView(arg0) {
  const merged = Object.assign(arg0);
  return jsx(importDefault(9183), {});
}
function ExistingJoinRequestHandler(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const items = [closure_7];
  const stateFromStores = guildId(stateFromStores1[11]).useStateFromStores(items, () => outer1_7.getGuild(guildId));
  let obj = guildId(stateFromStores1[11]);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [stateFromStores];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(items1, () => {
    let tmp = null;
    if (null != stateFromStores) {
      const defaultChannel = outer1_6.getDefaultChannel(stateFromStores.id);
      let id;
      if (null != defaultChannel) {
        id = defaultChannel.id;
      }
      tmp = id;
    }
    return tmp;
  }, items2);
  const obj2 = guildId(stateFromStores1[11]);
  const items3 = [closure_8];
  const stateFromStores2 = guildId(stateFromStores1[11]).useStateFromStores(items3, () => outer1_8.getRequest(guildId));
  const tmp4 = onClose(stateFromStores1[12])(stateFromStores2);
  const React = tmp4;
  const items4 = [guildId, tmp4, onClose];
  const effect = React.useEffect(() => {
    let applicationStatus;
    if (null != tmp4) {
      applicationStatus = tmp4.applicationStatus;
    }
    if (guildId(stateFromStores1[13]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      onClose();
      const result = guildId(stateFromStores1[14]).openMemberVerificationPendingAlert(guildId);
      const obj3 = guildId(stateFromStores1[14]);
    } else if (guildId(stateFromStores1[13]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      onClose();
      let obj = guildId(stateFromStores1[14]);
      obj = { guildId, canWithdraw: true };
      const result1 = obj.openMemberVerificationRejectedAlert(obj);
    }
  }, items4);
  const items5 = [stateFromStores, guildId, onClose, stateFromStores1];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      if (null != guildId) {
        if (null != stateFromStores1) {
          stateFromStores(stateFromStores1[15]).transitionTo(outer1_9.CHANNEL(guildId, stateFromStores1));
          const obj = stateFromStores(stateFromStores1[15]);
        }
      }
    }
    if (null == guildId) {
      onClose();
    }
  }, items5);
  let applicationStatus;
  if (null != tmp4) {
    applicationStatus = tmp4.applicationStatus;
  }
  if (guildId(stateFromStores1[13]).GuildJoinRequestApplicationStatuses.SUBMITTED !== applicationStatus) {
    if (guildId(stateFromStores1[13]).GuildJoinRequestApplicationStatuses.APPROVED !== applicationStatus) {
      if (guildId(stateFromStores1[13]).GuildJoinRequestApplicationStatuses.REJECTED !== applicationStatus) {
        return guildId.children;
      }
    }
  }
  return <Loading />;
}
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.flexLoading = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const authenticated = makeAuthenticated.makeAuthenticated(function MemberVerificationRouteContainer(navigation) {
  navigation = navigation.navigation;
  const guildId = navigation.route.params.guildId;
  const items = [navigation];
  const callback = React.useCallback(() => {
    let index;
    let routes;
    const state = navigation.getState();
    ({ routes, index } = state);
    if (routes.length > 1) {
      let name;
      if (null != routes[index - 1]) {
        name = tmp5.name;
      }
      if ("member-verification" !== name) {
        navigation.goBack();
      } else {
        let diff = index;
        if (index >= 0) {
          while (null != routes[diff]) {
            if ("member-verification" !== tmp9.name) {
              let tmp11 = navigation;
              let tmp12 = outer1_3;
              let num3 = 16;
              let obj3 = navigation(outer1_3[16]);
              let popScreensResult = obj3.popScreens(index - diff);
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
      let obj = navigation(outer1_3[16]);
      obj = { screen: "messages" };
      obj.navigateToRootTab(obj);
    }
  }, items);
  importDefault(1557)();
  if (null == guildId) {
    let tmp8 = <Loading />;
  } else {
    let obj = { guildId, onClose: callback };
    obj = {};
    const items1 = [tmp.flex, ];
    obj = { marginLeft: tmp4, marginRight: tmp5 };
    items1[1] = obj;
    obj.style = items1;
    const obj1 = { guildId, onClose: callback };
    obj.children = <MemberVerificationRouteView guildId={guildId} onClose={callback} />;
    obj.children = jsx(importDefault(5585), { marginLeft: tmp4, marginRight: tmp5 });
    tmp8 = <ExistingJoinRequestHandler marginLeft={tmp4} marginRight={tmp5} />;
    const tmp14 = importDefault(5585);
  }
  return tmp8;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationScreen.tsx");

export default authenticated;
