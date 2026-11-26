// Module ID: 17526
// Function ID: 17527
// Name: FeedBlock
// Dependencies: [19, 17, 5044, 1191, 1073, 1071, 21, 5043, 575, 504, 5050, 11265, 17508, 17489, 11600, 17509, 6310, 11245, 9269, 16593, 6380, 6379, 11214, 1112, 5634, 6152, 5257, 17527, 2120, 5747, 5641, 1256, 17521, 5730, 17528, 17529, 17530, 17531, 2]
// Exports: default

// Module 17526 (FeedBlock)
import react_native from "react-native" /* 17 */;
import get_initializedDefault from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6310 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 11245 */;
import uniqByDefault from "uniqBy" /* 17509 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
let closure_7 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = [];
let closure_12 = [];
let createStyles = createStyles_mod;
let obj = { feedContainer: obj2, feedHeader: obj3, feedTitle: obj4, feedFooter: obj5, feedFooterImage: { width: "100%", resizeMode: "cover" }, feedFooterOrbImage: { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 } };
obj2 = { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj5 = { display: "flex", gap: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(screen) {
  let closure_2;
  let disableBundleStaticBackground;
  let feedBlock;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isPersonalized;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj15;
  let obj5;
  let preferVCPrice;
  let resolvedSkuIds;
  let stringResult;
  let tmp26;
  screen = screen.screen;
  dependencyMap = undefined;
  resolvedSkuIds = undefined;
  let collectiblesShopProducts;
  let memo;
  let loadedGoogleSkuIds;
  let analyticsLocations;
  let closure_9;
  ({ feedBlock, preferVCPrice, disableBundleStaticBackground } = screen);
  let tmp = closure_13();
  let obj = screen(504);
  let items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = screen(closure_2[10]);
    return obj.isThemeDark(memo.theme);
  });
  let obj2 = screen(11265);
  const isInImprovedMobileShopLoading = obj2.useIsInImprovedMobileShopLoading();
  let tmp7 = isInImprovedMobileShopLoading(17508)();
  dependencyMap = tmp7;
  const tmp8 = isInImprovedMobileShopLoading(17489)(feedBlock);
  const shownSkuIds = tmp8.shownSkuIds;
  ({ resolvedSkuIds, isPersonalized } = tmp8);
  if (!isInImprovedMobileShopLoading) {
    resolvedSkuIds = closure_11;
  }
  const tmp2Result = screen(11600);
  collectiblesShopProducts = tmp2Result.useCollectiblesShopProducts(resolvedSkuIds);
  const items1 = [isInImprovedMobileShopLoading, tmp7, shownSkuIds, resolvedSkuIds, collectiblesShopProducts];
  memo = shownSkuIds.useMemo(() => {
    let tmp7Result;
    const tmp = isInImprovedMobileShopLoading;
    if (tmp) {
      const tmp7 = uniqByDefault;
      const mapped = resolvedSkuIds.map((item) => {
        let product;
        if (collectiblesShopProducts[item] != null) {
          product = tmp.product;
        }
        return product;
      });
      tmp7Result = tmp7(mapped.filter((item) => null != item), "storeListingId");
    } else {
      tmp7Result = closure_2(shownSkuIds);
    }
    return tmp7Result;
  }, items1);
  const items2 = [isInImprovedMobileShopLoading, memo];
  const effect = shownSkuIds.useEffect(() => {
    const tmp = isInImprovedMobileShopLoading;
    if (tmp) {
      const Emitter = get_initializedDefault.Emitter;
      Emitter.batched(() => memo.forEach(screen(closure_2[16]).seedCollectiblesProductFromStandaloneLoad));
    }
  }, items2);
  const items3 = [isInImprovedMobileShopLoading, memo];
  const memo1 = shownSkuIds.useMemo(() => {
    let googleSkuIds;
    const tmp = isInImprovedMobileShopLoading;
    if (tmp) {
      const obj = collectibles_CollectiblesUtils;
      googleSkuIds = obj.getGoogleSkuIds(memo);
    } else {
      googleSkuIds = closure_12;
    }
    return googleSkuIds;
  }, items3);
  const tmp6Result = isInImprovedMobileShopLoading(9269);
  loadedGoogleSkuIds = tmp6Result.useLoadedGoogleSkuIds(memo1);
  const items4 = [isInImprovedMobileShopLoading, memo, loadedGoogleSkuIds];
  const memo2 = shownSkuIds.useMemo(() => {
    let found;
    if (isInImprovedMobileShopLoading) {
      found = arr.filter((item) => {
        const items = [item];
        const obj = screen(closure_2[17]);
        const googleSkuIds = obj.getGoogleSkuIds(items);
        return googleSkuIds.every((item) => set.has(item));
      });
    } else {
      found = arr;
    }
    return found;
  }, items4);
  const tmp2Result4 = screen(16593);
  const obj3 = { products: memo2, maxProducts: screen(17489).MAX_FEED_PRODUCTS, screen };
  const filteredAndSortedProducts = tmp2Result4.useFilteredAndSortedProducts(obj3);
  const ORBS = loadedGoogleSkuIds.ORBS;
  const items5 = [collectiblesShopProducts];
  const tmp2Result5 = screen(504);
  const stateFromStores1 = tmp2Result5.useStateFromStores(items5, () => collectiblesShopProducts.useReducedMotion);
  const tmp6Result4 = isInImprovedMobileShopLoading(6379);
  analyticsLocations = tmp6Result4(tmp6(6380).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations;
  const tmp2Result6 = screen(11214);
  closure_9 = tmp2Result6.useCollectiblesAnalyticsContext();
  const intl = tmp2(1112).intl;
  const string = intl.string;
  const t = tmp2(1112).t;
  if (isPersonalized) {
    stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj4 = { value: analyticsLocations, children: closure_10(resolvedSkuIds, obj5) };
  obj5 = { style: tmp.feedContainer, children: items8 };
  const obj6 = { style: tmp.feedHeader, children: items7 };
  const obj7 = { style: tmp.feedTitle, children: items6 };
  const AnalyticsLocationProvider = tmp2(6379).AnalyticsLocationProvider;
  items6 = [closure_9(tmp2(5634).Heading, { variant: "heading-lg/semibold", children: stringResult }), ];
  if (isPersonalized) {
    const obj8 = {
      onPress() {
          const obj = isInImprovedMobileShopLoading(closure_2[26]);
          return obj.openLazy(screen(closure_2[28])(closure_2[27], closure_2.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14,
      "aria-label": intl2.string(screen(1112).t.hvVgAZ),
      children: closure_9(screen(5747).CircleInformationIcon, { size: "xs" })
    };
    const PressableOpacity = tmp2(6152).PressableOpacity;
    intl2 = tmp2(1112).intl;
    isPersonalized = tmp19(PressableOpacity, obj8);
  }
  items6[1] = isPersonalized;
  items7 = [closure_10(resolvedSkuIds, obj7), ];
  let tmp19Result = !tmp22;
  if (tmp19Result) {
    const obj9 = {
      onPress: function handleHeaderShopAllPress() {
          let items;
          let pageCategory;
          let pageSection;
          let sessionId;
          const track = AnalyticsUtilsDefault.track;
          const COLLECTIBLES_SHOP_ELEMENT_CLICKED = AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
          AnalyticsUtilsDefault;
          if (closure_9 != null) {
            sessionId = tmp4.sessionId;
          }
          const obj = { collectibles_shop_session_id: sessionId, page_type: screen, page_section: pageSection, page_category: pageCategory, location_stack: analyticsLocations, cta_name: "feed header shop all" };
          pageSection = undefined;
          if (closure_9 != null) {
            pageSection = tmp4.pageSection;
          }
          pageCategory = undefined;
          if (closure_9 != null) {
            pageCategory = tmp4.pageCategory;
          }
          track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
          const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON, screen: loadedGoogleSkuIds.SHOP_ALL };
          const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
          items = [];
          CollectiblesActionCreators;
          items[0] = AnalyticsLocationDefault.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
          const result = openCollectiblesShopMobile(obj2);
        },
      text: intl3.string(screen(1112).t.xFcotU),
      variant: "primary",
      size: "sm"
    };
    const Button = tmp2(5641).Button;
    intl3 = tmp2(1112).intl;
    tmp19Result = tmp19(Button, obj9);
  }
  items7[1] = tmp19Result;
  items8 = [closure_10(resolvedSkuIds, obj6), , ];
  const obj10 = { products: filteredAndSortedProducts, loadingCardsNum: screen(17489).MAX_FEED_PRODUCTS, preferVCPrice, accessibilityLabel: stringResult, disableBundleStaticBackground };
  const tmp6Result5 = isInImprovedMobileShopLoading(17521);
  items8[1] = closure_9(tmp6Result5, obj10);
  const obj11 = { style: tmp.feedFooter, children: items9 };
  const obj12 = { variant: "heading-lg/semibold", accessibilityRole: "header", children: intl4.string(screen(1112).t.Yr70c4) };
  const Text = tmp2(5634).Text;
  intl4 = tmp2(1112).intl;
  items9 = [closure_9(Text, obj12), , ];
  const obj13 = {
    onPress: function handleFooterShopAllPress() {
      let items;
      let pageCategory;
      let pageSection;
      let sessionId;
      const track = AnalyticsUtilsDefault.track;
      const COLLECTIBLES_SHOP_ELEMENT_CLICKED = AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
      AnalyticsUtilsDefault;
      if (closure_9 != null) {
        sessionId = tmp4.sessionId;
      }
      const obj = { collectibles_shop_session_id: sessionId, page_type: screen, page_section: pageSection, page_category: pageCategory, location_stack: analyticsLocations, cta_name: "feed footer shop all" };
      pageSection = undefined;
      if (closure_9 != null) {
        pageSection = tmp4.pageSection;
      }
      pageCategory = undefined;
      if (closure_9 != null) {
        pageCategory = tmp4.pageCategory;
      }
      track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON, screen: loadedGoogleSkuIds.SHOP_ALL };
      const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
      items = [];
      CollectiblesActionCreators;
      items[0] = AnalyticsLocationDefault.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
      const result = openCollectiblesShopMobile(obj2);
    },
    text: intl5.string(screen(1112).t.AfrvRD),
    variant: "primary",
    size: "md"
  };
  const Button2 = tmp2(5641).Button;
  intl5 = tmp2(1112).intl;
  items9[1] = closure_9(Button2, obj13);
  const tmp6Result6 = isInImprovedMobileShopLoading(5730);
  if (screen === ORBS) {
    const obj14 = { source: obj15, enableAnimation: !stateFromStores1, resizeMode: "contain", style: tmp.feedFooterOrbImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    tmp26 = obj14;
    obj15 = { uri: isInImprovedMobileShopLoading(stateFromStores1 ? 17528 : 17529) };
  } else {
    const obj16 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      obj16.source = screen(17530);
      obj16.style = tmp.feedFooterImage;
      tmp26 = obj16;
    } else {
      obj16.source = screen(17531);
      obj16.style = tmp.feedFooterImage;
      tmp26 = obj16;
    }
  }
  items9[2] = closure_9(tmp6Result6, tmp26);
  items8[2] = closure_10(resolvedSkuIds, obj11);
  return closure_9(AnalyticsLocationProvider, obj4);
};
