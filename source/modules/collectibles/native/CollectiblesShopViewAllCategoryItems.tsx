// Module ID: 14511
// Function ID: 110775
// Dependencies: [31, 27, 655, 653, 33, 4130, 689, 9774, 5464, 5484, 1557, 13975, 3991, 4542, 675, 6825, 8666, 8769, 14512, 14513, 14490, 1212, 2]

// Module 14511
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_4, StyleSheet: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.rootContainer = obj;
_createForOfIteratorHelperLoose = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.border = _createForOfIteratorHelperLoose;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = { code: "function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = importAllResult.memo((category) => {
  let logoUrl;
  let mobileBgUrl;
  category = category.category;
  const analyticsContext = category.analyticsContext;
  const tmp = callback2();
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[7])(category.styles).backgroundColors;
  const items = [analyticsContext(analyticsLocations[9]).COLLECTIBLES_SHOP_INDEX_PAGE];
  analyticsLocations = analyticsContext(analyticsLocations[8])(items).analyticsLocations;
  let obj = category(analyticsLocations[11]);
  obj = { products: category.products };
  const filteredAndSortedProducts = obj.useFilteredAndSortedProducts(obj);
  let obj2 = category(analyticsLocations[12]);
  const sharedValue = obj2.useSharedValue(0);
  const items1 = [sharedValue];
  const callback = sharedValue.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = sharedValue.set(category(analyticsLocations[13]).withSpring(num));
  }, items1);
  let obj3 = category(analyticsLocations[12]);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2446209469388;
  fn.__initData = closure_11;
  let sessionId;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (null != analyticsContext) {
    sessionId = analyticsContext.sessionId;
  }
  const items2 = [sessionId, analyticsLocations, category.name];
  const effect = sharedValue.useEffect(() => {
    let obj = analyticsContext(analyticsLocations[14]);
    obj = { location_stack: analyticsLocations };
    let sessionId;
    if (null != analyticsContext) {
      sessionId = analyticsContext.sessionId;
    }
    obj.page_session_id = sessionId;
    obj.source = analyticsContext(analyticsLocations[9]).COLLECTIBLES_SHOP;
    obj.page_type = "index";
    obj.category = category.name;
    obj.track(outer1_7.COLLECTIBLES_SHOP_VIEWED, obj);
    obj = {};
    let sessionId1;
    if (null != analyticsContext) {
      sessionId1 = analyticsContext.sessionId;
    }
    obj.sessionId = sessionId1;
    obj.checkpoint = category(analyticsLocations[15]).CollectiblesShopPerfCheckpoint.SHOP_MOUNTED;
    obj.tab = outer1_6.SHOP_ALL;
    obj.unpublishedCategoriesShown = false;
    obj.cacheDisabled = false;
    category(analyticsLocations[15]).trackShopPerf(obj);
  }, items2);
  obj = { value: analyticsLocations };
  const obj1 = {};
  obj2 = {};
  const merged = Object.assign(analyticsContext);
  obj2["pageCategory"] = category.name;
  obj1.newValue = obj2;
  obj3 = { skuIDs: [], activeSubscription: null };
  const obj4 = { style: tmp.rootContainer };
  const items3 = [callback(category(analyticsLocations[18]).CollectiblesProgressiveImage, { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill }), , , ];
  const obj6 = { logoUrl };
  let toHexStringResult;
  const obj5 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  const tmp12 = closure_9;
  const tmp13 = closure_4;
  const tmp2 = analyticsContext(analyticsLocations[8]);
  if (null != backgroundColors) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  obj6.buttonColor = toHexStringResult;
  obj6.categoryName = category.name;
  items3[1] = callback(analyticsContext(analyticsLocations[19]), obj6);
  const items4 = [tmp.border, animatedStyle];
  items3[2] = callback(analyticsContext(analyticsLocations[12]).View, { style: items4 });
  const obj7 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: callback };
  const tmp14 = analyticsContext(analyticsLocations[19]);
  obj7.paddingTop = analyticsContext(analyticsLocations[6]).space.PX_16;
  obj7.paddingBottom = analyticsContext(analyticsLocations[10])().bottom + analyticsContext(analyticsLocations[6]).space.PX_16;
  obj7.muteBundleStaticBackground = true;
  const intl = category(analyticsLocations[21]).intl;
  obj7.accessibilityLabel = intl.formatToPlainString(category(analyticsLocations[21]).t.FNtLb3, { category: category.name });
  items3[3] = callback(analyticsContext(analyticsLocations[20]), obj7);
  obj4.children = items3;
  obj3.children = tmp12(tmp13, obj4);
  obj1.children = callback(category(analyticsLocations[17]).NativePaymentContextProvider, obj3);
  obj.children = callback(category(analyticsLocations[16]).CollectiblesAnalyticsProvider, obj1);
  return callback(category(analyticsLocations[8]).AnalyticsLocationProvider, obj);
});
let result = require("items").fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default memoResult;
