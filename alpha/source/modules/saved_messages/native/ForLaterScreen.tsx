// Module ID: 11908
// Function ID: 11909
// Name: ForLaterScreen
// Dependencies: [32, 19, 17, 11909, 21, 5306, 575, 1655, 5939, 5940, 11910, 11905, 504, 7918, 7937, 6338, 1264, 1089, 11914, 11934, 7888, 2]

// Module 11908 (ForLaterScreen)
import nativeDefault from "native" /* 575 */;
import _modDef1655 from "module_1655" /* 1655 */;
import spring_spring from "spring/spring" /* 5939 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6338 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 11910 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 11914 */;
import ForLaterIntroDefault from "ForLaterIntro" /* 11934 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11909 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let importDefault, set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let size;
let tmp2;
const springPresets = tmp2(5940);
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
  const LOADING = throttledNow(11905).BookmarksFetchState.LOADING;
  let obj = throttledNow(504);
  const items = [SavedMessagesStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { overdueReminderCount: SavedMessagesStore.getOverdueMessageReminderCount(), bookmarkCount: SavedMessagesStore.getBookmarkCount() };
    return obj;
  });
  ({ overdueReminderCount, bookmarkCount } = stateFromStoresObject);
  if (type !== throttledNow(11905).SavedMessageSortTypes.BOOKMARK) {
    bookmarkCount = savedMessages.length;
  }
  const tmp2Result = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2Result(tmp2(7937).FOR_LATER_POPOUT).analyticsLocations;
  const obj2 = { type: throttledNow(1264).ImpressionTypes.MODAL, name: throttledNow(1264).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: bookmarkCount, overdue_count: overdueReminderCount } };
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
    }, closure_1(dependencyMap[17]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === savedMessages.length) {
    if (fetchState !== LOADING) {
      let tmp20;
      if (fetchState !== throttledNow(11905).BookmarksFetchState.LOADED_HAS_MORE) {
        const obj3 = { value: analyticsLocations, children: closure_8(ForLaterIntroDefault, obj4) };
        const AnalyticsLocationProvider = tmp5(7918).AnalyticsLocationProvider;
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
    const AnalyticsLocationProvider2 = tmp5(7918).AnalyticsLocationProvider;
    obj8 = { data: savedMessages, renderItem: tmp15, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll, onEndReached: loadMore, ListFooterComponent: tmp23Result };
    tmp23Result = null;
    FlashList = tmp5(7888).FlashList;
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
let closure_11 = { code: "(function ForLaterScreenTsx1(){let[borderOpacity]=this.__closure;return{opacity:borderOpacity.get()};})" };
const memoResult = react.memo(function ForLaterScreen(type) {
  let items3;
  let items4;
  let tmp5;
  let tmp6;
  let sharedValue;
  type = type.type;
  const tmp = closure_10();
  let tmp2 = dependencyMap;
  let obj = sharedValue(1655);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const callback = react.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.Reanimated3DefaultSpringConfig));
  }, items);
  const items1 = [closure_11, sharedValue];
  let c0;
  [tmp5, tmp6] = items1;
  const obj2 = sharedValue(1655);
  class ForLaterScreenTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  ForLaterScreenTsx1.__closure = items2;
  ForLaterScreenTsx1.__workletHash = 10104767508797;
  ForLaterScreenTsx1.__initData = tmp5;
  const obj3 = { style: tmp.container, children: items4 };
  const animatedStyle = obj2.useAnimatedStyle(ForLaterScreenTsx1);
  const obj4 = { style: items3 };
  items3 = [tmp.headerBorder, animatedStyle];
  items4 = [closure_8(_modDef1655.View, obj4), closure_8(ForLaterPage, { type, handleScroll: callback })];
  return closure_9(closure_6, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;
