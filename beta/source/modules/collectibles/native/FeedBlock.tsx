// Module ID: 16157
// Function ID: 16158
// Name: FeedBlock
// Dependencies: [19, 17, 4780, 1182, 6868, 1076, 1074, 21, 4788, 576, 504, 4639, 16145, 16158, 15345, 7815, 7459, 7439, 1115, 4784, 5371, 4755, 16159, 1980, 4742, 5218, 16152, 16160, 1364, 9122, 16161, 5836, 16162, 16163, 2]
// Exports: default

// Module 16157 (FeedBlock)
import nativeDefault from "native" /* 576 */;
import ShopHomeSortType from "ShopHomeSortType" /* 16158 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import ConsentStore from "ConsentStore" /* 6868 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1076).CollectiblesMobileShopScreen;
const Consents = fn(1074).Consents;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4788);
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
  let tmp6 = stateFromStores1(16145)();
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
  const filteredAndSortedProducts = feedBlock(15345).useFilteredAndSortedProducts({ products: feedProducts, maxProducts: 36, screen });
  const obj3 = feedBlock(15345);
  const items3 = [AccessibilityStore];
  const stateFromStores2 = feedBlock(504).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const obj4 = feedBlock(504);
  const intl = feedBlock(1115).intl;
  const string = intl.string;
  const t = feedBlock(1115).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  const obj5 = { value: stateFromStores1(7439)(stateFromStores1(7459).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations, children: null };
  const obj6 = { style: feedFooterOrbImage.feedContainer, children: null };
  const obj7 = { style: feedFooterOrbImage.feedHeader, children: null };
  const obj8 = { style: feedFooterOrbImage.feedTitle, children: null };
  const items4 = [closure_11(feedBlock(4784).Heading, { variant: "heading-lg/semibold", children: stringResult }), ];
  if (isPersonalized) {
    const obj9 = {
      onPress() {
          return stateFromStores1(paths[21]).openLazy(feedBlock(paths[23])(paths[22], paths.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14,
      "aria-label": null,
      children: null
    };
    const intl2 = tmp(1115).intl;
    obj9["aria-label"] = intl2.string(tmp(1115).t.hvVgAZ);
    obj9.children = tmp12(tmp(4742).CircleInformationIcon, { size: "xs" });
    isPersonalized = tmp12(tmp(5371).PressableOpacity, obj9);
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
    const intl3 = tmp(1115).intl;
    obj10.text = intl3.string(tmp(1115).t.xFcotU);
    tmp12Result = tmp12(tmp(5218).Button, obj10);
  }
  items5[1] = tmp12Result;
  obj7.children = items5;
  const items6 = [closure_12(closure_5, obj7), closure_11(stateFromStores1(16152), { products: filteredAndSortedProducts, loadingCardsNum: 36, preferVCPrice, accessibilityLabel: stringResult, disableBundleStaticBackground }), ];
  const obj11 = { style: feedFooterOrbImage.feedFooter, children: null };
  const obj12 = { variant: "heading-lg/bold", accessibilityRole: "header", children: null };
  const intl4 = tmp(1115).intl;
  obj12.children = intl4.string(feedBlock(1115).t.Yr70c4);
  const items7 = [closure_11(feedBlock(4784).Text, obj12), , ];
  const obj13 = { onPress: goToShopAll, text: null, variant: "primary", size: "md" };
  const intl5 = tmp(1115).intl;
  obj13.text = intl5.string(feedBlock(1115).t.AfrvRD);
  items7[1] = closure_11(feedBlock(5218).Button, obj13);
  if (screen === constants.ORBS) {
    if (stateFromStores2) {
      const obj14 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      const obj15 = { uri: null };
      tmp5Result = tmp5(16160);
      obj15.uri = tmp5Result;
      obj14.source = obj15;
      feedFooterOrbImage = feedFooterOrbImage.feedFooterOrbImage;
      obj14.style = feedFooterOrbImage;
      let tmp12Result2 = tmp12(closure_4, obj14);
    } else {
      if (tmpResult.isAndroid()) {
        const obj16 = { url: tmp5(16161), autoplay: true, style: feedFooterOrbImage.feedFooterOrbImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        tmp12Result2 = tmp12(tmp5(9122), obj16);
        const tmp5Result3 = tmp5(9122);
      } else {
        const obj17 = { source: null, enableAnimation: true, resizeMode: "contain", style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        const obj18 = { uri: tmp5(16161) };
        obj17.source = obj18;
        obj17.style = feedFooterOrbImage.feedFooterOrbImage;
        tmp12Result2 = tmp12(tmp5(5836), obj17);
        const tmp5Result4 = tmp5(5836);
      }
      tmpResult = tmp(1364);
    }
  } else {
    const obj19 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    if (stateFromStores) {
      obj19.source = tmp(16162);
      obj19.style = feedFooterOrbImage.feedFooterImage;
      let tmp18 = obj19;
    } else {
      obj19.source = tmp(16163);
      obj19.style = feedFooterOrbImage.feedFooterImage;
      tmp18 = obj19;
    }
    items7[2] = tmp12(closure_4, tmp18);
    obj11.children = items7;
    items6[2] = tmp13(tmp14, obj11);
    obj6.children = items6;
    obj5.children = tmp13(tmp14, obj6);
    return tmp12(tmp(7439).AnalyticsLocationProvider, obj5);
  }
};
