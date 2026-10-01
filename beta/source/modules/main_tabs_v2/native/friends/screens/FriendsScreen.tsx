// Module ID: 16574
// Function ID: 16575
// Name: FriendsScreen
// Dependencies: [19, 17, 7071, 4479, 21, 4836, 576, 1485, 6583, 6603, 1613, 504, 16575, 1876, 7624, 16576, 16579, 16081, 4777, 1115, 5917, 10457, 14645, 5281, 10321, 11375, 2]
// Exports: default

// Module 16574 (FriendsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1876 */;
import SendMessageIcon from "SendMessageIcon" /* 4777 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import TableRow2 from "TableRow" /* 5917 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import NoResultsDefault from "NoResults" /* 10457 */;
import WumpusCouchSpotIllustration from "WumpusCouchSpotIllustration" /* 14645 */;
import AssetRegistryDefault from "AssetRegistry" /* 16081 */;
import react from "react" /* 19 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7071 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, requestsButtonContainer: obj3, emptyContainer: { justifyContent: "center", flexGrow: 1 }, buttonContainer: obj4 };
obj2 = { paddingTop: nativeDefault.space.PX_8, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj4 = { flexDirection: "row", marginBottom: nativeDefault.space.PX_16, width: "100%" };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendsScreen.tsx");

export default function FriendsScreen() {
  let analyticsLocations;
  let closure_1;
  let items5;
  let outgoing;
  let spam;
  let obj = navigation(analyticsLocations[7]);
  navigation = obj.useNavigation();
  let tmp2 = closure_9();
  importDefault = tmp2;
  const tmp3 = require("useAnalyticsLocations");
  analyticsLocations = tmp3(require("AnalyticsLocation").FRIENDS_LIST).analyticsLocations;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj2 = navigation(analyticsLocations[11]);
  let items = [spam, outgoing];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let items;
    let items1;
    let obj2;
    let obj3;
    const obj = { incoming: obj2.getIncomingFriendRequestCount(items), outgoing: obj3.getOutgoingFriendRequestCount(items1), spam: spam.getSpamCount(), pendingIgnored: spam.getPendingIgnoredCount() };
    items = [spam, outgoing];
    items1 = [spam, outgoing];
    obj2 = navigation(analyticsLocations[12]);
    obj3 = navigation(analyticsLocations[12]);
    return obj;
  });
  const incoming = stateFromStoresObject.incoming;
  outgoing = stateFromStoresObject.outgoing;
  spam = stateFromStoresObject.spam;
  const pendingIgnored = stateFromStoresObject.pendingIgnored;
  let items1 = [analyticsLocations];
  const items2 = [navigation];
  const callback = bottom.useCallback((id) => {
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = { userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj2);
  }, items1);
  const callback1 = bottom.useCallback((defaultSelectedUserId) => {
    let obj2;
    const obj = { screen: "new-message", params: obj2 };
    obj2 = { defaultSelectedUserId: defaultSelectedUserId.id, sourcePage: "Friends Screen" };
    navigation.navigate("friends", obj);
  }, items2);
  const effect = bottom.useEffect(() => {
    closure_1(analyticsLocations[15])({ tab_opened: null });
    closure_1(analyticsLocations[16])({ tab_opened: null });
  }, []);
  const items3 = [incoming, navigation, outgoing, spam, pendingIgnored];
  const items4 = [bottom, incoming, navigation, outgoing, tmp2, spam];
  const memo = bottom.useMemo(() => {
    let intl;
    let intl2;
    let obj2;
    const sum = incoming + spam + pendingIgnored;
    const items = [];
    const tmp2 = sum > 0 || outgoing > 0;
    if (tmp2) {
      const push = items.push;
      const obj = {
        icon: AssetRegistryDefault,
        IconComponent: SendMessageIcon.SendMessageIcon,
        iconVariant: "default",
        label: intl.string(intl6.t.fyA115),
        subLabel: intl2.formatToPlainString(intl6.t["1IEawz"], obj2),
        onPress() {
            return navigation.navigate("friends", { screen: "requests" });
          }
      };
      intl = intl6.intl;
      intl2 = intl6.intl;
      obj2 = { incoming: sum, outgoing };
      push(obj);
    }
    return items;
  }, items3);
  const memo1 = bottom.useMemo(() => {
    let Button;
    let Icon;
    let TableRow;
    let formatToPlainStringResult;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let items1;
    let obj10;
    let obj3;
    let obj4;
    let obj8;
    let tmp10Result = null;
    const obj = { style: closure_1.container, children: items };
    const tmp = metroImportAll;
    if (incoming + outgoing + spam > 0) {
      const obj2 = { style: closure_1.requestsButtonContainer, children: metroImportDefault(TableRow, obj3) };
      obj3 = {
        start: true,
        end: true,
        icon: metroImportDefault(Icon, obj4),
        trailing: metroImportDefault(TableRow2.TableRow.Arrow, {}),
        label: intl5.string(intl6.t.fyA115),
        subLabel: formatToPlainStringResult,
        onPress() {
            if (incoming + outgoing > 0) {
              navigation.navigate("friends", { screen: "requests" });
            } else {
              navigation.navigate("friends", { screen: "spam-requests" });
            }
          }
      };
      TableRow = TableRow2.TableRow;
      obj4 = { source: AssetRegistryDefault };
      Icon = TableRow2.TableRow.Icon;
      intl5 = intl6.intl;
      if (incoming + outgoing > 0) {
        const intl2 = tmp11(1115).intl;
        const obj5 = { incoming, outgoing };
        formatToPlainStringResult = intl2.formatToPlainString(tmp11(1115).t["1IEawz"], obj5);
      } else {
        const intl = tmp11(1115).intl;
        const obj6 = { spam: tmp6 };
        formatToPlainStringResult = intl.formatToPlainString(tmp11(1115).t.e6BtLq, obj6);
      }
      tmp10Result = tmp10(tmp2, obj2);
    }
    items = [tmp10Result, ];
    const obj7 = { title: intl3.string(intl6.t["oi+B4p"]), fullHeight: true, containerStyle: closure_1.emptyContainer, illustration: WumpusCouchSpotIllustration.WumpusCouchSpotIllustration, children: metroImportDefault(View, obj8) };
    const tmp9 = NoResultsDefault;
    intl3 = intl6.intl;
    obj8 = { style: items1, children: metroImportDefault(Button, obj10) };
    items1 = [tmp3.buttonContainer, ];
    const obj9 = { paddingBottom: bottom };
    items1[1] = obj9;
    obj10 = {
      text: intl4.string(intl6.t.zIJnA6),
      size: "lg",
      onPress() {
        return navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Friends Screen" } });
      },
      grow: true
    };
    Button = components_Button_Button.Button;
    intl4 = intl6.intl;
    items[1] = metroImportDefault(tmp9, obj7);
    return tmp(View, obj);
  }, items4);
  let obj3 = { value: analyticsLocations, children: items5 };
  const AnalyticsLocationProvider = navigation(analyticsLocations[8]).AnalyticsLocationProvider;
  items5 = [pendingIgnored(require("SearchableUserList"), { onSelectUser: callback, handleMessage: callback1, actions: memo, withAffinitySuggestions: false, withGameFriends: true, defaultNoResultsFound: memo1, hideSearchOnDefaultNoResults: true, disableThemedGradient: true }), pendingIgnored(navigation(analyticsLocations[25]).TTIFirstContentfulPaint, { label: "friends" })];
  return closure_8(AnalyticsLocationProvider, obj3);
};
