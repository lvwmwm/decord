// Module ID: 18027
// Function ID: 18028
// Name: CollectiblesShopViewAllCategoryItems
// Dependencies: [19, 17, 1074, 1072, 21, 5141, 575, 14628, 7446, 7471, 1627, 17134, 1652, 5757, 5758, 1252, 7887, 9590, 10819, 18028, 18029, 18009, 1113, 2]

// Module 18027 (CollectiblesShopViewAllCategoryItems)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import spring_spring from "spring/spring" /* 5757 */;
import CollectiblesPerfLogging from "CollectiblesPerfLogging" /* 7887 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let set;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let tmp;
let tmp2;
const springPresets = tmp2(5758);
const AnalyticsLocationDefault = tmp(7471);
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
let closure_11 = { code: "(function CollectiblesShopViewAllCategoryItemsTsx1(){let[borderOpacity]=this.__closure;return{opacity:borderOpacity.get()};})" };
const memoResult = react.memo(function CollectiblesShopViewAllCategoryItems(category) {
  let CollectiblesAnalyticsProvider;
  let NativePaymentContextProvider;
  let intl;
  let items5;
  let items6;
  let logoUrl;
  let mobileBgUrl;
  let obj14;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp17;
  let tmp18;
  let toHexStringResult;
  category = category.category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  let tmp = closure_10();
  let tmp2 = analyticsContext;
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
  const tmp8 = sharedValue;
  const items1 = [sharedValue];
  const callback = sharedValue.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.Reanimated3DefaultSpringConfig));
  }, items1);
  const items2 = [closure_11, sharedValue];
  let c0;
  [tmp10, tmp11] = items2;
  const obj4 = category(analyticsLocations[12]);
  class CollectiblesShopViewAllCategoryItemsTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp11];
  CollectiblesShopViewAllCategoryItemsTsx1.__closure = items3;
  CollectiblesShopViewAllCategoryItemsTsx1.__workletHash = 3426078799765;
  CollectiblesShopViewAllCategoryItemsTsx1.__initData = tmp10;
  let sessionId;
  const animatedStyle = obj4.useAnimatedStyle(CollectiblesShopViewAllCategoryItemsTsx1);
  const useEffect = tmp8.useEffect;
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items4 = [sessionId, analyticsLocations, category.name];
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
  }, items4);
  const obj5 = { value: analyticsLocations, children: closure_8(CollectiblesAnalyticsProvider, obj6) };
  const AnalyticsLocationProvider = tmp5(tmp3[8]).AnalyticsLocationProvider;
  obj6 = { newValue: obj7, children: closure_8(NativePaymentContextProvider, obj8) };
  obj7 = { pageCategory: category.name };
  CollectiblesAnalyticsProvider = tmp5(tmp3[17]).CollectiblesAnalyticsProvider;
  const merged = Object.assign(analyticsContext);
  obj8 = { skuIDs: [], activeSubscription: null, children: tmp17(tmp18, obj9) };
  obj9 = { style: tmp.rootContainer, children: items5 };
  NativePaymentContextProvider = tmp5(tmp3[18]).NativePaymentContextProvider;
  items5 = [, , , ];
  const obj10 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  items5[0] = closure_8(category(tmp3[19]).CollectiblesProgressiveImage, obj10);
  const obj11 = { logoUrl, buttonColor: toHexStringResult, categoryName: category.name };
  toHexStringResult = undefined;
  tmp17 = closure_9;
  tmp18 = closure_4;
  const tmp2Result = tmp2(tmp3[20]);
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  items5[1] = closure_8(tmp2Result, obj11);
  const obj12 = { style: items6 };
  items6 = [tmp.border, animatedStyle];
  items5[2] = closure_8(tmp2(tmp3[12]).View, obj12);
  const obj13 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: callback, paddingTop: tmp2(tmp3[6]).space.PX_16, paddingBottom: bottom + tmp2(tmp3[6]).space.PX_16, muteBundleStaticBackground: true, accessibilityLabel: intl.formatToPlainString(category(tmp3[22]).t.FNtLb3, obj14) };
  const tmp2Result2 = tmp2(tmp3[21]);
  intl = tmp5(tmp3[22]).intl;
  obj14 = { category: category.name };
  items5[3] = closure_8(tmp2Result2, obj13);
  return closure_8(AnalyticsLocationProvider, obj5);
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default memoResult;
