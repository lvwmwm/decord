// Module ID: 14551
// Function ID: 111038
// Name: ListEdgeSpacer
// Dependencies: [31, 27, 33, 4130, 689, 14533, 5462, 5482, 14023, 14025, 8707, 8704, 8782, 4126, 5449, 7527, 2]
// Exports: default

// Module 14551 (ListEdgeSpacer)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function ListEdgeSpacer() {
  return callback(closure_5, { style: _createForOfIteratorHelperLoose().listEdgeSpacer });
}
function ListItemSeparator() {
  return callback(closure_5, { style: _createForOfIteratorHelperLoose().listItemSeparator });
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_24, overflow: "hidden" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.backgroundImage = { position: "absolute", top: 0, left: 0, bottom: 0, minWidth: "100%", aspectRatio: 2.5, resizeMode: "cover" };
_createForOfIteratorHelperLoose.header = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "flex-start", zIndex: 1 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "flex-start", zIndex: 1 };
_createForOfIteratorHelperLoose.listEdgeSpacer = { width: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { width: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.listItemSeparator = { width: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { width: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FramesProductShelfBlock.tsx");

export default function _default(block) {
  block = block.block;
  const preferVCPrice = block.preferVCPrice;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = block(14533);
  const tmp3 = preferVCPrice(14023)();
  const dependencyMap = tmp3;
  const items = [block.rankedSkuIds, tmp3];
  const memo = React.useMemo(() => tmp3(block.rankedSkuIds), items);
  let obj1 = block(14025);
  const filteredAndSortedProducts = obj1.useFilteredAndSortedProducts({ products: memo });
  const items1 = [preferVCPrice];
  const callback = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let obj = { newValue: { tilePosition: index } };
    obj = { product: item, preferVCPrice };
    obj.children = outer1_6(preferVCPrice(tmp3[11]), obj);
    return outer1_6(block(tmp3[10]).CollectiblesAnalyticsProvider, obj);
  }, items1);
  let tmp22Result = null;
  if (0 !== filteredAndSortedProducts.length) {
    obj = { value: tmp2(preferVCPrice(5482).COLLECTIBLES_SHOP_SHELF).analyticsLocations };
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
    const items3 = [callback(preferVCPrice(8782), { location: "FramesProductShelfBlock", tooltipPosition: "bottom" }), ];
    const obj4 = { variant: "text-sm/semibold", color: "text-overlay-light", children: block.title };
    items3[1] = callback(block(4126).Text, obj4);
    obj3.children = items3;
    items2[1] = callback2(closure_5, obj3);
    const obj5 = {};
    const obj6 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: block.title, data: filteredAndSortedProducts, keyExtractor: tmp6, onScroll: obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll, renderItem: callback, decelerationRate: "fast", snapToInterval: block(8704).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(689).space.PX_12, showsHorizontalScrollIndicator: false, ListHeaderComponent: ListEdgeSpacer, ListFooterComponent: ListEdgeSpacer, ItemSeparatorComponent: ListItemSeparator };
    obj5.children = callback(block(7527).FlashList, obj6);
    items2[2] = callback(block(5449).LayerScope, obj5);
    obj.children = items2;
    obj.children = callback2(closure_5, obj);
    tmp22Result = callback(block(5462).AnalyticsLocationProvider, obj);
    const tmp22 = callback;
    const tmp25 = callback2;
    const tmp26 = closure_5;
  }
  return tmp22Result;
};
