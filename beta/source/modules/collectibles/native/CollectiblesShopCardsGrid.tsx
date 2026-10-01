// Module ID: 15443
// Function ID: 15444
// Name: CollectiblesShopCardsGrid
// Dependencies: [19, 17, 6962, 21, 4836, 8226, 8229, 15442, 12, 2]
// Exports: default

// Module 15443 (CollectiblesShopCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8226 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8229 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import createStyles from "createStyles" /* 4836 */;
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
  let onScroll;
  let paddingBottom;
  let paddingTop;
  let preferVCPrice;
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
  let obj = products(15442);
  const cardLayout = obj.useCardLayout();
  const columns = cardLayout.columns;
  const cardWidth = cardLayout.cardWidth;
  const items = [products, columns];
  const rowWidth = cardLayout.rowWidth;
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
    contentContainerStyle: { gap: products(8226).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" },
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
  ({ gap: products(8226).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" });
  return cardWidth(rowContainer, obj2);
};
