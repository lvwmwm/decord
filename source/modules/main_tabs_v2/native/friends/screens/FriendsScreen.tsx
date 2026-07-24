// Module ID: 15482
// Function ID: 118996
// Name: FriendsScreen
// Dependencies: [31, 27, 6900, 3767, 33, 4130, 689, 1456, 5462, 5482, 1557, 566, 15483, 1820, 8537, 15484, 15487, 15218, 4076, 1212, 5165, 9924, 5807, 4543, 8858, 10057, 2]
// Exports: default

// Module 15482 (FriendsScreen)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.requestsButtonContainer = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
_createForOfIteratorHelperLoose.emptyContainer = { justifyContent: "center", flexGrow: 1 };
let obj2 = { flexDirection: "row", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%" };
_createForOfIteratorHelperLoose.buttonContainer = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx");

export default function FriendsScreen() {
  let obj = navigation(analyticsLocations[7]);
  navigation = obj.useNavigation();
  let tmp2 = _createForOfIteratorHelperLoose();
  const importDefault = tmp2;
  analyticsLocations = importDefault(analyticsLocations[8])(importDefault(analyticsLocations[9]).FRIENDS_LIST).analyticsLocations;
  const bottom = importDefault(analyticsLocations[10])().bottom;
  const tmp3 = importDefault(analyticsLocations[8]);
  let items = [spam, outgoing];
  const stateFromStoresObject = navigation(analyticsLocations[11]).useStateFromStoresObject(items, () => {
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
  outgoing = stateFromStoresObject.outgoing;
  spam = stateFromStoresObject.spam;
  const pendingIgnored = stateFromStoresObject.pendingIgnored;
  let items1 = [analyticsLocations];
  const items2 = [navigation];
  const callback = bottom.useCallback((id) => {
    let obj = navigation(analyticsLocations[13]);
    const result = obj.dismissGlobalKeyboard();
    obj = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
  }, items1);
  const callback1 = bottom.useCallback((defaultSelectedUserId) => {
    navigation.navigate("friends", { screen: "new-message", params: { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" } });
  }, items2);
  const effect = bottom.useEffect(() => {
    tmp2(analyticsLocations[15])({ tab_opened: null });
    tmp2 = tmp2(analyticsLocations[16])({ tab_opened: null });
  }, []);
  const items3 = [incoming, navigation, outgoing, spam, pendingIgnored];
  const items4 = [bottom, incoming, navigation, outgoing, tmp2, spam];
  const memo = bottom.useMemo(() => {
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
      obj.subLabel = intl2.formatToPlainString(navigation(analyticsLocations[19]).t["1IEawz"], obj);
      obj.onPress = function onPress() {
        return outer1_0.navigate("friends", { screen: "requests" });
      };
      items.push(obj);
    }
    return items;
  }, items3);
  const memo1 = bottom.useMemo(() => {
    let obj = { style: tmp2.container };
    if (incoming + outgoing + spam <= 0) {
      const items = [null, ];
      obj = {};
      const intl3 = navigation(analyticsLocations[19]).intl;
      obj.title = intl3.string(navigation(analyticsLocations[19]).t["oi+B4p"]);
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
        return outer1_0.navigate("friends", { screen: "add-friends", params: { sourcePage: "Friends Screen" } });
      };
      obj2.grow = true;
      obj.children = pendingIgnored(navigation(analyticsLocations[23]).Button, obj2);
      obj.children = pendingIgnored(incoming, obj);
      items[1] = pendingIgnored(tmp2(analyticsLocations[21]), obj);
      obj.children = items;
      return tmp(tmp2, obj);
    } else {
      const obj3 = { style: tmp2.requestsButtonContainer };
      let obj4 = { start: true, end: true };
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
        let formatToPlainStringResult = intl2.formatToPlainString(navigation(analyticsLocations[num]).t["1IEawz"], obj6);
      } else {
        const intl = navigation(analyticsLocations[num]).intl;
        const obj7 = { spam };
        formatToPlainStringResult = intl.formatToPlainString(navigation(analyticsLocations[num]).t.e6BtLq, obj7);
      }
      obj4.subLabel = formatToPlainStringResult;
      obj4.onPress = function onPress() {
        if (outer1_4 + outer1_5 > 0) {
          let obj = { screen: "requests" };
          outer1_0.navigate("friends", obj);
        } else {
          obj = { screen: "spam-requests" };
          outer1_0.navigate("friends", obj);
        }
      };
      obj4 = tmp19(navigation(analyticsLocations[20]).TableRow, obj4);
      obj3.children = obj4;
      pendingIgnored(incoming, obj3);
      const tmp20 = incoming;
    }
  }, items4);
  obj = { value: analyticsLocations };
  const items5 = [pendingIgnored(importDefault(analyticsLocations[24]), { onSelectUser: callback, handleMessage: callback1, actions: memo, withAffinitySuggestions: false, withGameFriends: true, defaultNoResultsFound: memo1, hideSearchOnDefaultNoResults: true, disableThemedGradient: true }), pendingIgnored(navigation(analyticsLocations[25]).TTIFirstContentfulPaint, { label: "friends" })];
  obj.children = items5;
  return callback(navigation(analyticsLocations[8]).AnalyticsLocationProvider, obj);
};
