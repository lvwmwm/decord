// Module ID: 15441
// Function ID: 15442
// Name: FeedProductList
// Dependencies: [19, 17, 21, 4836, 8226, 15442, 8337, 15443, 2]
// Exports: default

// Module 15441 (FeedProductList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8226 */;
import SkeletonCardDefault from "SkeletonCard" /* 8337 */;
import CollectiblesShopCardsGridDefault from "CollectiblesShopCardsGrid" /* 15443 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
function SkeletonGrid(loadingCardsNum) {
  let c0;
  let columns;
  let num;
  loadingCardsNum = loadingCardsNum.loadingCardsNum;
  _require = undefined;
  const accessibilityLabel = loadingCardsNum.accessibilityLabel;
  const tmp = closure_5();
  const obj = require("useCardLayout");
  const cardLayout = obj.useCardLayout();
  ({ columns, cardWidth: c0 } = cardLayout);
  const items = [];
  for (let num = 0; num < loadingCardsNum; num = num + columns) {
    let _Array = Array;
    let obj2 = { length: Math.min(columns, loadingCardsNum - num) };
    let _Math = Math;
    let fromResult = from(obj2);
    let items1 = [tmp.skeletonRow, ];
    let obj4 = { width: tmp3 };
    items1[1] = obj4;
    let _HermesInternal = HermesInternal;
    let arr = items.push(<View key={"row-" + num} style={items1}>{fromResult.map((item, index) => {
      const obj2 = { marginBottom: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
      SkeletonCardDefault;
      return <tmp key={"" + num + "-" + arg1} width={width} style={obj2} />;
    })}</View>);
  }
  return <View style={tmp.skeletonGrid} accessibilityRole="list" accessibilityLabel={accessibilityLabel} accessibilityState={{ busy: true }} accessible>{items}</View>;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { skeletonGrid: { flex: 1, alignItems: "center" }, skeletonRow: obj2 };
obj2 = { flexDirection: "row", gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, paddingBottom: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/FeedProductList.tsx");

export default function FeedProductList(arg0) {
  let accessibilityLabel;
  let products;
  let tmp7;
  ({ products, accessibilityLabel } = arg0);
  if (0 === products.length) {
    tmp7 = <SkeletonGrid loadingCardsNum={tmp} accessibilityLabel={accessibilityLabel} />;
  } else {
    tmp7 = jsx(CollectiblesShopCardsGridDefault, { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 });
  }
  return tmp7;
};
