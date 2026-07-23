// Module ID: 14494
// Function ID: 110698
// Name: feedBlock
// Dependencies: [31, 27, 4122, 1278, 5592, 655, 653, 33, 4130, 689, 566, 3976, 13973, 14495, 13975, 6773, 5484, 5464, 1212, 4126, 4660, 4098, 14496, 1934, 4086, 4543, 14488, 14497, 477, 7876, 14498, 5085, 14499, 14500, 2]
// Exports: default

// Module 14494 (feedBlock)
import preload from "preload";
import get_ActivityIndicator from "metadata";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_9 } from "items";
import { Consents } from "ME";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "column", height: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.feedContainer = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.feedHeader = obj1;
let obj2 = { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.feedTitle = obj2;
let obj3 = { display: "flex", gap: require("_createForOfIteratorHelperLoose").space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.feedFooter = obj3;
_createForOfIteratorHelperLoose.feedFooterImage = { width: "100%", resizeMode: "cover" };
_createForOfIteratorHelperLoose.feedFooterOrbImage = { width: "100%", alignSelf: "center", resizeMode: "contain", height: 130 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(feedBlock) {
  let disableBundleStaticBackground;
  let preferVCPrice;
  feedBlock = feedBlock.feedBlock;
  const screen = feedBlock.screen;
  function goToShopAll() {
    let obj = feedBlock(tmp3[15]);
    obj = {};
    const items = [stateFromStores1(tmp3[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
    obj.analyticsLocations = items;
    obj.analyticsSource = stateFromStores1(tmp3[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    obj.screen = outer1_9.SHOP_ALL;
    const result = obj.openCollectiblesShopMobile(obj);
  }
  ({ preferVCPrice, disableBundleStaticBackground } = feedBlock);
  let str = _createForOfIteratorHelperLoose();
  let obj = feedBlock(566);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => feedBlock(tmp3[11]).isThemeDark(outer1_7.theme));
  let obj1 = feedBlock(566);
  let items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_8.hasConsented(outer1_10.PERSONALIZATION));
  const tmp3 = stateFromStores1(13973)();
  const dependencyMap = tmp3;
  const items2 = [feedBlock.sortedSkuIds, tmp3, stateFromStores1];
  const memo = React.useMemo(() => {
    const sortedSkuIds = feedBlock.sortedSkuIds;
    let items;
    if (null != sortedSkuIds) {
      items = sortedSkuIds[feedBlock(undefined, tmp3[13]).ShopHomeSortType.RECOMMENDED];
    }
    if (null == items) {
      items = [];
    }
    const sortedSkuIds2 = feedBlock.sortedSkuIds;
    let items1;
    if (null != sortedSkuIds2) {
      items1 = sortedSkuIds2[feedBlock(undefined, tmp3[13]).ShopHomeSortType.POPULAR];
    }
    if (null == items1) {
      items1 = [];
    }
    let tmp5 = stateFromStores1;
    if (stateFromStores1) {
      tmp5 = items.length > 0;
    }
    const obj = {};
    if (tmp5) {
      items1 = items;
    }
    obj.feedProducts = tmp3(items1);
    obj.isPersonalized = tmp5;
    return obj;
  }, items2);
  let isPersonalized = memo.isPersonalized;
  let obj2 = feedBlock(13975);
  const filteredAndSortedProducts = obj2.useFilteredAndSortedProducts({ products: memo.feedProducts, maxProducts: 36, screen });
  let obj3 = feedBlock(566);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => outer1_6.useReducedMotion);
  const intl = feedBlock(1212).intl;
  const string = intl.string;
  const t = feedBlock(1212).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  obj = { value: stateFromStores1(5464)(stateFromStores1(5484).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations };
  obj = { style: str.feedContainer };
  obj1 = { style: str.feedHeader };
  obj2 = { style: str.feedTitle };
  obj3 = { variant: "heading-lg/semibold", children: stringResult };
  const items4 = [callback(feedBlock(4126).Heading, obj3), ];
  if (isPersonalized) {
    const obj4 = {
      onPress() {
          return stateFromStores1(tmp3[21]).openLazy(feedBlock(tmp3[23])(tmp3[22], tmp3.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14
    };
    const intl2 = feedBlock(1212).intl;
    obj4["aria-label"] = intl2.string(feedBlock(1212).t.hvVgAZ);
    const obj5 = { size: "xs" };
    obj4.children = callback(feedBlock(4086).CircleInformationIcon, obj5);
    isPersonalized = callback(feedBlock(4660).PressableOpacity, obj4);
  }
  items4[1] = isPersonalized;
  obj2.children = items4;
  const items5 = [closure_12(closure_5, obj2), ];
  let tmp16 = !tmp6;
  if (screen !== constants.ORBS) {
    const obj6 = { onPress: goToShopAll };
    const intl3 = feedBlock(1212).intl;
    obj6.text = intl3.string(feedBlock(1212).t.xFcotU);
    obj6.variant = "primary";
    obj6.size = "sm";
    tmp16 = callback(feedBlock(4543).Button, obj6);
  }
  items5[1] = tmp16;
  obj1.children = items5;
  const items6 = [closure_12(closure_5, obj1), , ];
  const obj7 = { products: filteredAndSortedProducts, loadingCardsNum: 36, preferVCPrice, accessibilityLabel: stringResult, disableBundleStaticBackground };
  items6[1] = callback(stateFromStores1(14488), obj7);
  const obj8 = { style: str.feedFooter };
  const obj9 = { variant: "heading-lg/bold", accessibilityRole: "header" };
  const intl4 = feedBlock(1212).intl;
  obj9.children = intl4.string(feedBlock(1212).t.Yr70c4);
  const items7 = [callback(feedBlock(4126).Text, obj9), , ];
  const obj10 = { onPress: goToShopAll };
  const intl5 = feedBlock(1212).intl;
  obj10.text = intl5.string(feedBlock(1212).t.AfrvRD);
  obj10.variant = "primary";
  obj10.size = "md";
  items7[1] = callback(feedBlock(4543).Button, obj10);
  if (screen === constants.ORBS) {
    if (stateFromStores2) {
      const obj11 = {};
      const obj12 = { uri: stateFromStores1(14497) };
      obj11.source = obj12;
      obj11.style = str.feedFooterOrbImage;
      obj11.accessibilityElementsHidden = true;
      str = "no-hide-descendants";
      obj11.importantForAccessibility = "no-hide-descendants";
      let tmp29Result = callback(closure_4, obj11);
    } else {
      if (obj18.isAndroid()) {
        const obj13 = { url: null, autoplay: true, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        let tmp30Result = tmp30(7876);
        obj13.url = tmp30(14498);
        obj13.style = `no-hide-descendants`.feedFooterOrbImage;
        tmp29Result = tmp29(tmp30Result, obj13);
      } else {
        const obj14 = { source: null, enableAnimation: true, resizeMode: "contain", style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
        const obj15 = {};
        tmp30Result = tmp30(5085);
        obj15.uri = tmp30(14498);
        obj14.source = obj15;
        obj14.style = `no-hide-descendants`.feedFooterOrbImage;
        tmp29Result = tmp29(tmp30Result, obj14);
      }
      obj18 = feedBlock(477);
    }
  } else {
    const obj16 = {};
    if (stateFromStores) {
      obj16.source = tmp24(14499);
      obj16.style = str.feedFooterImage;
      obj16.accessibilityElementsHidden = true;
      obj16.importantForAccessibility = "no-hide-descendants";
      let tmp26 = obj16;
    } else {
      obj16.source = tmp24(14500);
      obj16.style = str.feedFooterImage;
      obj16.accessibilityElementsHidden = true;
      obj16.importantForAccessibility = "no-hide-descendants";
      tmp26 = obj16;
    }
    items7[2] = callback(closure_4, tmp26);
    obj8.children = items7;
    items6[2] = closure_12(closure_5, obj8);
    obj.children = items6;
    obj.children = tmp11(tmp12, obj);
    return callback(feedBlock(5464).AnalyticsLocationProvider, obj);
  }
};
