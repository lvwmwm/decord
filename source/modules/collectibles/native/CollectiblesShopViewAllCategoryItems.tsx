// Module ID: 14389
// Function ID: 108579
// Dependencies: []

// Module 14389
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).CollectiblesMobileShopScreen;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.rootContainer = obj;
obj1 = { height: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.border = obj1;
let closure_10 = obj1.createStyles(obj);
let closure_11 = { code: "function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const tmp3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((category) => {
  let logoUrl;
  let mobileBgUrl;
  category = category.category;
  const arg1 = category;
  const analyticsContext = category.analyticsContext;
  const importDefault = analyticsContext;
  const tmp = callback2();
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = importDefault(dependencyMap[7])(category.styles).backgroundColors;
  const items = [importDefault(dependencyMap[9]).COLLECTIBLES_SHOP_INDEX_PAGE];
  const analyticsLocations = importDefault(dependencyMap[8])(items).analyticsLocations;
  const dependencyMap = analyticsLocations;
  let obj = arg1(dependencyMap[11]);
  obj = { products: category.products };
  const filteredAndSortedProducts = obj.useFilteredAndSortedProducts(obj);
  let obj2 = arg1(dependencyMap[12]);
  const sharedValue = obj2.useSharedValue(0);
  const items1 = [sharedValue];
  const callback = importAllResult.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = sharedValue.set(category(analyticsLocations[13]).withSpring(num));
  }, items1);
  let obj3 = arg1(dependencyMap[12]);
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
  const effect = importAllResult.useEffect(() => {
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
    obj.track(constants2.COLLECTIBLES_SHOP_VIEWED, obj);
    obj = {};
    let sessionId1;
    if (null != analyticsContext) {
      sessionId1 = analyticsContext.sessionId;
    }
    obj.sessionId = sessionId1;
    obj.checkpoint = category(analyticsLocations[15]).CollectiblesShopPerfCheckpoint.SHOP_MOUNTED;
    obj.tab = constants.SHOP_ALL;
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
  const items3 = [callback(arg1(dependencyMap[18]).CollectiblesProgressiveImage, { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill }), , , ];
  const obj6 = { logoUrl };
  let toHexStringResult;
  const obj5 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  const tmp12 = closure_9;
  const tmp13 = closure_4;
  const tmp2 = importDefault(dependencyMap[8]);
  if (null != backgroundColors) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  obj6.buttonColor = toHexStringResult;
  obj6.categoryName = category.name;
  items3[1] = callback(importDefault(dependencyMap[19]), obj6);
  const items4 = [tmp.border, animatedStyle];
  items3[2] = callback(importDefault(dependencyMap[12]).View, { style: items4 });
  const obj7 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: callback };
  const tmp14 = importDefault(dependencyMap[19]);
  obj7.paddingTop = importDefault(dependencyMap[6]).space.PX_16;
  obj7.paddingBottom = importDefault(dependencyMap[10])().bottom + importDefault(dependencyMap[6]).space.PX_16;
  obj7.muteBundleStaticBackground = true;
  const intl = arg1(dependencyMap[21]).intl;
  obj7.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[21]).t.FNtLb3, { category: category.name });
  items3[3] = callback(importDefault(dependencyMap[20]), obj7);
  obj4.children = items3;
  obj3.children = tmp12(tmp13, obj4);
  obj1.children = callback(arg1(dependencyMap[17]).NativePaymentContextProvider, obj3);
  obj.children = callback(arg1(dependencyMap[16]).CollectiblesAnalyticsProvider, obj1);
  return callback(arg1(dependencyMap[8]).AnalyticsLocationProvider, obj);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default memoResult;
