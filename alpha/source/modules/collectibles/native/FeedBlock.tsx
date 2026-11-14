// Module ID: 18518
// Function ID: 18519
// Name: FeedBlock
// Dependencies: [19, 17, 5307, 1192, 1074, 21, 5306, 575, 504, 5313, 10446, 18500, 18479, 10457, 18501, 8484, 10433, 9723, 17612, 7937, 7918, 1113, 5929, 7428, 5552, 18519, 2121, 6037, 5936, 18513, 6020, 18520, 18521, 18522, 18523, 2]
// Exports: default

// Module 18518 (FeedBlock)
import react_native from "react-native" /* 17 */;
import get_initializedDefault from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 10433 */;
import uniqByDefault from "uniqBy" /* 18501 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = [];
let closure_11 = [];
let createStyles = createStyles_mod;
let obj = { feedContainer: obj2, feedHeader: obj3, feedTitle: obj4, feedFooter: obj5, feedFooterImage: { width: "100%", resizeMode: "cover" }, feedFooterOrbImage: { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 } };
obj2 = { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj5 = { display: "flex", gap: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(screen) {
  let closure_1;
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
  let isInImprovedMobileShopLoading;
  importDefault = undefined;
  let shownSkuIds;
  resolvedSkuIds = undefined;
  let collectiblesShopProducts;
  let memo;
  let loadedGoogleSkuIds;
  ({ feedBlock, preferVCPrice, disableBundleStaticBackground } = screen);
  let tmp = closure_12();
  let obj = isInImprovedMobileShopLoading(shownSkuIds[8]);
  let items = [loadedGoogleSkuIds];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = isInImprovedMobileShopLoading(shownSkuIds[9]);
    return obj.isThemeDark(loadedGoogleSkuIds.theme);
  });
  const obj2 = isInImprovedMobileShopLoading(shownSkuIds[10]);
  isInImprovedMobileShopLoading = obj2.useIsInImprovedMobileShopLoading();
  let tmp7 = require("useGetProductsFromSkus")();
  importDefault = tmp7;
  const tmp8 = require("useFeedBlockSkuIds")(feedBlock);
  shownSkuIds = tmp8.shownSkuIds;
  ({ resolvedSkuIds, isPersonalized } = tmp8);
  if (!isInImprovedMobileShopLoading) {
    resolvedSkuIds = closure_10;
  }
  const tmp2Result = isInImprovedMobileShopLoading(shownSkuIds[13]);
  collectiblesShopProducts = tmp2Result.useCollectiblesShopProducts(resolvedSkuIds);
  const items1 = [isInImprovedMobileShopLoading, tmp7, shownSkuIds, resolvedSkuIds, collectiblesShopProducts];
  memo = resolvedSkuIds.useMemo(() => {
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
      tmp7Result = closure_1(shownSkuIds);
    }
    return tmp7Result;
  }, items1);
  const items2 = [isInImprovedMobileShopLoading, memo];
  const effect = resolvedSkuIds.useEffect(() => {
    const tmp = isInImprovedMobileShopLoading;
    if (tmp) {
      const Emitter = get_initializedDefault.Emitter;
      Emitter.batched(() => memo.forEach(isInImprovedMobileShopLoading(shownSkuIds[15]).seedCollectiblesProductFromStandaloneLoad));
    }
  }, items2);
  const items3 = [isInImprovedMobileShopLoading, memo];
  const memo1 = resolvedSkuIds.useMemo(() => {
    let googleSkuIds;
    const tmp = isInImprovedMobileShopLoading;
    if (tmp) {
      const obj = collectibles_CollectiblesUtils;
      googleSkuIds = obj.getGoogleSkuIds(memo);
    } else {
      googleSkuIds = closure_11;
    }
    return googleSkuIds;
  }, items3);
  const tmp6Result = require("NativePaymentHooks");
  loadedGoogleSkuIds = tmp6Result.useLoadedGoogleSkuIds(memo1);
  const items4 = [isInImprovedMobileShopLoading, memo, loadedGoogleSkuIds];
  const memo2 = resolvedSkuIds.useMemo(() => {
    let found;
    if (isInImprovedMobileShopLoading) {
      found = arr.filter((item) => {
        const items = [item];
        const obj = isInImprovedMobileShopLoading(shownSkuIds[16]);
        const googleSkuIds = obj.getGoogleSkuIds(items);
        return googleSkuIds.every((item) => set.has(item));
      });
    } else {
      found = arr;
    }
    return found;
  }, items4);
  const tmp2Result3 = isInImprovedMobileShopLoading(shownSkuIds[18]);
  const obj3 = { products: memo2, maxProducts: isInImprovedMobileShopLoading(shownSkuIds[12]).MAX_FEED_PRODUCTS, screen };
  const filteredAndSortedProducts = tmp2Result3.useFilteredAndSortedProducts(obj3);
  const ORBS = constants.ORBS;
  const items5 = [memo];
  const tmp2Result4 = isInImprovedMobileShopLoading(shownSkuIds[8]);
  const stateFromStores1 = tmp2Result4.useStateFromStores(items5, () => memo.useReducedMotion);
  const tmp6Result4 = require("useAnalyticsLocations");
  const analyticsLocations = tmp6Result4(tmp6(tmp3[19]).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations;
  const intl = tmp2(tmp3[21]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[21]).t;
  if (isPersonalized) {
    stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj4 = { value: analyticsLocations, children: closure_9(collectiblesShopProducts, obj5) };
  obj5 = { style: tmp.feedContainer, children: items8 };
  const obj6 = { style: tmp.feedHeader, children: items7 };
  const obj7 = { style: tmp.feedTitle, children: items6 };
  const AnalyticsLocationProvider = tmp2(tmp3[20]).AnalyticsLocationProvider;
  items6 = [closure_8(tmp2(tmp3[22]).Heading, { variant: "heading-lg/semibold", children: stringResult }), ];
  if (isPersonalized) {
    const obj8 = {
      onPress() {
          const obj = closure_1(shownSkuIds[24]);
          return obj.openLazy(isInImprovedMobileShopLoading(shownSkuIds[26])(shownSkuIds[25], shownSkuIds.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14,
      "aria-label": intl2.string(isInImprovedMobileShopLoading(shownSkuIds[21]).t.hvVgAZ),
      children: closure_8(isInImprovedMobileShopLoading(shownSkuIds[27]).CircleInformationIcon, { size: "xs" })
    };
    const PressableOpacity = tmp2(tmp3[23]).PressableOpacity;
    intl2 = tmp2(tmp3[21]).intl;
    isPersonalized = tmp19(PressableOpacity, obj8);
  }
  function goToShopAll() {
    let items;
    const obj = { analyticsLocations: items, analyticsSource: closure_1(shownSkuIds[19]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON, screen: constants.SHOP_ALL };
    const openCollectiblesShopMobile = isInImprovedMobileShopLoading(shownSkuIds[15]).openCollectiblesShopMobile;
    items = [];
    isInImprovedMobileShopLoading(shownSkuIds[15]);
    items[0] = closure_1(shownSkuIds[19]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    const result = openCollectiblesShopMobile(obj);
  }
  items6[1] = isPersonalized;
  items7 = [closure_9(collectiblesShopProducts, obj7), ];
  let tmp19Result = !tmp22;
  if (tmp19Result) {
    const obj9 = { onPress: goToShopAll, text: intl3.string(isInImprovedMobileShopLoading(shownSkuIds[21]).t.xFcotU), variant: "primary", size: "sm" };
    const Button = tmp2(tmp3[28]).Button;
    intl3 = tmp2(tmp3[21]).intl;
    tmp19Result = tmp19(Button, obj9);
  }
  items7[1] = tmp19Result;
  items8 = [closure_9(collectiblesShopProducts, obj6), , ];
  const obj10 = { products: filteredAndSortedProducts, loadingCardsNum: isInImprovedMobileShopLoading(shownSkuIds[12]).MAX_FEED_PRODUCTS, preferVCPrice, accessibilityLabel: stringResult, disableBundleStaticBackground };
  const tmp6Result5 = require("FeedProductList");
  items8[1] = closure_8(tmp6Result5, obj10);
  const obj11 = { style: tmp.feedFooter, children: items9 };
  const obj12 = { variant: "heading-lg/semibold", accessibilityRole: "header", children: intl4.string(isInImprovedMobileShopLoading(shownSkuIds[21]).t.Yr70c4) };
  const Text = tmp2(tmp3[22]).Text;
  intl4 = tmp2(tmp3[21]).intl;
  items9 = [closure_8(Text, obj12), , ];
  const obj13 = { onPress: goToShopAll, text: intl5.string(isInImprovedMobileShopLoading(shownSkuIds[21]).t.AfrvRD), variant: "primary", size: "md" };
  const Button2 = tmp2(tmp3[28]).Button;
  intl5 = tmp2(tmp3[21]).intl;
  items9[1] = closure_8(Button2, obj13);
  const tmp6Result6 = require("FastImage");
  if (screen === ORBS) {
    const obj14 = { source: obj15, enableAnimation: !stateFromStores1, resizeMode: "contain", style: tmp.feedFooterOrbImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    tmp26 = obj14;
    obj15 = { uri: importDefault(stateFromStores1 ? shownSkuIds[31] : shownSkuIds[32]) };
  } else {
    const obj16 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      obj16.source = isInImprovedMobileShopLoading(shownSkuIds[33]);
      obj16.style = tmp.feedFooterImage;
      tmp26 = obj16;
    } else {
      obj16.source = isInImprovedMobileShopLoading(shownSkuIds[34]);
      obj16.style = tmp.feedFooterImage;
      tmp26 = obj16;
    }
  }
  items9[2] = closure_8(tmp6Result6, tmp26);
  items8[2] = closure_9(collectiblesShopProducts, obj11);
  return closure_8(AnalyticsLocationProvider, obj4);
};
