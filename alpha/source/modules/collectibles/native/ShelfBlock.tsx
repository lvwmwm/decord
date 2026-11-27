// Module ID: 17539
// Function ID: 17540
// Name: ShelfBlock
// Dependencies: [19, 17, 6311, 1073, 1071, 21, 5043, 575, 1501, 11215, 17513, 6379, 6380, 504, 17515, 16600, 1256, 6310, 11212, 5730, 5634, 5641, 1112, 5621, 7482, 2]
// Exports: default

// Module 17539 (ShelfBlock)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6310 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 11212 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 11215 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6311 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function ListEdgeSpacer() {
  const obj = { style: closure_11().listEdgeSpacer };
  return React4(View, obj);
}
function ListItemSeparator() {
  const obj = { style: closure_11().listItemSeparator };
  return React4(View, obj);
}
const View = react_native.View;
let closure_6 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
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
  let tmp16;
  block = block.block;
  const screen = block.screen;
  const preferVCPrice = block.preferVCPrice;
  const tmp = closure_11();
  let obj = block(preferVCPrice[8]);
  navigation = obj.useNavigation();
  let obj2 = block(preferVCPrice[9]);
  const collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  let obj3 = block(preferVCPrice[10]);
  const handleDismissCoachmarkOnScroll = obj3.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  const tmp7 = screen(preferVCPrice[11]);
  const analyticsLocations = tmp7(screen(preferVCPrice[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
  let items = [analyticsLocations];
  const obj4 = block(preferVCPrice[13]);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
    }
    return category;
  });
  const tmp9 = screen(preferVCPrice[14])();
  let closure_7 = tmp9;
  const items1 = [block.rankedSkuIds, tmp9];
  const memo = navigation.useMemo(() => closure_7(block.rankedSkuIds), items1);
  const obj5 = block(preferVCPrice[15]);
  const filteredAndSortedProducts = obj5.useFilteredAndSortedProducts({ products: memo });
  const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext, screen, analyticsLocations];
  const items3 = [block.name, preferVCPrice];
  const callback = navigation.useCallback(() => {
    let items;
    let pageSection;
    if (null != stateFromStores) {
      let sessionId;
      const track = AnalyticsUtilsDefault.track;
      const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroImportDefault.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
      AnalyticsUtilsDefault;
      if (collectiblesAnalyticsContext != null) {
        sessionId = tmp18.sessionId;
      }
      const obj = { collectibles_shop_session_id: sessionId, page_type: screen, page_section: pageSection, page_category: stateFromStores.name, location_stack: analyticsLocations, cta_name: "shelf header shop all" };
      pageSection = undefined;
      if (collectiblesAnalyticsContext != null) {
        pageSection = tmp18.pageSection;
      }
      track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      if (stateFromStores.isOrbsExclusive) {
        const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: stateFromStores.ORBS };
        const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
        items = [];
        CollectiblesActionCreators;
        items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj2);
      } else {
        const obj3 = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(metroImportAll.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj3);
      }
    }
  }, items2);
  const callback1 = navigation.useCallback((arg0) => {
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
  if (0 === filteredAndSortedProducts.length) {
    return null;
  } else {
    const items4 = [tmp.container, null != block.mobileBackgroundImage && tmp.containerWithBackground];
    const obj6 = { value: analyticsLocations, children: tmp15(tmp16, obj7) };
    tmp16 = collectiblesAnalyticsContext;
    let tmp14Result = tmp24;
    obj7 = { style: items4, children: items5 };
    const AnalyticsLocationProvider = tmp2(tmp3[11]).AnalyticsLocationProvider;
    if (null != block.mobileBackgroundImage) {
      tmp14Result = null != block.mobileBackgroundImage;
    }
    if (tmp14Result) {
      const obj8 = { style: tmp.backgroundImage, source: obj9 };
      obj9 = { uri: block.mobileBackgroundImage };
      tmp14Result = tmp14(tmp6(tmp3[19]), obj8);
    }
    items5 = [tmp14Result, , ];
    const obj10 = { style: tmp.header, children: items6 };
    let tmp18;
    const obj11 = { style: tmp.headingWrapper, children: closure_9(Heading, obj13) };
    Heading = tmp2(tmp3[20]).Heading;
    if (null != block.mobileBackgroundImage) {
      let str = block.titleColor;
      if (str == null) {
        str = "#ffffff";
      }
      tmp18 = { color: str };
      const obj12 = { color: str };
    }
    obj13 = { variant: "body-md/semibold", style: tmp18, children: block.name };
    items6 = [tmp14(tmp16, obj11), ];
    let tmp14Result2 = block.showButton && null != stateFromStores;
    if (tmp14Result2) {
      let str2 = "secondary";
      const Button = tmp2(tmp3[21]).Button;
      if (null != block.mobileBackgroundImage) {
        str2 = "primary-overlay";
      }
      const obj14 = { variant: str2, size: "sm", shrink: true, grow: false, text: intl.string(block(preferVCPrice[22]).t.xFcotU), onPress: callback };
      intl = tmp2(tmp3[22]).intl;
      tmp14Result2 = tmp14(Button, obj14);
    }
    items6[1] = tmp14Result2;
    items5[1] = closure_10(tmp16, obj10);
    const obj15 = { children: closure_9(FlashList, obj16) };
    const LayerScope = tmp2(tmp3[23]).LayerScope;
    obj16 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: block.name, data: filteredAndSortedProducts, keyExtractor: tmp13, onScroll: handleDismissCoachmarkOnScroll, renderItem: callback1, decelerationRate: "fast", snapToInterval: block(preferVCPrice[18]).COLLECTIBLES_SHOP_CARD_WIDTH + screen(preferVCPrice[7]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListEdgeSpacer, ListFooterComponent: ListEdgeSpacer, ItemSeparatorComponent: ListItemSeparator };
    FlashList = tmp2(tmp3[24]).FlashList;
    items5[2] = closure_9(LayerScope, obj15);
    return closure_9(AnalyticsLocationProvider, obj6);
  }
};
