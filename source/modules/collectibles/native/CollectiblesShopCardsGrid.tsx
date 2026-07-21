// Module ID: 14365
// Function ID: 108443
// Name: ShopCardGridItem
// Dependencies: []
// Exports: default

// Module 14365 (ShopCardGridItem)
function ShopCardGridItem(index) {
  let cardWidth;
  let disableBundleStaticBackground;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let product;
  let unpublishedAt;
  index = index.index;
  const arg1 = index;
  const items = [index];
  ({ product, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = index);
  const memo = React.useMemo(() => ({ tilePosition: index }), items);
  const obj = { newValue: memo, children: jsx(importDefault(dependencyMap[5]), { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground }) };
  return jsx(arg1(dependencyMap[6]).CollectiblesAnalyticsProvider, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { gap: arg1(dependencyMap[5]).COLLECTIBLES_SHOP_CARD_GAP };
obj.rowContainer = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default function CollectiblesShopCardsGrid(accessibilityLabel) {
  let onScroll;
  let paddingBottom;
  let paddingTop;
  let scrollEnabled;
  const products = accessibilityLabel.products;
  const arg1 = products;
  ({ category: closure_1, preferVCPrice: closure_2, scrollEnabled } = accessibilityLabel);
  if (scrollEnabled === undefined) {
    scrollEnabled = false;
  }
  ({ disableBundleStaticBackground: closure_3, muteBundleStaticBackground: closure_4 } = accessibilityLabel);
  let closure_5;
  let closure_6;
  let jsx;
  ({ onScroll, paddingTop, paddingBottom } = accessibilityLabel);
  closure_5 = callback();
  let obj = arg1(dependencyMap[7]);
  const cardLayout = obj.useCardLayout();
  const columns = cardLayout.columns;
  closure_6 = columns;
  jsx = cardLayout.cardWidth;
  const items = [products, columns];
  const memo = React.useMemo(() => callback(closure_2[8]).chunk(products, columns), items);
  obj = { accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityRole: "list", scrollEnabled, showsVerticalScrollIndicator: false, onScroll };
  obj = { gap: arg1(dependencyMap[5]).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom };
  obj.contentContainerStyle = obj;
  obj.children = memo.map((arr) => {
    const products = arg1;
    return cardWidth(closure_4, {
      style: rowContainer.rowContainer,
      children: arr.map((product) => {
        if (null != closure_1) {
          let categoryForProduct = closure_1;
        } else {
          categoryForProduct = categoryForProduct.getCategoryForProduct(product.skuId);
        }
        const obj = { product, index: arg1 * categoryForProduct + arg1, cardWidth: closure_7 };
        let unpublishedAt;
        if (null != categoryForProduct) {
          unpublishedAt = categoryForProduct.unpublishedAt;
        }
        obj.unpublishedAt = unpublishedAt;
        obj.preferVCPrice = closure_2;
        obj.disableBundleStaticBackground = closure_3;
        obj.muteBundleStaticBackground = closure_4;
        return closure_7(closure_9, obj, product.skuId);
      })
    }, arg1);
  });
  return <closure_5 {...obj} />;
};
