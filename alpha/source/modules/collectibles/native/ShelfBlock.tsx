// Module ID: 16222
// Function ID: 16223
// Name: ShelfBlock
// Dependencies: [19, 17, 7263, 1087, 1085, 21, 5092, 587, 558, 576, 1503, 8970, 16194, 6851, 6878, 504, 16196, 15328, 7262, 8967, 6156, 5088, 5379, 1126, 6845, 8624, 2]

// Module 16222 (ShelfBlock)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7262 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8967 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8970 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7263 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let block, navigation;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = "#ffffff";
let createStyles = createStyles_mod;
let obj = { container: obj2, containerWithBackground: obj3, backgroundImage: { position: "absolute", top: 0, left: 0, bottom: 0, minWidth: "100%", aspectRatio: 2.5, resizeMode: "cover" }, header: obj4, headingWrapper: { flexShrink: 1 }, listEdgeSpacer: obj5, listItemSeparator: obj6 };
obj2 = { width: "100%", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_24, overflow: "hidden" };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, zIndex: 1 };
obj5 = { width: nativeDefault.space.PX_16 };
obj6 = { width: nativeDefault.space.PX_12 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListEdgeSpacer() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_11();
  if (cResult[0] !== tmp2.listEdgeSpacer) {
    const obj2 = { style: tmp2.listEdgeSpacer };
    const tmp6 = metroImportAll(View, obj2);
    cResult[0] = tmp2.listEdgeSpacer;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ListEdgeSpacer() {
  const obj = { style: closure_11().listEdgeSpacer };
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function ListItemSeparator() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_11();
  if (cResult[0] !== tmp2.listItemSeparator) {
    const obj2 = { style: tmp2.listItemSeparator };
    const tmp6 = metroImportAll(View, obj2);
    cResult[0] = tmp2.listItemSeparator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ListItemSeparator() {
  const obj = { style: closure_11().listItemSeparator };
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((block) => {
  let first;
  let tmp11;
  const tmp = block;
  let obj = block(navigation[9]);
  const cResult = obj.c(54);
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  closure_11();
  let obj2 = block(navigation[10]);
  navigation = obj2.useNavigation();
  let obj3 = block(navigation[11]);
  const collectiblesAnalyticsContext = obj3.useCollectiblesAnalyticsContext();
  const obj4 = block(navigation[12]);
  const handleDismissCoachmarkOnScroll = obj4.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  const tmp8 = preferVCPrice(navigation[13]);
  const analyticsLocations = tmp8(preferVCPrice(navigation[14]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
  const tmp7 = preferVCPrice;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CollectiblesCategoryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== block.categorySkuId) {
    const fn = function y() {
      let category;
      if (null != block.categorySkuId) {
        category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
      }
      return category;
    };
    cResult[1] = block.categorySkuId;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  const tmpResult = tmp(navigation[15]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
  const tmp13 = tmp7(navigation[16])();
  const rankedSkuIds = block.rankedSkuIds;
  if (cResult[3] === tmp13) {
    let tmp14;
    let tmp16;
    if (cResult[4] === rankedSkuIds) {
      tmp14 = cResult[5];
    }
    if (cResult[6] !== tmp14) {
      const obj5 = { products: tmp14 };
      cResult[6] = tmp14;
      class A {
        constructor() {
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
        }
      }
      tmp16 = obj5;
    } else {
      tmp16 = cResult[7];
    }
    const tmpResult2 = tmp(navigation[17]);
    const filteredAndSortedProducts = tmpResult2.useFilteredAndSortedProducts(tmp16);
    if (cResult[8] === collectiblesAnalyticsContext) {
      if (cResult[9] === stateFromStores) {
        if (cResult[12] === block.name) {
          const _Symbol = Symbol;
          class F {
            constructor(arg0) {
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
            }
          }
          if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor(skuId) {
                return skuId.skuId;
              }
            }
            class F {
              constructor(arg0) {
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
              }
            }
          } else {
            class X {
              constructor(skuId) {
                return skuId.skuId;
              }
            }
          }
          class A {
            constructor() {
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
            }
          }
        }
        class F {
          constructor(arg0) {
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
          }
        }
        cResult[12] = block.name;
        class A {
          constructor() {
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
          }
        }
        cResult[13] = preferVCPrice;
        cResult[14] = F;
      }
    }
    class A {
      constructor() {
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
      }
    }
    cResult[8] = collectiblesAnalyticsContext;
    cResult[9] = stateFromStores;
    cResult[10] = navigation;
    cResult[11] = A;
  }
  const tmp13Result = tmp13(rankedSkuIds);
  cResult[3] = tmp13;
  cResult[4] = rankedSkuIds;
  cResult[5] = tmp13Result;
  tmp14 = tmp13Result;
}) : ((block) => {
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
  const tmp = closure_11();
  let obj = block(navigation[10]);
  navigation = obj.useNavigation();
  let obj2 = block(navigation[11]);
  const collectiblesAnalyticsContext = obj2.useCollectiblesAnalyticsContext();
  let obj3 = block(navigation[12]);
  const handleDismissCoachmarkOnScroll = obj3.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  const tmp7 = preferVCPrice(navigation[13]);
  const analyticsLocations = tmp7(preferVCPrice(navigation[14]).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
  let items = [closure_5];
  const obj4 = block(navigation[15]);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = CollectiblesCategoryStore.getCategory(tmp.categorySkuId);
    }
    return category;
  });
  const tmp9 = preferVCPrice(navigation[16])();
  closure_5 = tmp9;
  const items1 = [block.rankedSkuIds, tmp9];
  const memo = collectiblesAnalyticsContext.useMemo(() => closure_5(block.rankedSkuIds), items1);
  const obj5 = block(navigation[17]);
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
    const AnalyticsLocationProvider = tmp2(tmp3[13]).AnalyticsLocationProvider;
    if (null != block.mobileBackgroundImage) {
      tmp14Result = null != block.mobileBackgroundImage;
    }
    if (tmp14Result) {
      const obj8 = { style: tmp.backgroundImage, source: obj9 };
      obj9 = { uri: block.mobileBackgroundImage };
      tmp14Result = tmp14(tmp6(tmp3[20]), obj8);
    }
    items5 = [tmp14Result, , ];
    const obj10 = { style: tmp.header, children: items6 };
    let tmp18;
    const obj11 = { style: tmp.headingWrapper, children: closure_8(Heading, obj13) };
    Heading = tmp2(tmp3[21]).Heading;
    if (null != block.mobileBackgroundImage) {
      let titleColor = block.titleColor;
      if (titleColor == null) {
        titleColor = c10;
      }
      tmp18 = { color: titleColor };
      const obj12 = { color: titleColor };
    }
    obj13 = { variant: "text-md/semibold", style: tmp18, children: block.name };
    items6 = [closure_8(stateFromStores, obj11), ];
    let tmp14Result2 = block.showButton && null != stateFromStores;
    if (tmp14Result2) {
      let str = "secondary";
      const Button = tmp2(tmp3[22]).Button;
      if (null != block.mobileBackgroundImage) {
        str = "primary-overlay";
      }
      const obj14 = { variant: str, size: "sm", shrink: true, grow: false, text: intl.string(block(navigation[23]).t.xFcotU), onPress: callback };
      intl = tmp2(tmp3[23]).intl;
      tmp14Result2 = tmp14(Button, obj14);
    }
    items6[1] = tmp14Result2;
    items5[1] = closure_9(stateFromStores, obj10);
    const obj15 = { children: closure_8(FlashList, obj16) };
    const LayerScope = tmp2(tmp3[24]).LayerScope;
    obj16 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: block.name, data: filteredAndSortedProducts, keyExtractor: tmp13, onScroll: handleDismissCoachmarkOnScroll, renderItem: callback1, decelerationRate: "fast", snapToInterval: block(navigation[19]).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(navigation[7]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListFooterComponent, ListFooterComponent, ItemSeparatorComponent };
    FlashList = tmp2(tmp3[25]).FlashList;
    items5[2] = closure_8(LayerScope, obj15);
    return closure_8(AnalyticsLocationProvider, obj6);
  }
});
let result = size.fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default tmp4;
