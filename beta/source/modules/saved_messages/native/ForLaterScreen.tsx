// Module ID: 12859
// Function ID: 12860
// Name: ForLaterScreen
// Dependencies: [32, 19, 17, 11155, 21, 4836, 576, 4566, 5280, 12860, 7285, 7275, 504, 6583, 6603, 8230, 1249, 1091, 12862, 12868, 8179, 12872, 2]

// Module 12859 (ForLaterScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8230 */;
import useSavedMessagesForPageDefault from "useSavedMessagesForPage" /* 12860 */;
import ForLaterMessageCardDefault from "ForLaterMessageCard" /* 12862 */;
import ForLaterIntroDefault from "ForLaterIntro" /* 12868 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11155 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let importDefault, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let size;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
function ForLaterPage(type) {
  let closure_1;
  let items2;
  let obj4;
  let obj6;
  let obj9;
  let overdueMessageReminderCount;
  let throttledNow;
  let tmp22Result;
  type = type.type;
  throttledNow = undefined;
  importDefault = undefined;
  const handleScroll = type.handleScroll;
  const tmp = closure_10();
  const arr = useSavedMessagesForPageDefault(type);
  const tmp5 = type === throttledNow(7285).SavedMessageSortTypes.REMINDER;
  let obj = throttledNow(7275);
  const forLaterLimit = obj.useForLaterLimit(ForLaterScreen, tmp5);
  const obj2 = throttledNow(7275);
  const isForLaterLimitUpgradable = obj2.useIsForLaterLimitUpgradable(ForLaterScreen);
  const items = [SavedMessagesStore];
  const tmp4Result = throttledNow(504);
  const stateFromStores = tmp4Result.useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  const tmp2Result = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2Result(tmp2(6603).FOR_LATER_POPOUT).analyticsLocations;
  const obj3 = { type: throttledNow(1249).ImpressionTypes.MODAL, name: throttledNow(1249).ImpressionNames.FOR_LATER_LIST_VIEWED, properties: obj4 };
  const items1 = [arr.length, stateFromStores, tmp9, tmp8];
  obj4 = { tab_type: type, total_count: arr.length, overdue_count: stateFromStores, nitro_upsell_bar_shown: isForLaterLimitUpgradable && arr.length > 0 && !(isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit), nitro_roadblock_upsell_bar_shown: isForLaterLimitUpgradable && arr.length > 0 && (isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit) };
  const tmp2Result2 = useTrackImpressionDefault;
  tmp2Result2(obj3, {}, items1);
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
  if (0 === arr.length) {
    const obj5 = { value: analyticsLocations, children: closure_7(ForLaterIntroDefault, obj6) };
    const AnalyticsLocationProvider = tmp4(6583).AnalyticsLocationProvider;
    obj6 = { type };
    tmp22Result = closure_7(AnalyticsLocationProvider, obj5);
  } else {
    const obj7 = { value: analyticsLocations, children: items2 };
    const obj8 = { style: tmp.listContainer, children: closure_7(throttledNow(8179).FlashList, obj9) };
    const AnalyticsLocationProvider2 = tmp4(6583).AnalyticsLocationProvider;
    obj9 = { data: arr, renderItem: tmp18, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll };
    items2 = [closure_7(View, obj8), ];
    let tmp23Result = null;
    const tmp22 = closure_8;
    const tmp23 = closure_7;
    if (isForLaterLimitUpgradable && arr.length > 0) {
      const obj10 = { isReminder: tmp5, isAtLimit: isForLaterLimitUpgradable && forLaterLimit > 0 && arr.length >= forLaterLimit };
      tmp23Result = tmp23(tmp2(12872), obj10);
    }
    items2[1] = tmp23Result;
    tmp22Result = tmp22(AnalyticsLocationProvider2, obj7);
  }
  return tmp22Result;
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ForLaterScreen = "ForLaterScreen";
let createStyles = createStyles_mod;
let obj = { container: obj2, headerBorder: size, cardContainer: { paddingHorizontal: 16, paddingVertical: 8 }, listContainer: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
createStyles = createStyles.createStyles;
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
const __initData = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = react.memo((type) => {
  let items1;
  let items2;
  let sharedValue;
  type = type.type;
  const tmp = closure_10();
  let obj = sharedValue(4566);
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
  const fn = function s() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 16693192032676;
  fn.__initData = __initData;
  const obj3 = { style: tmp.container, children: items2 };
  const obj2 = sharedValue(4566);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: items1 };
  items1 = [tmp.headerBorder, animatedStyle];
  items2 = [closure_7(ReanimatedRexportDefault.View, obj4), closure_7(ForLaterPage, { type, handleScroll: callback })];
  return closure_8(View, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;
