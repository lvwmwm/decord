// Module ID: 14632
// Function ID: 14633
// Name: ListEdgeSpacer
// Dependencies: [19, 17, 21, 4189, 712, 14614, 5515, 5535, 14101, 14103, 8663, 8660, 8738, 4185, 5502, 6676, 2]
// Exports: default

// Module 14632 (ListEdgeSpacer)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function ListEdgeSpacer() {
  return callback(closure_5, { style: createCacheKey().listEdgeSpacer });
}
function ListItemSeparator() {
  return callback(closure_5, { style: createCacheKey().listItemSeparator });
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, backgroundImage: null, header: null, listEdgeSpacer: null, listItemSeparator: null };
createCacheKey = { width: "100%", marginTop: require("Themes").space.PX_24, paddingTop: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_24, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 0, left: 0, bottom: 0, minWidth: "100%", aspectRatio: 2.5, resizeMode: "cover" };
createCacheKey[2] = { paddingHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_8, alignItems: "flex-start", zIndex: 1 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_8, alignItems: "flex-start", zIndex: 1 };
createCacheKey[3] = { width: require("Themes").space.PX_16 };
let obj2 = { width: require("Themes").space.PX_16 };
createCacheKey[4] = { width: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: require("Themes").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FramesProductShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  let dependencyMap;
  const tmp = createCacheKey();
  let obj = block(14614);
  const tmp6 = preferVCPrice(14101)();
  dependencyMap = tmp6;
  const items = [block.rankedSkuIds, tmp6];
  const memo = React.useMemo(() => _undefined(block.rankedSkuIds), items);
  let obj1 = block(14103);
  const filteredAndSortedProducts = obj1.useFilteredAndSortedProducts({ products: memo });
  const items1 = [preferVCPrice];
  const callback = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { newValue: { tilePosition: index }, children: null };
    obj = { product: item, preferVCPrice };
    obj[1] = outer1_6(preferVCPrice(_undefined[11]), obj);
    return outer1_6(block(_undefined[10]).CollectiblesAnalyticsProvider, obj);
  }, items1);
  let tmp15Result = null;
  if (0 !== filteredAndSortedProducts.length) {
    obj = { value: null, children: null };
    obj[0] = tmp5(preferVCPrice(5535).COLLECTIBLES_SHOP_SHELF).analyticsLocations;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    tmp15Result = null != block.mobileBackgroundImage;
    if (tmp15Result) {
      obj1 = { style: null, source: null };
      obj1[0] = tmp.backgroundImage;
      const obj2 = { uri: null };
      obj2[0] = block.mobileBackgroundImage;
      obj1[1] = obj2;
      tmp15Result = tmp15(closure_4, obj1);
    }
    const items2 = [tmp15Result, , ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.header;
    const items3 = [closure_6(tmp4(8738), { location: "FramesProductShelfBlock", tooltipPosition: "bottom" }), ];
    const obj4 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    obj4[2] = block.title;
    items3[1] = closure_6(tmp2(4185).Text, obj4);
    obj3[1] = items3;
    items2[1] = closure_7(closure_5, obj3);
    const obj5 = { children: null };
    const obj6 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: null, data: null, keyExtractor: null, onScroll: null, renderItem: null, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null };
    obj6[2] = block.title;
    obj6[3] = filteredAndSortedProducts;
    obj6[4] = tmp9;
    obj6[5] = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
    obj6[6] = callback;
    obj6[8] = tmp2(8660).COLLECTIBLES_SHOP_CARD_WIDTH + tmp4(712).space.PX_12;
    obj6[10] = ListEdgeSpacer;
    obj6[11] = ListEdgeSpacer;
    obj6[12] = ListItemSeparator;
    obj5[0] = closure_6(tmp2(6676).FlashList, obj6);
    items2[2] = closure_6(tmp2(5502).LayerScope, obj5);
    obj[1] = items2;
    obj[1] = closure_7(closure_5, obj);
    tmp15Result = tmp15(tmp2(5515).AnalyticsLocationProvider, obj);
  }
  return tmp15Result;
};
