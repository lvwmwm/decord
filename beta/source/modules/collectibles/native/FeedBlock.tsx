// Module ID: 16153
// Function ID: 16154
// Name: FeedBlock
// Dependencies: [19, 17, 4782, 1186, 6866, 1080, 1078, 21, 4790, 580, 504, 4642, 16141, 16154, 15341, 7820, 7461, 7441, 1119, 4786, 5373, 4757, 16155, 1984, 4744, 5220, 16147, 16156, 1368, 9120, 16157, 5834, 16158, 16159, 2]
// Exports: default

// Module 16153 (FeedBlock)
import nativeDefault from "native" /* 580 */;
import ShopHomeSortType from "ShopHomeSortType" /* 16154 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import ThemeStore from "ThemeStore" /* 1186 */;
import ConsentStore from "ConsentStore" /* 6866 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1080).CollectiblesMobileShopScreen;
const Consents = fn(1078).Consents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { feedContainer: { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 }, feedHeader: null, feedTitle: null, feedFooter: null, feedFooterImage: null, feedFooterOrbImage: null };
let obj3 = { display: "flex", flexDirection: "column", height: "100%", gap: nativeDefault.space.PX_16 };
obj2.feedHeader = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.feedTitle = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
let obj5 = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj2.feedFooter = { display: "flex", gap: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
obj2.feedFooterImage = { width: "100%", resizeMode: "cover" };
obj2.feedFooterOrbImage = { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(feedBlock) {
  feedBlock = feedBlock.feedBlock;
  const screen = feedBlock.screen;
  dependencyMap = undefined;
  ({ preferVCPrice, disableBundleStaticBackground } = feedBlock);
  let feedFooterOrbImage = closure_13();
  let tmp5Result = dependencyMap;
  let items = [ThemeStore];
  const stateFromStores = feedBlock(504).useStateFromStores(items, () => feedBlock(paths[11]).isThemeDark(theme.theme));
  const obj = feedBlock(504);
  let items1 = [ConsentStore];
  const stateFromStores1 = feedBlock(504).useStateFromStores(items1, () => ConsentStore.hasConsented(constants2.PERSONALIZATION));
  let tmp6 = stateFromStores1(16141)();
  dependencyMap = tmp6;
  const items2 = [feedBlock.sortedSkuIds, tmp6, stateFromStores1];
  const memo = noop.useMemo(() => {
    const sortedSkuIds = feedBlock.sortedSkuIds;
    let items;
    if (sortedSkuIds != null) {
      items = sortedSkuIds[ShopHomeSortType.ShopHomeSortType.RECOMMENDED];
    }
    if (items == null) {
      items = [];
    }
    const sortedSkuIds2 = feedBlock.sortedSkuIds;
    let items1;
    if (sortedSkuIds2 != null) {
      items1 = sortedSkuIds2[ShopHomeSortType.ShopHomeSortType.POPULAR];
    }
    if (items1 == null) {
      items1 = [];
    }
    let tmp6 = stateFromStores1;
    if (stateFromStores1) {
      tmp6 = items.length > 0;
    }
    if (tmp6) {
      items1 = items;
    }
    return { feedProducts: paths(items1), isPersonalized: tmp6 };
  }, items2);
  ({ isPersonalized, feedProducts } = memo);
  let obj2 = feedBlock(504);
  const filteredAndSortedProducts = feedBlock(15341).useFilteredAndSortedProducts({ products: feedProducts, maxProducts: 36, screen });
  const obj3 = feedBlock(15341);
  const items3 = [AccessibilityStore];
  const stateFromStores2 = feedBlock(504).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const obj4 = feedBlock(504);
  const intl = feedBlock(1119).intl;
  const string = intl.string;
  const t = feedBlock(1119).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj5 = { value: stateFromStores1(7441)(stateFromStores1(7461).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations, children: null };
  const obj6 = { style: feedFooterOrbImage.feedContainer, children: null };
  const obj7 = { style: feedFooterOrbImage.feedHeader, children: null };
  const obj8 = { style: feedFooterOrbImage.feedTitle, children: null };
  const items4 = [closure_11(feedBlock(4786).Heading, { variant: "heading-lg/semibold", children: stringResult }), ];
  if (isPersonalized) {
    const obj9 = {
      onPress() {
          return stateFromStores1(paths[21]).openLazy(feedBlock(paths[23])(paths[22], paths.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14,
      "aria-label": null,
      children: null
    };
    const intl2 = tmp(1119).intl;
    obj9["aria-label"] = intl2.string(tmp(1119).t.hvVgAZ);
    obj9.children = tmp12(tmp(4744).CircleInformationIcon, { size: "xs" });
    isPersonalized = tmp12(tmp(5373).PressableOpacity, obj9);
  }
  function goToShopAll() {
    const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
    const items = [stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
    obj2.analyticsLocations = items;
    obj2.analyticsSource = stateFromStores1(paths[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    obj2.screen = constants.SHOP_ALL;
    const result = feedBlock(paths[15]).openCollectiblesShopMobile(obj2);
  }
  items4[1] = isPersonalized;
  obj8.children = items4;
  const items5 = [closure_12(closure_5, obj8), ];
  let tmp12Result = !tmp15;
  if (screen !== constants.ORBS) {
    const obj10 = { onPress: goToShopAll, text: null, variant: "primary", size: "sm" };
    const intl3 = tmp(1119).intl;
    obj10.text = intl3.string(tmp(1119).t.xFcotU);
    tmp12Result = tmp12(tmp(5220).Button, obj10);
  }
  items5[1] = tmp12Result;
  obj7.children = items5;
  const items6 = [closure_12(closure_5, obj7), closure_11(stateFromStores1(16147), { products: filteredAndSortedProducts, loadingCardsNum: 36, preferVCPrice, accessibilityLabel: stringResult, disableBundleStaticBackground }), ];
  const obj11 = { style: feedFooterOrbImage.feedFooter, children: null };
  const obj12 = { variant: "heading-lg/bold", accessibilityRole: "header", children: null };
  const intl4 = tmp(1119).intl;
  obj12.children = intl4.string(feedBlock(1119).t.Yr70c4);
  const items7 = [closure_11(feedBlock(4786).Text, obj12), , ];
  const obj13 = { onPress: goToShopAll, text: null, variant: "primary", size: "md" };
  const intl5 = tmp(1119).intl;
  obj13.text = intl5.string(feedBlock(1119).t.AfrvRD);
  items7[1] = closure_11(feedBlock(5220).Button, obj13);
  if (screen === constants.ORBS) {
    if (stateFromStores2) {
      const obj14 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      const obj15 = { uri: null };
      tmp5Result = tmp5(16156);
      obj15.uri = tmp5Result;
      obj14.source = obj15;
      feedFooterOrbImage = feedFooterOrbImage.feedFooterOrbImage;
      obj14.style = feedFooterOrbImage;
      let tmp12Result2 = tmp12(closure_4, obj14);
    } else {
      if (tmpResult.isAndroid()) {
        const obj16 = { url: tmp5(16157), autoplay: true, style: feedFooterOrbImage.feedFooterOrbImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        tmp12Result2 = tmp12(tmp5(9120), obj16);
        const tmp5Result3 = tmp5(9120);
      } else {
        const obj17 = { source: null, enableAnimation: true, resizeMode: "contain", style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        const obj18 = { uri: tmp5(16157) };
        obj17.source = obj18;
        obj17.style = feedFooterOrbImage.feedFooterOrbImage;
        tmp12Result2 = tmp12(tmp5(5834), obj17);
        const tmp5Result4 = tmp5(5834);
      }
      tmpResult = tmp(1368);
    }
  } else {
    const obj19 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      obj19.source = tmp(16158);
      obj19.style = feedFooterOrbImage.feedFooterImage;
      let tmp18 = obj19;
    } else {
      obj19.source = tmp(16159);
      obj19.style = feedFooterOrbImage.feedFooterImage;
      tmp18 = obj19;
    }
    items7[2] = tmp12(closure_4, tmp18);
    obj11.children = items7;
    items6[2] = tmp13(tmp14, obj11);
    obj6.children = items6;
    obj5.children = tmp13(tmp14, obj6);
    return tmp12(tmp(7441).AnalyticsLocationProvider, obj5);
  }
};
