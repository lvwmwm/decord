// Module ID: 14366
// Function ID: 108466
// Name: SkeletonGrid
// Dependencies: []
// Exports: default

// Module 14366 (SkeletonGrid)
function SkeletonGrid(accessibilityLabel) {
  const loadingCardsNum = accessibilityLabel.loadingCardsNum;
  const arg1 = loadingCardsNum;
  const tmp = callback();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[5]);
  const cardLayout = obj.useCardLayout();
  const columns = cardLayout.columns;
  const dependencyMap = columns;
  ({ cardWidth: closure_3, rowWidth: closure_4 } = cardLayout);
  const items = [];
  const callback = items;
  for (let num = 0; num < loadingCardsNum; num = num + columns) {
    let tmp3 = function _loop(arg0) {
      const loadingCardsNum = arg0;
      let obj = { length: Math.min(columns, loadingCardsNum - arg0) };
      let arr = Array.from(obj);
      obj = {
        style: items,
        children: arr.map((arg0, arg1) => {
          let obj = { width: closure_3 };
          obj = { marginBottom: arg0(closure_2[4]).COLLECTIBLES_SHOP_CARD_GAP };
          obj.style = obj;
          return callback2(callback(closure_2[6]), obj, "" + arg0 + "-" + arg1);
        })
      };
      const items = [tmp.skeletonRow, ];
      obj = { width: callback };
      items[1] = obj;
      arr = items.push(callback(closure_3, obj, "row-" + arg0));
    }(num);
  }
  obj = { style: tmp.skeletonGrid, accessibilityRole: "list", accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityState: { busy: true }, accessible: true, children: items };
  return <View {...obj} />;
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = { skeletonGrid: { 9223372036854775807: "values", 9223372036854775807: "Array" } };
obj = { flexDirection: "row", gap: arg1(dependencyMap[4]).COLLECTIBLES_SHOP_CARD_GAP, paddingBottom: arg1(dependencyMap[4]).COLLECTIBLES_SHOP_CARD_GAP, paddingHorizontal: arg1(dependencyMap[4]).COLLECTIBLES_SHOP_CARD_GAP };
obj.skeletonRow = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/native/FeedProductList.tsx");

export default function FeedProductList(arg0) {
  let accessibilityLabel;
  let products;
  ({ products, accessibilityLabel } = arg0);
  if (0 === products.length) {
    let obj = { loadingCardsNum: tmp, accessibilityLabel };
    let tmp7 = <SkeletonGrid {...obj} />;
  } else {
    obj = { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 };
    tmp7 = jsx(importDefault(dependencyMap[7]), obj);
  }
  return tmp7;
};
