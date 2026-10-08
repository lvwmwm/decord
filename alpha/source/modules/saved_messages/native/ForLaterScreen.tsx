// Module ID: 12659
// Function ID: 12660
// Name: ForLaterScreen
// Dependencies: [32, 19, 17, 9632, 21, 5090, 587, 558, 576, 4810, 5374, 12660, 504, 6841, 6865, 1272, 8941, 1102, 12663, 12683, 8600, 2]

// Module 12659 (ForLaterScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8941 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 12660 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 12663 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9632 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let importDefault, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let tmp2;
const ForLaterIntroDefault = tmp2(12683);
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerBorder: size, cardContainer: { paddingHorizontal: 16, paddingVertical: 8 }, listContainer: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
createStyles = createStyles.createStyles;
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles(obj);
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
  const tmp4 = closure_9();
  const obj2 = sharedValue(4810);
  const tmp = sharedValue;
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function n(nativeEvent) {
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
  const tmpResult = tmp(4810);
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
      const tmp17 = closure_8(View, obj3);
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
    const tmp13 = closure_7(closure_13, obj4);
    cResult[5] = tmp6;
    cResult[6] = type;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const obj5 = { style: items1 };
  items1 = [tmp4.headerBorder, animatedStyle];
  const tmp9 = closure_7(ReanimatedRexportDefault.View, obj5);
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.headerBorder;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function ForLaterScreen(type) {
  let items1;
  let items2;
  let sharedValue;
  type = type.type;
  const tmp = closure_9();
  let obj = sharedValue(4810);
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
  const fn = function l() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 14855800666151;
  fn.__initData = __initData2;
  const obj3 = { style: tmp.container, children: items2 };
  const obj2 = sharedValue(4810);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: items1 };
  items1 = [tmp.headerBorder, animatedStyle];
  items2 = [closure_7(ReanimatedRexportDefault.View, obj4), closure_7(closure_13, { type, handleScroll: callback })];
  return closure_8(View, obj3);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterPage(arg0) {
  let closure_1;
  let handleScroll;
  let overdueMessageReminderCount;
  let throttledNow;
  let tmp32;
  let tmp6;
  let tmp7;
  let type;
  let obj = throttledNow(576);
  const cResult = obj.c(31);
  ({ type, handleScroll } = arg0);
  const tmp4 = closure_9();
  const arr = useSavedMessagesForPageDefault(type);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SavedMessagesStore];
    const fn = function _() {
      return overdueMessageReminderCount.getOverdueMessageReminderCount();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = throttledNow(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const tmp5Result = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5Result(tmp5(6865).FOR_LATER_POPOUT).analyticsLocations;
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === arr.length) {
      let tmp11;
      let tmp12;
      if (cResult[4] === type) {
        tmp11 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[6] = obj2;
        tmp12 = obj2;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === stateFromStores) {
        let tmp13;
        let tmp15;
        let tmp22;
        let tmp21;
        let tmp30;
        if (cResult[8] === arr.length) {
          tmp13 = cResult[9];
        }
        useTrackImpressionDefault(tmp11, tmp12, tmp13);
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          let date = new Date();
          cResult[10] = date;
          tmp15 = date;
        } else {
          tmp15 = cResult[10];
        }
        [throttledNow, importDefault] = react.useState(tmp15);
        const _Symbol3 = Symbol;
        const obj5 = react;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              closure_0 = setInterval(() => {
                const date = new Date();
                return closure_1_1(date);
              }, closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          const items1 = [];
          cResult[11] = F;
          cResult[12] = items1;
          tmp22 = items1;
          tmp21 = F;
        } else {
          class F {
            constructor() {
              closure_0 = setInterval(() => {
                const date = new Date();
                return closure_1_1(date);
              }, closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          tmp22 = cResult[12];
        }
        const effect = obj5.useEffect(tmp21, tmp22);
        if (cResult[13] !== throttledNow) {
          class F {
            constructor() {
              closure_0 = setInterval(() => {
                const date = new Date();
                return closure_1_1(date);
              }, closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          cResult[13] = throttledNow;
          cResult[14] = tmp25;
        } else {
          class F {
            constructor() {
              closure_0 = setInterval(() => {
                const date = new Date();
                return closure_1_1(date);
              }, closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
        }
        if (0 === arr.length) {
          class F {
            constructor() {
              closure_0 = setInterval(() => {
                const date = new Date();
                return closure_1_1(date);
              }, closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          if (cResult[17] === analyticsLocations) {
            class F {
              constructor() {
                closure_0 = setInterval(() => {
                  const date = new Date();
                  return closure_1_1(date);
                }, closure_1(closure_1_2[17]).Millis.MINUTE);
                return () => {
                  clearInterval(closure_0);
                };
              }
            }
            tmp30 = tmp32;
          }
          const obj3 = { value: analyticsLocations, children: tmp31 };
          const tmp34 = closure_7(throttledNow(6841).AnalyticsLocationProvider, obj3);
          cResult[17] = analyticsLocations;
          cResult[18] = tmp31;
          cResult[19] = tmp34;
          tmp32 = tmp34;
        } else {
          class F {
            constructor() {
              closure_0 = setInterval(() => {
                const date = new Date();
                return closure_1_1(date);
              }, closure_1(closure_1_2[17]).Millis.MINUTE);
              return () => {
                clearInterval(closure_0);
              };
            }
          }
          const obj4 = { data: arr, renderItem: tmp24, contentContainerStyle: tmp4.cardContainer, keyExtractor, onScroll: handleScroll };
          cResult[20] = handleScroll;
          cResult[21] = tmp24;
          cResult[22] = arr;
          cResult[23] = tmp4.cardContainer;
          cResult[24] = closure_7(throttledNow(8600).FlashList, obj4);
          const tmp29 = closure_7(throttledNow(8600).FlashList, obj4);
        }
        return tmp30;
      }
      const items2 = [arr.length, stateFromStores];
      cResult[7] = stateFromStores;
      cResult[8] = arr.length;
      cResult[9] = items2;
      tmp13 = items2;
    }
  }
  const obj6 = { type: throttledNow(1272).ImpressionTypes.MODAL, name: throttledNow(1272).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: arr.length, overdue_count: stateFromStores } };
  cResult[2] = stateFromStores;
  cResult[3] = arr.length;
  cResult[4] = type;
  cResult[5] = obj6;
  tmp11 = obj6;
}) : (function ForLaterPage(type) {
  let closure_1;
  let obj4;
  let obj6;
  let obj7;
  let overdueMessageReminderCount;
  let tmp15;
  type = type.type;
  let throttledNow;
  importDefault = undefined;
  const handleScroll = type.handleScroll;
  const tmp = closure_9();
  const arr = useSavedMessagesForPageDefault(type);
  let obj = throttledNow(504);
  const items = [SavedMessagesStore];
  const stateFromStores = obj.useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  const tmp6 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp6(AnalyticsLocationDefault.FOR_LATER_POPOUT).analyticsLocations;
  const obj2 = { type: throttledNow(1272).ImpressionTypes.MODAL, name: throttledNow(1272).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: { tab_type: type, total_count: arr.length, overdue_count: stateFromStores } };
  const items1 = [arr.length, stateFromStores];
  const tmp7 = useTrackImpressionDefault;
  tmp7(obj2, {}, items1);
  const useState = react.useState;
  let date = new Date();
  const tmp10 = _slicedToArray(useState(date), 2);
  throttledNow = tmp10[0];
  importDefault = tmp10[1];
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
  if (0 === arr.length) {
    const obj3 = { value: analyticsLocations, children: closure_7(ForLaterIntroDefault, obj4) };
    const AnalyticsLocationProvider = tmp4(6841).AnalyticsLocationProvider;
    obj4 = { type };
    tmp15 = closure_7(AnalyticsLocationProvider, obj3);
  } else {
    const obj5 = { value: analyticsLocations, children: closure_7(View, obj6) };
    obj6 = { style: tmp.listContainer, children: closure_7(throttledNow(8600).FlashList, obj7) };
    const AnalyticsLocationProvider2 = tmp4(6841).AnalyticsLocationProvider;
    obj7 = { data: arr, renderItem: tmp13, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll };
    tmp15 = closure_7(AnalyticsLocationProvider2, obj5);
  }
  return tmp15;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;
