// Module ID: 17818
// Function ID: 17819
// Name: ShelfBlock
// Dependencies: [19, 17, 7713, 1074, 1072, 21, 5009, 575, 1498, 9440, 17790, 7320, 7345, 504, 17792, 16922, 7712, 9437, 5712, 5619, 5629, 1114, 5606, 7288, 2]
// Exports: default

// Module 17818 (ShelfBlock)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 9437 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9440 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7713 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function ListEdgeSpacer() {
  const obj = { style: closure_10().listEdgeSpacer };
  return metroImportAll(View, obj);
}
function ListItemSeparator() {
  const obj = { style: closure_10().listItemSeparator };
  return metroImportAll(View, obj);
}
const View = react_native.View;
let closure_6 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerWithBackground: obj3, backgroundImage: { position: "absolute", top: 0, left: 0, bottom: 0, minWidth: "100%", aspectRatio: 2.5, resizeMode: "cover" }, header: obj4, headingWrapper: { flexShrink: 1 }, listEdgeSpacer: obj5, listItemSeparator: obj6 };
obj2 = { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, overflow: "hidden" };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, zIndex: 1 };
obj5 = { width: nativeDefault.space.PX_16 };
obj6 = { width: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
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
  let closure_5;
  const tmp = closure_10();
  let obj = block(navigation[8]);
  navigation = obj.useNavigation();
  let obj2 = block(navigation[9]);
  const collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  let obj3 = block(navigation[10]);
  const handleDismissCoachmarkOnScroll = obj3.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  const tmp7 = preferVCPrice(navigation[11]);
  const analyticsLocations = tmp7(preferVCPrice(navigation[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
  let items = [closure_5];
  const obj4 = block(navigation[13]);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
    }
    return category;
  });
  const tmp9 = preferVCPrice(navigation[14])();
  closure_5 = tmp9;
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
    const obj = { newValue: obj2, children: metroImportAll(CollectiblesShopCardV2Default, obj3) };
    obj2 = { tilePosition: index, pageSection: block.name };
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    obj3 = { product: item, preferVCPrice };
    return metroImportAll(CollectiblesAnalyticsProvider, obj);
  }, items3);
  if (0 === filteredAndSortedProducts.length) {
    return null;
  } else {
    const items4 = [tmp.container, null != block.mobileBackgroundImage && tmp.containerWithBackground];
    const obj6 = { value: analyticsLocations, children: closure_9(stateFromStores, obj7) };
    let tmp14Result = tmp24;
    obj7 = { style: items4, children: items5 };
    const AnalyticsLocationProvider = tmp2(tmp3[11]).AnalyticsLocationProvider;
    if (null != block.mobileBackgroundImage) {
      tmp14Result = null != block.mobileBackgroundImage;
    }
    if (tmp14Result) {
      const obj8 = { style: tmp.backgroundImage, source: obj9 };
      obj9 = { uri: block.mobileBackgroundImage };
      tmp14Result = tmp14(tmp6(tmp3[18]), obj8);
    }
    items5 = [tmp14Result, , ];
    const obj10 = { style: tmp.header, children: items6 };
    let tmp18;
    const obj11 = { style: tmp.headingWrapper, children: closure_8(Heading, obj13) };
    Heading = tmp2(tmp3[19]).Heading;
    if (null != block.mobileBackgroundImage) {
      let str = block.titleColor;
      if (str == null) {
        str = "#ffffff";
      }
      tmp18 = { color: str };
      const obj12 = { color: str };
    }
    obj13 = { variant: "text-md/semibold", style: tmp18, children: block.name };
    items6 = [closure_8(stateFromStores, obj11), ];
    let tmp14Result2 = block.showButton && null != stateFromStores;
    if (tmp14Result2) {
      let str2 = "secondary";
      const Button = tmp2(tmp3[20]).Button;
      if (null != block.mobileBackgroundImage) {
        str2 = "primary-overlay";
      }
      const obj14 = { variant: str2, size: "sm", shrink: true, grow: false, text: intl.string(block(navigation[21]).t.xFcotU), onPress: callback };
      intl = tmp2(tmp3[21]).intl;
      tmp14Result2 = tmp14(Button, obj14);
    }
    items6[1] = tmp14Result2;
    items5[1] = closure_9(stateFromStores, obj10);
    const obj15 = { children: closure_8(FlashList, obj16) };
    const LayerScope = tmp2(tmp3[22]).LayerScope;
    obj16 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: block.name, data: filteredAndSortedProducts, keyExtractor: tmp13, onScroll: handleDismissCoachmarkOnScroll, renderItem: callback1, decelerationRate: "fast", snapToInterval: block(navigation[17]).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(navigation[7]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListEdgeSpacer, ListFooterComponent: ListEdgeSpacer, ItemSeparatorComponent: ListItemSeparator };
    FlashList = tmp2(tmp3[23]).FlashList;
    items5[2] = closure_8(LayerScope, obj15);
    return closure_8(AnalyticsLocationProvider, obj6);
  }
};
