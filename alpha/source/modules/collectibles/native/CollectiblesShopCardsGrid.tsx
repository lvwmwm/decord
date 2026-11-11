// Module ID: 18397
// Function ID: 18398
// Name: CollectiblesShopCardsGrid
// Dependencies: [19, 17, 8419, 21, 5243, 10349, 9353, 18396, 12, 2]
// Exports: default

// Module 18397 (CollectiblesShopCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9353 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 10349 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8419 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
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
  const memo = react.useMemo(() => ({ tilePosition: index }), items);
  const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
  return <CollectiblesAnalyticsProvider newValue={memo}>{null}</CollectiblesAnalyticsProvider>;
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let obj = { rowContainer: obj2 };
obj2 = { flexDirection: "row", gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default function CollectiblesShopCardsGrid(products) {
  let closure_4;
  let disableBundleStaticBackground;
  let muteBundleStaticBackground;
  let onLayout;
  let onScroll;
  let paddingBottom;
  let paddingTop;
  let preferVCPrice;
  let ref;
  let rowWidth;
  let scrollEnabled;
  products = products.products;
  ({ category: importDefault, preferVCPrice: dependencyMap, scrollEnabled } = products);
  const accessibilityLabel = products.accessibilityLabel;
  if (scrollEnabled === undefined) {
    scrollEnabled = false;
  }
  ({ disableBundleStaticBackground: react, muteBundleStaticBackground: closure_4 } = products);
  ({ onScroll, paddingTop, paddingBottom } = products);
  const rowContainer = closure_8();
  let obj = products(18396);
  const cardLayout = obj.useCardLayout();
  const columns = cardLayout.columns;
  const cardWidth = cardLayout.cardWidth;
  const items = [products, columns];
  ({ rowWidth, ref, onLayout } = cardLayout);
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.chunk(products, columns);
  }, items);
  const obj2 = {
    accessibilityLabel,
    accessibilityRole: "list",
    scrollEnabled,
    showsVerticalScrollIndicator: false,
    onScroll,
    ref,
    onLayout,
    contentContainerStyle: { gap: products(10349).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" },
    children: memo.map((arr, index) => {
      let closure_0 = index;
      let obj = {
        style: rowContainer.rowContainer,
        children: arr.map((product, index) => {
          let unpublishedAt;
          let categoryForProduct = importDefault;
          if (importDefault == null) {
            categoryForProduct = CollectiblesCategoryStore.getCategoryForProduct(product.skuId);
          }
          const obj = { product, index: index * columns + index, cardWidth, unpublishedAt, preferVCPrice: dependencyMap, disableBundleStaticBackground: react, muteBundleStaticBackground };
          unpublishedAt = undefined;
          const tmp3 = jsx;
          const tmp4 = ShopCardGridItem;
          if (categoryForProduct != null) {
            unpublishedAt = categoryForProduct.unpublishedAt;
          }
          return tmp3(tmp4, obj, product.skuId);
        })
      };
      return cardWidth(muteBundleStaticBackground, obj, index);
    })
  };
  ({ gap: products(10349).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" });
  return cardWidth(rowContainer, obj2);
};
