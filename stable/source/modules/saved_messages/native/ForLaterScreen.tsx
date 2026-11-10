// Module ID: 11153
// Function ID: 11154
// Name: ForLaterScreen
// Dependencies: [32, 19, 17, 10191, 21, 5014, 575, 5095, 5637, 11154, 10192, 504, 7326, 7351, 6028, 1260, 1089, 11158, 11178, 7294, 2]

// Module 11153 (ForLaterScreen)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5095 */;
import spring from "spring" /* 5637 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6028 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 11154 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 11158 */;
import ForLaterIntroDefault from "ForLaterIntro" /* 11178 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10191 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let importDefault, set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let size;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
function ForLaterPage(type) {
  let FlashList;
  let bookmarkCount;
  let closure_1;
  let fetchState;
  let obj4;
  let obj7;
  let obj8;
  let overdueReminderCount;
  let savedMessages;
  let throttledNow;
  let tmp23Result;
  let tmp23Result2;
  let tmp24;
  type = type.type;
  throttledNow = undefined;
  importDefault = undefined;
  const handleScroll = type.handleScroll;
  const tmp = closure_10();
  const tmp4 = useSavedMessagesForPageDefault(type);
  ({ savedMessages, fetchState } = tmp4);
  const loadMore = tmp4.loadMore;
  const LOADING = throttledNow(10192).BookmarksFetchState.LOADING;
  let obj = throttledNow(504);
  const items = [SavedMessagesStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { overdueReminderCount: SavedMessagesStore.getOverdueMessageReminderCount(), bookmarkCount: SavedMessagesStore.getBookmarkCount() };
    return obj;
  });
  ({ overdueReminderCount, bookmarkCount } = stateFromStoresObject);
  if (type !== throttledNow(10192).SavedMessageSortTypes.BOOKMARK) {
    bookmarkCount = savedMessages.length;
  }
  const tmp2Result = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2Result(tmp2(7351).FOR_LATER_POPOUT).analyticsLocations;
  const obj2 = { type: throttledNow(1260).ImpressionTypes.MODAL, name: throttledNow(1260).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: bookmarkCount, overdue_count: overdueReminderCount } };
  const items1 = [bookmarkCount, overdueReminderCount];
  const tmp2Result2 = useTrackImpressionDefault;
  tmp2Result2(obj2, {}, items1);
  const useState = react.useState;
  let date = new Date();
  [throttledNow, importDefault] = useState(date);
  const effect = react.useEffect(() => {
    let closure_0;
    const interval = setInterval(() => {
      const date = new Date();
      return closure_1_1(date);
    }, closure_1(dependencyMap[16]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === savedMessages.length) {
    if (fetchState !== LOADING) {
      let tmp20;
      if (fetchState !== throttledNow(10192).BookmarksFetchState.LOADED_HAS_MORE) {
        const obj3 = { value: analyticsLocations, children: closure_8(ForLaterIntroDefault, obj4) };
        const AnalyticsLocationProvider = tmp5(7326).AnalyticsLocationProvider;
        obj4 = { type };
        tmp20 = closure_8(AnalyticsLocationProvider, obj3);
      }
      tmp23Result2 = tmp20;
    }
    const obj5 = { style: tmp.loading };
    tmp20 = closure_8(closure_5, obj5);
  } else {
    const obj6 = { value: analyticsLocations, children: closure_8(tmp24, obj7) };
    obj7 = { style: tmp.listContainer, children: closure_8(FlashList, obj8) };
    const AnalyticsLocationProvider2 = tmp5(7326).AnalyticsLocationProvider;
    obj8 = { data: savedMessages, renderItem: tmp15, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll, onEndReached: loadMore, ListFooterComponent: tmp23Result };
    tmp23Result = null;
    FlashList = tmp5(7294).FlashList;
    tmp24 = closure_6;
    if (fetchState === LOADING) {
      const obj9 = { style: tmp.loading };
      tmp23Result = tmp23(closure_5, obj9);
    }
    tmp23Result2 = tmp23(AnalyticsLocationProvider2, obj6);
  }
  return tmp23Result2;
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerBorder: size, cardContainer: { paddingHorizontal: 16, paddingVertical: 8 }, listContainer: { flex: 1 }, loading: { padding: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
createStyles = createStyles.createStyles;
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
const __initData = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = react.memo(function ForLaterScreen(type) {
  let items1;
  let items2;
  let sharedValue;
  type = type.type;
  const tmp = closure_10();
  let obj = sharedValue(5095);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const callback = react.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = set(withSpring(num));
  }, items);
  const fn = function n() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 16693192032676;
  fn.__initData = __initData;
  const obj3 = { style: tmp.container, children: items2 };
  const obj2 = sharedValue(5095);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: items1 };
  items1 = [tmp.headerBorder, animatedStyle];
  items2 = [closure_8(ReanimatedRexportDefault.View, obj4), closure_8(ForLaterPage, { type, handleScroll: callback })];
  return closure_9(closure_6, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;
