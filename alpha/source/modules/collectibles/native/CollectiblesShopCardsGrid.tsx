// Module ID: 18515
// Function ID: 18516
// Name: CollectiblesShopCardsGrid
// Dependencies: [19, 17, 8485, 21, 5306, 10416, 9420, 18514, 12, 2]
// Exports: default

// Module 18515 (CollectiblesShopCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9420 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 10416 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8485 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const CollectiblesShopCardV2Default = CollectiblesShopCardV2;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
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
  const obj = { newValue: memo, children: metroImportDefault(CollectiblesShopCardV2Default, { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground }) };
  const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
  return metroImportDefault(CollectiblesAnalyticsProvider, obj);
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { rowContainer: obj2 };
obj2 = { flexDirection: "row", gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default function CollectiblesShopCardsGrid(products) {
  let closure_4;
  let disableBundleStaticBackground;
  let header;
  let items1;
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
  ({ onScroll, paddingTop, paddingBottom, header } = products);
  const rowContainer = closure_9();
  let obj = products(18514);
  const cardLayout = obj.useCardLayout();
  const columns = cardLayout.columns;
  const cardWidth = cardLayout.cardWidth;
  const items = [products, columns];
  ({ rowWidth, ref, onLayout } = cardLayout);
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.chunk(products, columns);
  }, items);
  const obj2 = { accessibilityLabel, accessibilityRole: "list", scrollEnabled, showsVerticalScrollIndicator: false, onScroll, ref, onLayout, contentContainerStyle: { gap: products(10416).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" }, children: items1 };
  items1 = [header, ];
  ({ gap: products(10416).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" });
  items1[1] = memo.map((arr, index) => {
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
        const tmp3 = metroImportDefault;
        const tmp4 = ShopCardGridItem;
        if (categoryForProduct != null) {
          unpublishedAt = categoryForProduct.unpublishedAt;
        }
        return tmp3(tmp4, obj, product.skuId);
      })
    };
    return cardWidth(muteBundleStaticBackground, obj, index);
  });
  return closure_8(rowContainer, obj2);
};
