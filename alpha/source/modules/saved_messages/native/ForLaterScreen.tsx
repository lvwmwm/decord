// Module ID: 12599
// Function ID: 12600
// Name: ForLaterScreen
// Dependencies: [32, 19, 17, 9651, 21, 5091, 587, 558, 576, 4811, 5375, 12600, 9652, 504, 6848, 6872, 1273, 8952, 1102, 12604, 12624, 8608, 2]

// Module 12599 (ForLaterScreen)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4811 */;
import spring from "spring" /* 5375 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6848 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8952 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 12600 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 12604 */;
import ForLaterIntroDefault from "ForLaterIntro" /* 12624 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9651 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let importDefault, set, throttledNow;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let size;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
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
const __initData2 = { code: "function ForLaterScreenTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterScreen(type) {
  let items;
  let items1;
  let sharedValue;
  let tmp6;
  let obj = sharedValue(576);
  const cResult = obj.c(12);
  type = type.type;
  const tmp4 = closure_10();
  const obj2 = sharedValue(4811);
  const tmp = sharedValue;
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function o(nativeEvent) {
      let num = 0;
      set = sharedValue.set;
      const withSpring = spring.withSpring;
      spring;
      if (nativeEvent.nativeEvent.contentOffset.y > 8) {
        num = 1;
      }
      const result = set(withSpring(num));
    };
    cResult[0] = sharedValue;
    let num = 1;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = tmp(4811);
  class S {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  S.__closure = { borderOpacity: sharedValue };
  S.__workletHash = 16693192032676;
  S.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(S);
  if (cResult[2] === animatedStyle) {
    let tmp8;
    if (cResult[3] === tmp4.headerBorder) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      let tmp10;
      if (cResult[6] === type) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.container) {
        if (cResult[9] === tmp8) {
          let tmp14;
          if (cResult[10] === tmp10) {
            tmp14 = cResult[11];
          }
          return tmp14;
        }
      }
      const obj3 = { style: tmp4.container, children: items };
      items = [tmp8, tmp10];
      const tmp17 = closure_9(closure_6, obj3);
      cResult[8] = tmp4.container;
      cResult[9] = tmp8;
      class S {
        constructor() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        }
      }
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { type, handleScroll: tmp6 };
    const tmp13 = closure_8(closure_14, obj4);
    cResult[5] = tmp6;
    cResult[6] = type;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const obj5 = { style: items1 };
  items1 = [tmp4.headerBorder, animatedStyle];
  const tmp9 = closure_8(ReanimatedRexportDefault.View, obj5);
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.headerBorder;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function ForLaterScreen(type) {
  let items1;
  let items2;
  let sharedValue;
  type = type.type;
  const tmp = closure_10();
  let obj = sharedValue(4811);
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
  fn.__workletHash = 14855800666151;
  fn.__initData = __initData2;
  const obj3 = { style: tmp.container, children: items2 };
  const obj2 = sharedValue(4811);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: items1 };
  items1 = [tmp.headerBorder, animatedStyle];
  items2 = [closure_8(ReanimatedRexportDefault.View, obj4), closure_8(closure_14, { type, handleScroll: callback })];
  return closure_9(closure_6, obj3);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterPage(arg0) {
  let bookmarkCount;
  let closure_1;
  let fetchState;
  let handleScroll;
  let loadMore;
  let overdueReminderCount;
  let savedMessages;
  let tmp7;
  let tmp8;
  let type;
  let obj = throttledNow(576);
  const cResult = obj.c(38);
  ({ type, handleScroll } = arg0);
  const tmp4 = closure_10();
  ({ savedMessages, fetchState, loadMore } = useSavedMessagesForPageDefault(type));
  useSavedMessagesForPageDefault(type);
  const LOADING = throttledNow(9652).BookmarksFetchState.LOADING;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SavedMessagesStore];
    const fn = function _() {
      const obj = { overdueReminderCount: SavedMessagesStore.getOverdueMessageReminderCount(), bookmarkCount: SavedMessagesStore.getBookmarkCount() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = throttledNow(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
  ({ overdueReminderCount, bookmarkCount } = stateFromStoresObject);
  if (type !== throttledNow(9652).SavedMessageSortTypes.BOOKMARK) {
    bookmarkCount = savedMessages.length;
  }
  const tmp5Result = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5Result(tmp5(6872).FOR_LATER_POPOUT).analyticsLocations;
  if (cResult[2] === overdueReminderCount) {
    if (cResult[3] === bookmarkCount) {
      let tmp12;
      let tmp13;
      if (cResult[4] === type) {
        tmp12 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[6] = obj2;
        tmp13 = obj2;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === overdueReminderCount) {
        let tmp14;
        let tmp16;
        let tmp23;
        let tmp22;
        if (cResult[8] === bookmarkCount) {
          tmp14 = cResult[9];
        }
        useTrackImpressionDefault(tmp12, tmp13, tmp14);
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          let date = new Date();
          cResult[10] = date;
          tmp16 = date;
        } else {
          tmp16 = cResult[10];
        }
        [throttledNow, importDefault] = react.useState(tmp16);
        const _Symbol3 = Symbol;
        const obj5 = react;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function w() {
            let closure_0;
            const interval = setInterval(() => {
              const date = new Date();
              return closure_1_1(date);
            }, closure_1(dependencyMap[18]).Millis.MINUTE);
            return () => {
              clearInterval(closure_0);
            };
          };
          const items1 = [];
          cResult[11] = fn2;
          cResult[12] = items1;
          tmp23 = items1;
          tmp22 = fn2;
        } else {
          tmp22 = cResult[11];
          tmp23 = cResult[12];
        }
        const effect = obj5.useEffect(tmp22, tmp23);
        if (cResult[13] !== throttledNow) {
          class P {
            constructor(savedMessage) {
              const obj = { savedMessage: savedMessage.item, throttledNow };
              return metroImportAll(ForLaterMessageCardDefault, obj);
            }
          }
          cResult[13] = throttledNow;
          cResult[14] = P;
        } else {
          class P {
            constructor(savedMessage) {
              const obj = { savedMessage: savedMessage.item, throttledNow };
              return metroImportAll(ForLaterMessageCardDefault, obj);
            }
          }
        }
        if (0 === savedMessages.length) {
          class P {
            constructor(savedMessage) {
              const obj = { savedMessage: savedMessage.item, throttledNow };
              return metroImportAll(ForLaterMessageCardDefault, obj);
            }
          }
          if (cResult[15] !== tmp4.loading) {
            class P {
              constructor(savedMessage) {
                const obj = { savedMessage: savedMessage.item, throttledNow };
                return metroImportAll(ForLaterMessageCardDefault, obj);
              }
            }
            const obj3 = { style: tmp4.loading };
            const tmp34 = closure_8(closure_5, obj3);
            cResult[15] = tmp4.loading;
            cResult[16] = tmp34;
          } else {
            class P {
              constructor(savedMessage) {
                const obj = { savedMessage: savedMessage.item, throttledNow };
                return metroImportAll(ForLaterMessageCardDefault, obj);
              }
            }
          }
        } else {
          class P {
            constructor(savedMessage) {
              const obj = { savedMessage: savedMessage.item, throttledNow };
              return metroImportAll(ForLaterMessageCardDefault, obj);
            }
          }
          let tmp28 = null;
          if (fetchState === LOADING) {
            class P {
              constructor(savedMessage) {
                const obj = { savedMessage: savedMessage.item, throttledNow };
                return metroImportAll(ForLaterMessageCardDefault, obj);
              }
            }
            const obj4 = { style: tmp4.loading };
            tmp28 = closure_8(closure_5, obj4);
          }
          cResult[22] = fetchState === LOADING;
          cResult[23] = tmp4.loading;
          cResult[24] = tmp28;
        }
        return tmp30;
      }
      const items2 = [bookmarkCount, overdueReminderCount];
      cResult[7] = overdueReminderCount;
      cResult[8] = bookmarkCount;
      cResult[9] = items2;
      tmp14 = items2;
    }
  }
  const obj6 = { type: throttledNow(1273).ImpressionTypes.MODAL, name: throttledNow(1273).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: bookmarkCount, overdue_count: overdueReminderCount } };
  cResult[2] = overdueReminderCount;
  cResult[3] = bookmarkCount;
  cResult[4] = type;
  cResult[5] = obj6;
  tmp12 = obj6;
}) : (function ForLaterPage(type) {
  let FlashList;
  let bookmarkCount;
  let closure_1;
  let fetchState;
  let obj4;
  let obj7;
  let obj8;
  let overdueReminderCount;
  let savedMessages;
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
  const LOADING = throttledNow(9652).BookmarksFetchState.LOADING;
  let obj = throttledNow(504);
  const items = [SavedMessagesStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { overdueReminderCount: SavedMessagesStore.getOverdueMessageReminderCount(), bookmarkCount: SavedMessagesStore.getBookmarkCount() };
    return obj;
  });
  ({ overdueReminderCount, bookmarkCount } = stateFromStoresObject);
  if (type !== throttledNow(9652).SavedMessageSortTypes.BOOKMARK) {
    bookmarkCount = savedMessages.length;
  }
  const tmp2Result = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2Result(tmp2(6872).FOR_LATER_POPOUT).analyticsLocations;
  const obj2 = { type: throttledNow(1273).ImpressionTypes.MODAL, name: throttledNow(1273).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: bookmarkCount, overdue_count: overdueReminderCount } };
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
    }, closure_1(dependencyMap[18]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === savedMessages.length) {
    if (fetchState !== LOADING) {
      let tmp20;
      if (fetchState !== throttledNow(9652).BookmarksFetchState.LOADED_HAS_MORE) {
        const obj3 = { value: analyticsLocations, children: closure_8(ForLaterIntroDefault, obj4) };
        const AnalyticsLocationProvider = tmp5(6848).AnalyticsLocationProvider;
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
    const AnalyticsLocationProvider2 = tmp5(6848).AnalyticsLocationProvider;
    obj8 = { data: savedMessages, renderItem: tmp15, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll, onEndReached: loadMore, ListFooterComponent: tmp23Result };
    tmp23Result = null;
    FlashList = tmp5(8608).FlashList;
    tmp24 = closure_6;
    if (fetchState === LOADING) {
      const obj9 = { style: tmp.loading };
      tmp23Result = tmp23(closure_5, obj9);
    }
    tmp23Result2 = tmp23(AnalyticsLocationProvider2, obj6);
  }
  return tmp23Result2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;
