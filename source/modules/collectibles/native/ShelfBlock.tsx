// Module ID: 14388
// Function ID: 108569
// Name: ListEdgeSpacer
// Dependencies: []
// Exports: default

// Module 14388 (ListEdgeSpacer)
function ListEdgeSpacer() {
  return callback(closure_5, { style: callback2().listEdgeSpacer });
}
function ListItemSeparator() {
  return callback(closure_5, { style: callback2().listItemSeparator });
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).CollectiblesMobileShopScreen;
const UserSettingsSections = arg1(dependencyMap[4]).UserSettingsSections;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { width: "100%", paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.containerWithBackground = { marginTop: importDefault(dependencyMap[7]).space.PX_24, paddingTop: importDefault(dependencyMap[7]).space.PX_24, paddingBottom: importDefault(dependencyMap[7]).space.PX_24, overflow: "hidden" };
obj.backgroundImage = {};
const obj2 = { 9223372036854775807: "Array", 9223372036854775807: "isArray", 0: "accessibilityRole", gap: importDefault(dependencyMap[7]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, marginBottom: importDefault(dependencyMap[7]).space.PX_16, zIndex: 1 };
obj.header = obj2;
obj.headingWrapper = { flexShrink: 1 };
const obj1 = { marginTop: importDefault(dependencyMap[7]).space.PX_24, paddingTop: importDefault(dependencyMap[7]).space.PX_24, paddingBottom: importDefault(dependencyMap[7]).space.PX_24, overflow: "hidden" };
obj.listEdgeSpacer = { width: importDefault(dependencyMap[7]).space.PX_16 };
const obj3 = { width: importDefault(dependencyMap[7]).space.PX_16 };
obj.listItemSeparator = { width: importDefault(dependencyMap[7]).space.PX_12 };
let closure_11 = obj.createStyles(obj);
const obj4 = { width: importDefault(dependencyMap[7]).space.PX_12 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/collectibles/native/ShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const arg1 = block;
  const preferVCPrice = block.preferVCPrice;
  const importDefault = preferVCPrice;
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  let obj1 = arg1(dependencyMap[9]);
  const collectiblesAnalyticsContext = obj1.useCollectiblesAnalyticsContext();
  const React = collectiblesAnalyticsContext;
  let obj2 = arg1(dependencyMap[10]);
  let obj3 = arg1(dependencyMap[13]);
  const items = [closure_6];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let category;
    if (null != block.categorySkuId) {
      category = category.getCategory(block.categorySkuId);
    }
    return category;
  });
  const tmp6 = importDefault(dependencyMap[14])();
  const items1 = [block.rankedSkuIds, tmp6];
  const memo = React.useMemo(() => tmp6(block.rankedSkuIds), items1);
  let obj4 = arg1(dependencyMap[15]);
  const filteredAndSortedProducts = obj4.useFilteredAndSortedProducts({ products: memo });
  const items2 = [stateFromStores, navigation, collectiblesAnalyticsContext];
  const items3 = [block.name, preferVCPrice];
  const callback = React.useCallback(() => {
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        let obj = {};
        const items = [preferVCPrice(navigation[12]).COLLECTIBLES_SHOP];
        obj.analyticsLocations = items;
        obj.analyticsSource = preferVCPrice(navigation[12]).COLLECTIBLES_SHOP;
        obj.screen = constants.ORBS;
        const result = block(navigation[16]).openCollectiblesShopMobile(obj);
        const obj2 = block(navigation[16]);
      } else {
        obj = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
      }
    }
  }, items2);
  const callback1 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { newValue: obj };
    obj = { tilePosition: index, pageSection: block.name };
    obj = { product: item, preferVCPrice };
    obj.children = callback(preferVCPrice(navigation[17]), obj);
    return callback(block(navigation[9]).CollectiblesAnalyticsProvider, obj);
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
    obj = { value: tmp4(importDefault(dependencyMap[12]).COLLECTIBLES_SHOP_SHELF).analyticsLocations };
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
    obj4.children = callback(arg1(dependencyMap[18]).Heading, obj5);
    const items6 = [callback(tmp6, obj4), ];
    let tmp28Result = block.showButton && null != stateFromStores;
    if (tmp28Result) {
      const obj7 = { grow: 705839377, handleInvertColorsChanged: 410124290, setViewRef: 402653184, PARTNER_PROMOTIONS_UNKNOWN_GIFT: 16777216 };
      let str3 = "secondary";
      if (tmp42) {
        str3 = "primary-overlay";
      }
      obj7.variant = str3;
      const intl = arg1(dependencyMap[20]).intl;
      obj7.text = intl.string(arg1(dependencyMap[20]).t.xFcotU);
      obj7.onPress = callback;
      tmp28Result = callback(arg1(dependencyMap[19]).Button, obj7);
      const tmp28 = callback;
    }
    items6[1] = tmp28Result;
    obj3.children = items6;
    items5[1] = closure_10(tmp6, obj3);
    const obj8 = {};
    const obj9 = { "Null": 950738584148872700000000000000, "Null": 0.00019836452249855088, accessibilityLabel: block.name, data: filteredAndSortedProducts, keyExtractor: tmp10, onScroll: obj2.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll, renderItem: callback1, decelerationRate: "fast", snapToInterval: arg1(dependencyMap[17]).COLLECTIBLES_SHOP_CARD_WIDTH + importDefault(dependencyMap[7]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListEdgeSpacer, ListFooterComponent: ListEdgeSpacer, ItemSeparatorComponent: ListItemSeparator };
    obj8.children = callback(arg1(dependencyMap[22]).FlashList, obj9);
    items5[2] = callback(arg1(dependencyMap[21]).LayerScope, obj8);
    obj.children = items5;
    obj.children = closure_10(tmp6, obj);
    return callback(arg1(dependencyMap[11]).AnalyticsLocationProvider, obj);
  }
  const tmp4 = importDefault(dependencyMap[11]);
};
