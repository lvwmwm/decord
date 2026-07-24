// Module ID: 14538
// Function ID: 110985
// Name: SkeletonGrid
// Dependencies: [31, 27, 33, 4130, 8704, 14539, 14031, 14540, 2]
// Exports: default

// Module 14538 (SkeletonGrid)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function SkeletonGrid(accessibilityLabel) {
  let View;
  let jsx;
  const loadingCardsNum = accessibilityLabel.loadingCardsNum;
  const tmp = items();
  const importDefault = tmp;
  let obj = loadingCardsNum(columns[5]);
  const cardLayout = obj.useCardLayout();
  columns = cardLayout.columns;
  ({ cardWidth: View, rowWidth: jsx } = cardLayout);
  items = [];
  for (let num = 0; num < loadingCardsNum; num = num + columns) {
    let tmp3 = (function _loop(arg0) {
      let closure_0 = arg0;
      let obj = { length: Math.min(columns, closure_0 - arg0) };
      let arr = Array.from(obj);
      obj = {
        style: items,
        children: arr.map((arg0, arg1) => {
          let obj = { width: outer1_3 };
          obj = { marginBottom: loadingCardsNum(columns[4]).COLLECTIBLES_SHOP_CARD_GAP };
          obj.style = obj;
          return outer2_4(callback(columns[6]), obj, "" + closure_0 + "-" + arg1);
        })
      };
      items = [tmp.skeletonRow, ];
      obj = { width: closure_4 };
      items[1] = obj;
      arr = items.push(outer1_4(outer1_3, obj, "row-" + arg0));
    })(num);
  }
  obj = { style: tmp.skeletonGrid, accessibilityRole: "list", accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityState: { busy: true }, accessible: true, children: items };
  return <View style={tmp.skeletonGrid} accessibilityRole="list" accessibilityLabel={arg0.accessibilityLabel} accessibilityState={{ busy: true }} accessible>{items}</View>;
}
_createForOfIteratorHelperLoose = { skeletonGrid: { flex: 1, alignItems: "center" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP, paddingBottom: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP, paddingHorizontal: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP };
_createForOfIteratorHelperLoose.skeletonRow = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FeedProductList.tsx");

export default function FeedProductList(arg0) {
  let accessibilityLabel;
  let products;
  ({ products, accessibilityLabel } = arg0);
  if (0 === products.length) {
    let obj = { loadingCardsNum: tmp, accessibilityLabel };
    let tmp7 = <SkeletonGrid loadingCardsNum={tmp} accessibilityLabel={accessibilityLabel} />;
  } else {
    obj = { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 };
    tmp7 = jsx(importDefault(14540), { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 });
  }
  return tmp7;
};
