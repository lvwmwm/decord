// Module ID: 15453
// Function ID: 15454
// Name: ShelfBlock
// Dependencies: [19, 17, 6962, 1076, 1074, 21, 4836, 576, 1485, 8229, 15432, 6583, 6603, 504, 15434, 14604, 6961, 8226, 4832, 5281, 1115, 6577, 8179, 2]
// Exports: default

// Module 15453 (ShelfBlock)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8226 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8229 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function ListEdgeSpacer() {
  const obj = { style: closure_11().listEdgeSpacer };
  return React4(hasOwnProperty, obj);
}
function ListItemSeparator() {
  const obj = { style: closure_11().listItemSeparator };
  return React4(hasOwnProperty, obj);
}
({ Image: closure_4, View: hasOwnProperty } = react_native);
let closure_7 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerWithBackground: obj3, backgroundImage: { position: "absolute", top: 0, left: 0, bottom: 0, minWidth: "100%", aspectRatio: 2.5, resizeMode: "cover" }, header: obj4, headingWrapper: { flexShrink: 1 }, listEdgeSpacer: obj5, listItemSeparator: obj6 };
obj2 = { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, overflow: "hidden" };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, zIndex: 1 };
obj5 = { width: nativeDefault.space.PX_16 };
obj6 = { width: nativeDefault.space.PX_12 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default function _default(block) {
  let FlashList;
  let Heading;
  let intl;
  let items5;
  let items6;
  let obj13;
  let obj16;
  let obj7;
  let obj9;
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  navigation = undefined;
  const tmp = closure_11();
  let obj = block(navigation[8]);
  navigation = obj.useNavigation();
  let obj2 = block(navigation[9]);
  const collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  let obj3 = block(navigation[10]);
  const handleDismissCoachmarkOnScroll = obj3.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  const tmp7 = preferVCPrice(navigation[11]);
  const analyticsLocations = tmp7(preferVCPrice(navigation[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
  let items = [CollectiblesCategoryStore];
  const obj4 = block(navigation[13]);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
    }
    return category;
  });
  const tmp9 = preferVCPrice(navigation[14])();
  let closure_5 = tmp9;
  const items1 = [block.rankedSkuIds, tmp9];
  const memo = collectiblesAnalyticsContext.useMemo(() => closure_5(block.rankedSkuIds), items1);
  const obj5 = block(navigation[15]);
  const filteredAndSortedProducts = obj5.useFilteredAndSortedProducts({ products: memo });
  const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext];
  const items3 = [block.name, preferVCPrice];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    let items;
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: constants.ORBS };
        const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
        items = [];
        CollectiblesActionCreators;
        items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj2);
      } else {
        const obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
      }
    }
  }, items2);
  const callback1 = collectiblesAnalyticsContext.useCallback((arg0) => {
    let index;
    let item;
    let obj2;
    let obj3;
    ({ item, index } = arg0);
    const obj = { newValue: obj2, children: React4(CollectiblesShopCardV2Default, obj3) };
    obj2 = { tilePosition: index, pageSection: block.name };
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    obj3 = { product: item, preferVCPrice };
    return React4(CollectiblesAnalyticsProvider, obj);
  }, items3);
  const tmp6 = preferVCPrice;
  if (0 === filteredAndSortedProducts.length) {
    return null;
  } else {
    const items4 = [tmp.container, null != block.mobileBackgroundImage && tmp.containerWithBackground];
    const obj6 = { value: analyticsLocations, children: closure_10(closure_5, obj7) };
    let tmp14Result = tmp25;
    obj7 = { style: items4, children: items5 };
    const AnalyticsLocationProvider = tmp2(tmp3[11]).AnalyticsLocationProvider;
    if (null != block.mobileBackgroundImage) {
      tmp14Result = null != block.mobileBackgroundImage;
    }
    if (tmp14Result) {
      const obj8 = { style: tmp.backgroundImage, source: obj9 };
      obj9 = { uri: block.mobileBackgroundImage };
      tmp14Result = tmp14(stateFromStores, obj8);
    }
    items5 = [tmp14Result, , ];
    const obj10 = { style: tmp.header, children: items6 };
    let tmp19;
    const obj11 = { style: tmp.headingWrapper, children: closure_9(Heading, obj13) };
    Heading = tmp2(tmp3[18]).Heading;
    if (null != block.mobileBackgroundImage) {
      let str = block.titleColor;
      if (str == null) {
        str = "#ffffff";
      }
      tmp19 = { color: str };
      const obj12 = { color: str };
    }
    obj13 = { variant: "text-md/semibold", style: tmp19, children: block.name };
    items6 = [closure_9(closure_5, obj11), ];
    let tmp14Result2 = block.showButton && null != stateFromStores;
    if (tmp14Result2) {
      let str2 = "secondary";
      const Button = tmp2(tmp3[19]).Button;
      if (null != block.mobileBackgroundImage) {
        str2 = "primary-overlay";
      }
      const obj14 = { variant: str2, size: "sm", shrink: true, grow: false, text: intl.string(block(navigation[20]).t.xFcotU), onPress: callback };
      intl = tmp2(tmp3[20]).intl;
      tmp14Result2 = tmp14(Button, obj14);
    }
    items6[1] = tmp14Result2;
    items5[1] = closure_10(closure_5, obj10);
    const obj15 = { children: closure_9(FlashList, obj16) };
    const LayerScope = tmp2(tmp3[21]).LayerScope;
    obj16 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: block.name, data: filteredAndSortedProducts, keyExtractor: tmp13, onScroll: handleDismissCoachmarkOnScroll, renderItem: callback1, decelerationRate: "fast", snapToInterval: block(navigation[17]).COLLECTIBLES_SHOP_CARD_WIDTH + tmp6(navigation[7]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListEdgeSpacer, ListFooterComponent: ListEdgeSpacer, ItemSeparatorComponent: ListItemSeparator };
    FlashList = tmp2(tmp3[22]).FlashList;
    items5[2] = closure_9(LayerScope, obj15);
    return closure_9(AnalyticsLocationProvider, obj6);
  }
};
