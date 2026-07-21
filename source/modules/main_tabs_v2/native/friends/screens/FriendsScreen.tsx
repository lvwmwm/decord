// Module ID: 15310
// Function ID: 116457
// Name: FriendsScreen
// Dependencies: []
// Exports: default

// Module 15310 (FriendsScreen)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[6]).space.PX_8, flex: 1 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.requestsButtonContainer = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_16, borderRadius: importDefault(dependencyMap[6]).radii.lg, overflow: "hidden" };
obj.emptyContainer = { position: null, alignSelf: null };
const obj2 = { marginEnd: 1665208787, width: 1912603216, height: 24, marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
obj.buttonContainer = obj2;
let closure_9 = obj.createStyles(obj);
const obj1 = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_16, borderRadius: importDefault(dependencyMap[6]).radii.lg, overflow: "hidden" };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx");

export default function FriendsScreen() {
  let obj = arg1(dependencyMap[7]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const tmp2 = callback2();
  const importDefault = tmp2;
  const analyticsLocations = importDefault(dependencyMap[8])(importDefault(dependencyMap[9]).FRIENDS_LIST).analyticsLocations;
  const dependencyMap = analyticsLocations;
  const bottom = importDefault(dependencyMap[10])().bottom;
  const React = bottom;
  const tmp3 = importDefault(dependencyMap[8]);
  const items = [closure_6, closure_5];
  const stateFromStoresObject = arg1(dependencyMap[11]).useStateFromStoresObject(items, () => {
    const obj = {};
    const items = [spam, outgoing];
    obj.incoming = navigation(analyticsLocations[12]).getIncomingFriendRequestCount(items);
    const obj2 = navigation(analyticsLocations[12]);
    const items1 = [spam, outgoing];
    obj.outgoing = navigation(analyticsLocations[12]).getOutgoingFriendRequestCount(items1);
    obj.spam = spam.getSpamCount();
    obj.pendingIgnored = spam.getPendingIgnoredCount();
    return obj;
  });
  const incoming = stateFromStoresObject.incoming;
  const View = incoming;
  const outgoing = stateFromStoresObject.outgoing;
  closure_5 = outgoing;
  const spam = stateFromStoresObject.spam;
  closure_6 = spam;
  const pendingIgnored = stateFromStoresObject.pendingIgnored;
  const items1 = [analyticsLocations];
  const items2 = [navigation];
  const callback = React.useCallback((id) => {
    let obj = navigation(analyticsLocations[13]);
    const result = obj.dismissGlobalKeyboard();
    obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
  }, items1);
  const callback1 = React.useCallback((defaultSelectedUserId) => {
    navigation.navigate("friends", { screen: "new-message", params: { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" } });
  }, items2);
  const effect = React.useEffect(() => {
    tmp2(analyticsLocations[15])({ tab_opened: null });
    const tmp2 = tmp2(analyticsLocations[16])({ tab_opened: null });
  }, []);
  const items3 = [incoming, navigation, outgoing, spam, pendingIgnored];
  const items4 = [bottom, incoming, navigation, outgoing, tmp2, spam];
  const memo = React.useMemo(() => {
    const items = [];
    const sum = incoming + spam + pendingIgnored;
    let tmp2 = sum > 0;
    if (!tmp2) {
      tmp2 = outgoing > 0;
    }
    if (tmp2) {
      let obj = { icon: tmp2(analyticsLocations[17]), IconComponent: navigation(analyticsLocations[18]).SendMessageIcon, iconVariant: "default" };
      const intl = navigation(analyticsLocations[19]).intl;
      obj.label = intl.string(navigation(analyticsLocations[19]).t.fyA115);
      const intl2 = navigation(analyticsLocations[19]).intl;
      obj = { incoming: sum, outgoing };
      obj.subLabel = intl2.formatToPlainString(navigation(analyticsLocations[19]).t.1IEawz, obj);
      obj.onPress = function onPress() {
        return navigation.navigate("friends", { screen: "requests" });
      };
      items.push(obj);
    }
    return items;
  }, items3);
  const memo1 = React.useMemo(() => {
    let obj = { style: tmp2.container };
    if (incoming + outgoing + spam <= 0) {
      const items = [null, ];
      obj = {};
      const intl3 = navigation(analyticsLocations[19]).intl;
      obj.title = intl3.string(navigation(analyticsLocations[19]).t.oi+B4p);
      obj.fullHeight = true;
      obj.containerStyle = tmp2.emptyContainer;
      obj.illustration = navigation(analyticsLocations[22]).WumpusCouchSpotIllustration;
      obj = {};
      const items1 = [tmp2.buttonContainer, ];
      const obj1 = { paddingBottom: bottom };
      items1[1] = obj1;
      obj.style = items1;
      const obj2 = {};
      const intl4 = navigation(analyticsLocations[19]).intl;
      obj2.text = intl4.string(navigation(analyticsLocations[19]).t.zIJnA6);
      obj2.size = "lg";
      obj2.onPress = function onPress() {
        return navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Friends Screen" } });
      };
      obj2.grow = true;
      obj.children = pendingIgnored(navigation(analyticsLocations[23]).Button, obj2);
      obj.children = pendingIgnored(incoming, obj);
      items[1] = pendingIgnored(tmp2(analyticsLocations[21]), obj);
      obj.children = items;
      return tmp(tmp2, obj);
    } else {
      const obj3 = { style: tmp2.requestsButtonContainer };
      let obj4 = { bind: null, cursor: null };
      const obj5 = { source: tmp2(analyticsLocations[17]) };
      obj4.icon = pendingIgnored(navigation(analyticsLocations[20]).TableRow.Icon, obj5);
      obj4.trailing = pendingIgnored(navigation(analyticsLocations[20]).TableRow.Arrow, {});
      let num = 19;
      const intl5 = navigation(analyticsLocations[19]).intl;
      obj4.label = intl5.string(navigation(analyticsLocations[19]).t.fyA115);
      if (incoming + outgoing > 0) {
        const intl2 = navigation(analyticsLocations[num]).intl;
        const obj6 = { incoming };
        num = outgoing;
        obj6.outgoing = outgoing;
        let formatToPlainStringResult = intl2.formatToPlainString(navigation(analyticsLocations[num]).t.1IEawz, obj6);
      } else {
        const intl = navigation(analyticsLocations[num]).intl;
        const obj7 = { spam };
        formatToPlainStringResult = intl.formatToPlainString(navigation(analyticsLocations[num]).t.e6BtLq, obj7);
      }
      obj4.subLabel = formatToPlainStringResult;
      obj4.onPress = function onPress() {
        if (closure_4 + closure_5 > 0) {
          let obj = { screen: "requests" };
          navigation.navigate("friends", obj);
        } else {
          obj = { screen: "spam-requests" };
          navigation.navigate("friends", obj);
        }
      };
      obj4 = tmp19(navigation(analyticsLocations[20]).TableRow, obj4);
      obj3.children = obj4;
      pendingIgnored(incoming, obj3);
      const tmp20 = incoming;
    }
  }, items4);
  obj = { value: analyticsLocations };
  const items5 = [pendingIgnored(importDefault(dependencyMap[24]), { onSelectUser: callback, handleMessage: callback1, actions: memo, withAffinitySuggestions: false, withGameFriends: true, defaultNoResultsFound: memo1, hideSearchOnDefaultNoResults: true, disableThemedGradient: true }), pendingIgnored(arg1(dependencyMap[25]).TTIFirstContentfulPaint, { label: "friends" })];
  obj.children = items5;
  return callback(arg1(dependencyMap[8]).AnalyticsLocationProvider, obj);
};
