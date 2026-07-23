// Module ID: 14490
// Function ID: 110671
// Name: ShopCardGridItem
// Dependencies: [31, 27, 6774, 33, 4130, 8663, 8666, 14489, 22, 2]
// Exports: default

// Module 14490 (ShopCardGridItem)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function ShopCardGridItem(index) {
  let cardWidth;
  let disableBundleStaticBackground;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let product;
  let unpublishedAt;
  index = index.index;
  const items = [index];
  ({ product, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = index);
  const memo = React.useMemo(() => ({ tilePosition: index }), items);
  const obj = { newValue: memo, children: jsx(importDefault(8663), { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground }) };
  return jsx(index(8666).CollectiblesAnalyticsProvider, { newValue: memo, children: jsx(importDefault(8663), { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground }) });
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { justifyContent: "center", flexDirection: "row", gap: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP };
_createForOfIteratorHelperLoose.rowContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default function CollectiblesShopCardsGrid(accessibilityLabel) {
  let result;
  let closure_4;
  let dependencyMap;
  let importDefault;
  let onScroll;
  let paddingBottom;
  let paddingTop;
  let scrollEnabled;
  const products = accessibilityLabel.products;
  ({ category: importDefault, preferVCPrice: dependencyMap, scrollEnabled } = accessibilityLabel);
  if (scrollEnabled === undefined) {
    scrollEnabled = false;
  }
  ({ disableBundleStaticBackground: result, muteBundleStaticBackground: closure_4 } = accessibilityLabel);
  let closure_5;
  let columns;
  let cardWidth;
  ({ onScroll, paddingTop, paddingBottom } = accessibilityLabel);
  closure_5 = _createForOfIteratorHelperLoose();
  let obj = products(14489);
  const cardLayout = obj.useCardLayout();
  columns = cardLayout.columns;
  cardWidth = cardLayout.cardWidth;
  const items = [products, columns];
  const memo = React.useMemo(() => outer1_1(outer1_2[8]).chunk(products, columns), items);
  obj = { accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityRole: "list", scrollEnabled, showsVerticalScrollIndicator: false, onScroll };
  obj = { gap: products(8663).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom };
  obj.contentContainerStyle = obj;
  obj.children = memo.map((arr) => {
    let closure_0 = arg1;
    return cardWidth(outer1_4, {
      style: rowContainer.rowContainer,
      children: arr.map((product) => {
        if (null != outer1_1) {
          let categoryForProduct = outer1_1;
        } else {
          categoryForProduct = columns.getCategoryForProduct(product.skuId);
        }
        const obj = { product, index: closure_0 * outer1_6 + arg1, cardWidth: outer1_7 };
        let unpublishedAt;
        if (null != categoryForProduct) {
          unpublishedAt = categoryForProduct.unpublishedAt;
        }
        obj.unpublishedAt = unpublishedAt;
        obj.preferVCPrice = outer1_2;
        obj.disableBundleStaticBackground = outer1_3;
        obj.muteBundleStaticBackground = outer1_4;
        return cardWidth(outer2_9, obj, product.skuId);
      })
    }, arg1);
  });
  return cardWidth(closure_5, obj);
};
