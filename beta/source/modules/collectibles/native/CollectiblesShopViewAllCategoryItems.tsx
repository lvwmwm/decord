// Module ID: 15462
// Function ID: 15463
// Name: CollectiblesShopViewAllCategoryItems
// Dependencies: [19, 17, 1076, 1074, 21, 4836, 576, 10544, 6583, 6603, 1613, 14604, 4566, 5280, 1241, 7009, 8229, 10282, 15463, 15464, 15443, 1115, 2]

// Module 15462 (CollectiblesShopViewAllCategoryItems)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import spring from "spring" /* 5280 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7009 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let category, set;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let tmp;
const AnalyticsLocationDefault = tmp(6603);
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
let closure_6 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { rootContainer: obj2, border: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
const __initData = { code: "function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = react.memo((category) => {
  let CollectiblesAnalyticsProvider;
  let NativePaymentContextProvider;
  let intl;
  let items3;
  let items4;
  let logoUrl;
  let mobileBgUrl;
  let obj14;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let tmp15;
  let tmp16;
  let toHexStringResult;
  category = category.category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  let tmp = closure_10();
  const tmp2 = analyticsContext;
  const tmp3 = analyticsLocations;
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[7])(category.styles).backgroundColors;
  const tmp4 = analyticsContext(analyticsLocations[8]);
  const items = [analyticsContext(analyticsLocations[9]).COLLECTIBLES_SHOP_INDEX_PAGE];
  analyticsLocations = tmp4(items).analyticsLocations;
  const bottom = analyticsContext(analyticsLocations[10])().bottom;
  let obj = category(analyticsLocations[11]);
  let obj2 = { products: category.products };
  const filteredAndSortedProducts = obj.useFilteredAndSortedProducts(obj2);
  const obj3 = category(analyticsLocations[12]);
  const sharedValue = obj3.useSharedValue(0);
  const items1 = [sharedValue];
  const callback = sharedValue.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = set(withSpring(num));
  }, items1);
  const fn = function _() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2446209469388;
  fn.__initData = __initData;
  let sessionId;
  const obj4 = category(analyticsLocations[12]);
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const useEffect = sharedValue.useEffect;
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items2 = [sessionId, analyticsLocations, category.name];
  const effect = useEffect(() => {
    let sessionId;
    const obj = { location_stack: analyticsLocations, page_session_id: sessionId, source: AnalyticsLocationDefault.COLLECTIBLES_SHOP, page_type: "index", category: category.name };
    sessionId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_SHOP_VIEWED = AnalyticEvents.COLLECTIBLES_SHOP_VIEWED;
    AnalyticsUtilsDefault;
    if (analyticsContext != null) {
      sessionId = tmp4.sessionId;
    }
    track(COLLECTIBLES_SHOP_VIEWED, obj);
    let sessionId1;
    const trackShopPerf = CollectiblesPerfLogging.trackShopPerf;
    CollectiblesPerfLogging;
    if (analyticsContext != null) {
      sessionId1 = tmp4.sessionId;
    }
    const obj2 = { sessionId: sessionId1, checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: constants.SHOP_ALL, unpublishedCategoriesShown: false, cacheDisabled: false };
    trackShopPerf(obj2);
  }, items2);
  const obj5 = { value: analyticsLocations, children: closure_8(CollectiblesAnalyticsProvider, obj6) };
  const AnalyticsLocationProvider = tmp5(tmp3[8]).AnalyticsLocationProvider;
  obj6 = { newValue: obj7, children: closure_8(NativePaymentContextProvider, obj8) };
  obj7 = { pageCategory: category.name };
  CollectiblesAnalyticsProvider = tmp5(tmp3[16]).CollectiblesAnalyticsProvider;
  const merged = Object.assign(analyticsContext);
  obj8 = { skuIDs: [], activeSubscription: null, children: tmp15(tmp16, obj9) };
  obj9 = { style: tmp.rootContainer, children: items3 };
  NativePaymentContextProvider = tmp5(tmp3[17]).NativePaymentContextProvider;
  items3 = [, , , ];
  const obj10 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  items3[0] = closure_8(category(tmp3[18]).CollectiblesProgressiveImage, obj10);
  const obj11 = { logoUrl, buttonColor: toHexStringResult, categoryName: category.name };
  toHexStringResult = undefined;
  tmp15 = closure_9;
  tmp16 = closure_4;
  const tmp2Result = tmp2(tmp3[19]);
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  items3[1] = closure_8(tmp2Result, obj11);
  const obj12 = { style: items4 };
  items4 = [tmp.border, animatedStyle];
  items3[2] = closure_8(tmp2(tmp3[12]).View, obj12);
  const obj13 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: callback, paddingTop: tmp2(tmp3[6]).space.PX_16, paddingBottom: bottom + tmp2(tmp3[6]).space.PX_16, muteBundleStaticBackground: true, accessibilityLabel: intl.formatToPlainString(category(tmp3[21]).t.FNtLb3, obj14) };
  const tmp2Result2 = tmp2(tmp3[20]);
  intl = tmp5(tmp3[21]).intl;
  obj14 = { category: category.name };
  items3[3] = closure_8(tmp2Result2, obj13);
  return closure_8(AnalyticsLocationProvider, obj5);
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default memoResult;
