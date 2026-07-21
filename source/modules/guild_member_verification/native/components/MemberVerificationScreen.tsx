// Module ID: 15302
// Function ID: 116378
// Name: Loading
// Dependencies: []

// Module 15302 (Loading)
function Loading() {
  return <View style={callback().flexLoading}>{jsx(arg1(dependencyMap[9]).ActivityIndicator, {})}</View>;
}
function MemberVerificationRouteView(arg0) {
  const merged = Object.assign(arg0);
  return jsx(importDefault(dependencyMap[10]), {});
}
function ExistingJoinRequestHandler(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onClose = guildId.onClose;
  const importDefault = onClose;
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items, () => guild.getGuild(guildId));
  const importAll = stateFromStores;
  const obj = arg1(dependencyMap[11]);
  const items1 = [closure_6];
  const items2 = [stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[11]).useStateFromStores(items1, () => {
    let tmp = null;
    if (null != stateFromStores) {
      const defaultChannel = defaultChannel.getDefaultChannel(stateFromStores.id);
      let id;
      if (null != defaultChannel) {
        id = defaultChannel.id;
      }
      tmp = id;
    }
    return tmp;
  }, items2);
  const dependencyMap = stateFromStores1;
  const obj2 = arg1(dependencyMap[11]);
  const items3 = [closure_8];
  const stateFromStores2 = arg1(dependencyMap[11]).useStateFromStores(items3, () => request.getRequest(guildId));
  const tmp4 = importDefault(dependencyMap[12])(stateFromStores2);
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
          stateFromStores(stateFromStores1[15]).transitionTo(closure_9.CHANNEL(guildId, stateFromStores1));
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
  if (arg1(dependencyMap[13]).GuildJoinRequestApplicationStatuses.SUBMITTED !== applicationStatus) {
    if (arg1(dependencyMap[13]).GuildJoinRequestApplicationStatuses.APPROVED !== applicationStatus) {
      if (arg1(dependencyMap[13]).GuildJoinRequestApplicationStatuses.REJECTED !== applicationStatus) {
        return guildId.children;
      }
    }
  }
  return <Loading />;
}
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const Routes = arg1(dependencyMap[5]).Routes;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = arg1(dependencyMap[7]);
obj = { flex: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.flexLoading = obj;
let closure_11 = obj.createStyles(obj);
const authenticated = arg1(dependencyMap[19]).makeAuthenticated(function MemberVerificationRouteContainer(navigation) {
  navigation = navigation.navigation;
  const arg1 = navigation;
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
              let tmp12 = closure_3;
              let num3 = 16;
              let obj3 = navigation(closure_3[16]);
              let popScreensResult = obj3.popScreens(index - diff);
              // break
            } else {
              diff = diff - 1;
              break;
            }
            break;
          }
        }
      }
    } else {
      let obj = navigation(closure_3[16]);
      obj = { screen: "messages" };
      obj.navigateToRootTab(obj);
    }
  }, items);
  importDefault(dependencyMap[17])();
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
    obj.children = <MemberVerificationRouteView {...obj1} />;
    obj.children = jsx(importDefault(dependencyMap[18]), obj);
    tmp8 = <ExistingJoinRequestHandler {...obj} />;
    const tmp14 = importDefault(dependencyMap[18]);
  }
  return tmp8;
});
const obj4 = arg1(dependencyMap[19]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationScreen.tsx");

export default authenticated;
