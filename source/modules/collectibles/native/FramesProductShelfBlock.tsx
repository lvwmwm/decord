// Module ID: 14387
// Function ID: 108562
// Name: ListEdgeSpacer
// Dependencies: []
// Exports: default

// Module 14387 (ListEdgeSpacer)
function ListEdgeSpacer() {
  return callback(closure_5, { style: callback3().listEdgeSpacer });
}
function ListItemSeparator() {
  return callback(closure_5, { style: callback3().listItemSeparator });
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { width: "100%", marginTop: importDefault(dependencyMap[4]).space.PX_24, paddingTop: importDefault(dependencyMap[4]).space.PX_24, paddingBottom: importDefault(dependencyMap[4]).space.PX_24, overflow: "hidden" };
obj.container = obj;
obj.backgroundImage = {};
const tmp3 = arg1(dependencyMap[2]);
obj.header = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_8, alignItems: "flex-start", zIndex: 1 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_8, alignItems: "flex-start", zIndex: 1 };
obj.listEdgeSpacer = { width: importDefault(dependencyMap[4]).space.PX_16 };
const obj2 = { width: importDefault(dependencyMap[4]).space.PX_16 };
obj.listItemSeparator = { width: importDefault(dependencyMap[4]).space.PX_12 };
let closure_8 = obj.createStyles(obj);
const obj3 = { width: importDefault(dependencyMap[4]).space.PX_12 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/collectibles/native/FramesProductShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const arg1 = block;
  const preferVCPrice = block.preferVCPrice;
  const importDefault = preferVCPrice;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const tmp3 = importDefault(dependencyMap[8])();
  const dependencyMap = tmp3;
  const items = [block.rankedSkuIds, tmp3];
  const memo = React.useMemo(() => tmp3(block.rankedSkuIds), items);
  let obj1 = arg1(dependencyMap[9]);
  const filteredAndSortedProducts = obj1.useFilteredAndSortedProducts({ products: memo });
  const items1 = [preferVCPrice];
  const callback = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { newValue: { tilePosition: index } };
    obj = { product: item, preferVCPrice };
    obj.children = callback(preferVCPrice(tmp3[11]), obj);
    return callback(block(tmp3[10]).CollectiblesAnalyticsProvider, obj);
  }, items1);
  let tmp22Result = null;
  if (0 !== filteredAndSortedProducts.length) {
    obj = { value: tmp2(importDefault(dependencyMap[7]).COLLECTIBLES_SHOP_SHELF).analyticsLocations };
    obj = { style: tmp.container };
    let tmp10 = null != block.mobileBackgroundImage;
    if (tmp10) {
      obj1 = { style: tmp.backgroundImage };
      const obj2 = { uri: block.mobileBackgroundImage };
      obj1.source = obj2;
      tmp10 = callback(closure_4, obj1);
    }
    const items2 = [tmp10, , ];
    const obj3 = { style: tmp.header };
    const items3 = [callback(importDefault(dependencyMap[12]), { width: 1156272642, height: 369444075 }), ];
    const obj4 = { cachedAt: null, edpbxy: "b979d6fc20f59ff3d9b456c0fcc05d95", children: block.title };
    items3[1] = callback(arg1(dependencyMap[13]).Text, obj4);
    obj3.children = items3;
    items2[1] = callback2(closure_5, obj3);
    const obj5 = {};
    const obj6 = { "Null": 950738584148872700000000000000, "Null": 0.00019836452249855088, accessibilityLabel: block.title, data: filteredAndSortedProducts, keyExtractor: tmp6, onScroll: obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll, renderItem: callback, decelerationRate: "fast", snapToInterval: arg1(dependencyMap[11]).COLLECTIBLES_SHOP_CARD_WIDTH + importDefault(dependencyMap[4]).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListEdgeSpacer, ListFooterComponent: ListEdgeSpacer, ItemSeparatorComponent: ListItemSeparator };
    obj5.children = callback(arg1(dependencyMap[15]).FlashList, obj6);
    items2[2] = callback(arg1(dependencyMap[14]).LayerScope, obj5);
    obj.children = items2;
    obj.children = callback2(closure_5, obj);
    tmp22Result = callback(arg1(dependencyMap[6]).AnalyticsLocationProvider, obj);
    const tmp22 = callback;
    const tmp25 = callback2;
    const tmp26 = closure_5;
  }
  return tmp22Result;
};
