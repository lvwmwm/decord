// Module ID: 14552
// Function ID: 111045
// Name: ListEdgeSpacer
// Dependencies: [31, 27, 6774, 655, 653, 33, 4130, 689, 1456, 8707, 14533, 5462, 5482, 566, 14023, 14025, 6773, 8704, 4126, 4543, 1212, 5449, 7527, 2]
// Exports: default

// Module 14552 (ListEdgeSpacer)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_7 } from "items";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
function ListEdgeSpacer() {
  return callback(closure_5, { style: _createForOfIteratorHelperLoose().listEdgeSpacer });
}
function ListItemSeparator() {
  return callback(closure_5, { style: _createForOfIteratorHelperLoose().listItemSeparator });
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerWithBackground = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24, overflow: "hidden" };
_createForOfIteratorHelperLoose.backgroundImage = { position: "absolute", top: 0, left: 0, bottom: 0, minWidth: "100%", aspectRatio: 2.5, resizeMode: "cover" };
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, zIndex: 1 };
_createForOfIteratorHelperLoose.header = obj2;
_createForOfIteratorHelperLoose.headingWrapper = { flexShrink: 1 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24, overflow: "hidden" };
_createForOfIteratorHelperLoose.listEdgeSpacer = { width: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { width: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.listItemSeparator = { width: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { width: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = block(navigation[8]);
  navigation = obj.useNavigation();
  let obj1 = block(navigation[9]);
  const collectiblesAnalyticsContext = obj1.useCollectiblesAnalyticsContext();
  let obj2 = block(navigation[10]);
  let obj3 = block(navigation[13]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = outer1_6.getCategory(block.categorySkuId);
    }
    return category;
  });
  const tmp6 = preferVCPrice(navigation[14])();
  let closure_5 = tmp6;
  const items1 = [block.rankedSkuIds, tmp6];
  const memo = collectiblesAnalyticsContext.useMemo(() => tmp6(block.rankedSkuIds), items1);
  let obj4 = block(navigation[15]);
  const filteredAndSortedProducts = obj4.useFilteredAndSortedProducts({ products: memo });
  const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext];
  const items3 = [block.name, preferVCPrice];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        let obj = {};
        const items = [preferVCPrice(navigation[12]).COLLECTIBLES_SHOP];
        obj.analyticsLocations = items;
        obj.analyticsSource = preferVCPrice(navigation[12]).COLLECTIBLES_SHOP;
        obj.screen = outer1_7.ORBS;
        const result = block(navigation[16]).openCollectiblesShopMobile(obj);
        const obj2 = block(navigation[16]);
      } else {
        obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(outer1_8.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
      }
    }
  }, items2);
  const callback1 = collectiblesAnalyticsContext.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    obj = { newValue: obj };
    obj = { tilePosition: index, pageSection: block.name };
    obj = { product: item, preferVCPrice };
    obj.children = outer1_9(preferVCPrice(navigation[17]), obj);
    return outer1_9(block(navigation[9]).CollectiblesAnalyticsProvider, obj);
  }, items3);
  if (0 === filteredAndSortedProducts.length) {
    return null;
  } else {
    const items4 = [tmp.container, ];
    let containerWithBackground = tmp42;
    if (null != block.mobileBackgroundImage) {
      containerWithBackground = tmp.containerWithBackground;
    }
    items4[1] = containerWithBackground;
    obj = { value: tmp4(preferVCPrice(navigation[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations };
    obj = { style: items4 };
    let tmp16 = tmp42;
    if (null != block.mobileBackgroundImage) {
      tmp16 = null != block.mobileBackgroundImage;
    }
    if (tmp16) {
      obj1 = { style: tmp.backgroundImage };
      obj2 = { uri: block.mobileBackgroundImage };
      obj1.source = obj2;
      tmp16 = callback(stateFromStores, obj1);
    }
    const items5 = [tmp16, , ];
    obj3 = { style: tmp.header };
    obj4 = { style: tmp.headingWrapper };
    const obj5 = { variant: "text-md/semibold" };
    let tmp26;
    if (null != block.mobileBackgroundImage) {
      const obj6 = {};
      const titleColor = block.titleColor;
      let str2 = "#ffffff";
      if (null != titleColor) {
        str2 = titleColor;
      }
      obj6.color = str2;
      tmp26 = obj6;
    }
    obj5.style = tmp26;
    obj5.children = block.name;
    obj4.children = callback(block(navigation[18]).Heading, obj5);
    const items6 = [callback(closure_5, obj4), ];
    let tmp28Result = block.showButton && null != stateFromStores;
    if (tmp28Result) {
      const obj7 = { variant: null, size: "sm", shrink: true, grow: false };
      let str3 = "secondary";
      if (tmp42) {
        str3 = "primary-overlay";
      }
      obj7.variant = str3;
      const intl = block(navigation[20]).intl;
      obj7.text = intl.string(block(navigation[20]).t.xFcotU);
      obj7.onPress = callback;
      tmp28Result = callback(block(navigation[19]).Button, obj7);
      const tmp28 = callback;
    }
    items6[1] = tmp28Result;
    obj3.children = items6;
    items5[1] = closure_10(closure_5, obj3);
    const obj8 = {};
    const obj9 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: block.name, data: filteredAndSortedProducts, keyExtractor: tmp10, onScroll: obj2.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll, renderItem: callback1, decelerationRate: "fast", snapToInterval: block(navigation[17]).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(navigation[7]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListEdgeSpacer, ListFooterComponent: ListEdgeSpacer, ItemSeparatorComponent: ListItemSeparator };
    obj8.children = callback(block(navigation[22]).FlashList, obj9);
    items5[2] = callback(block(navigation[21]).LayerScope, obj8);
    obj.children = items5;
    obj.children = closure_10(closure_5, obj);
    return callback(block(navigation[11]).AnalyticsLocationProvider, obj);
  }
  tmp4 = preferVCPrice(navigation[11]);
};
