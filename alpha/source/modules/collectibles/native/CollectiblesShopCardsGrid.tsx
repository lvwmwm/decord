// Module ID: 16144
// Function ID: 16145
// Name: CollectiblesShopCardsGrid
// Dependencies: [19, 17, 7257, 21, 5091, 8948, 558, 576, 8951, 16143, 12, 2]

// Module 16144 (CollectiblesShopCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8948 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CollectiblesShopCardV2Default = CollectiblesShopCardV2;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp;
const CollectiblesAnalyticsContext = tmp(8951);
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let obj = { rowContainer: obj2 };
obj2 = { flexDirection: "row", gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopCardGridItem(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let index;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let product;
  let tmp4;
  let unpublishedAt;
  const obj = react2;
  const cResult = obj.c(12);
  ({ product, index, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  if (cResult[0] !== index) {
    const obj2 = { tilePosition: index };
    cResult[0] = index;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === cardWidth) {
    if (cResult[3] === disableBundleStaticBackground) {
      if (cResult[4] === muteBundleStaticBackground) {
        if (cResult[5] === preferVCPrice) {
          if (cResult[6] === product) {
            let tmp5;
            if (cResult[7] === unpublishedAt) {
              tmp5 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              let tmp7;
              if (cResult[10] === tmp4) {
                tmp7 = cResult[11];
              }
              return tmp7;
            }
            const tmp9 = jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp4, children: tmp5 });
            cResult[9] = tmp5;
            cResult[10] = tmp4;
            cResult[11] = tmp9;
            tmp7 = tmp9;
          }
        }
      }
    }
  }
  const tmp6 = jsx(CollectiblesShopCardV2Default, { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground });
  cResult[2] = cardWidth;
  cResult[3] = disableBundleStaticBackground;
  cResult[4] = muteBundleStaticBackground;
  cResult[5] = preferVCPrice;
  cResult[6] = product;
  cResult[7] = unpublishedAt;
  cResult[8] = tmp6;
  tmp5 = tmp6;
}) : (function ShopCardGridItem(index) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesShopCardsGrid(preferVCPrice) {
  let accessibilityLabel;
  let category;
  let disableBundleStaticBackground;
  let onScroll;
  let paddingBottom;
  let paddingTop;
  let products;
  let scrollEnabled;
  let obj = category(disableBundleStaticBackground[7]);
  const cResult = obj.c(30);
  ({ products, accessibilityLabel, category } = preferVCPrice);
  preferVCPrice = preferVCPrice.preferVCPrice;
  ({ scrollEnabled, onScroll, paddingTop, paddingBottom, disableBundleStaticBackground } = preferVCPrice);
  const muteBundleStaticBackground = preferVCPrice.muteBundleStaticBackground;
  let tmp4 = undefined !== scrollEnabled && scrollEnabled;
  const tmp5 = closure_8();
  const rowContainer = tmp5;
  const tmpResult = category(disableBundleStaticBackground[9]);
  const cardLayout = tmpResult.useCardLayout();
  const columns = cardLayout.columns;
  const cardWidth = cardLayout.cardWidth;
  const rowWidth = cardLayout.rowWidth;
  if (cResult[0] === columns) {
    let arr;
    if (cResult[1] === products) {
      arr = cResult[2];
    }
    if (cResult[3] === paddingBottom) {
      if (cResult[4] === paddingTop) {
        let tmp8;
        let tmp9;
        if (cResult[5] === rowWidth) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === cardWidth) {
          if (cResult[8] === category) {
            if (cResult[9] === disableBundleStaticBackground) {
              if (cResult[10] === muteBundleStaticBackground) {
                if (cResult[11] === columns) {
                  if (cResult[12] === preferVCPrice) {
                    if (cResult[13] === arr) {
                      if (cResult[14] === tmp5) {
                        tmp9 = cResult[15];
                      }
                      if (cResult[24] === accessibilityLabel) {
                        if (cResult[25] === onScroll) {
                          if (cResult[26] === tmp4) {
                            if (cResult[27] === tmp8) {
                              let tmp12;
                              if (cResult[28] === tmp9) {
                                tmp12 = cResult[29];
                              }
                              return tmp12;
                            }
                          }
                        }
                      }
                      const tmp15 = <columns accessibilityLabel={accessibilityLabel} accessibilityRole="list" scrollEnabled={tmp4} showsVerticalScrollIndicator={false} onScroll={onScroll} contentContainerStyle={tmp8}>{tmp9}</columns>;
                      cResult[24] = accessibilityLabel;
                      cResult[25] = onScroll;
                      cResult[26] = tmp4;
                      cResult[27] = tmp8;
                      cResult[28] = tmp9;
                      cResult[29] = tmp15;
                      tmp12 = tmp15;
                    }
                  }
                }
              }
            }
          }
        }
        if (cResult[16] === cardWidth) {
          if (cResult[17] === category) {
            if (cResult[18] === disableBundleStaticBackground) {
              if (cResult[19] === muteBundleStaticBackground) {
                if (cResult[20] === columns) {
                  if (cResult[21] === preferVCPrice) {
                    let tmp10;
                    if (cResult[22] === tmp5) {
                      tmp10 = cResult[23];
                    }
                    const mapped = arr.map(tmp10);
                    cResult[7] = cardWidth;
                    cResult[8] = category;
                    cResult[9] = disableBundleStaticBackground;
                    cResult[10] = muteBundleStaticBackground;
                    cResult[11] = columns;
                    cResult[12] = preferVCPrice;
                    cResult[13] = arr;
                    cResult[14] = tmp5;
                    cResult[15] = mapped;
                    tmp9 = mapped;
                  }
                }
              }
            }
          }
        }
        const fn = function x(arr, arg1) {
          let closure_0 = arg1;
          return <rowContainer key={arg1} style={rowContainer.rowContainer}>{arg0.map((product, index) => {
            let unpublishedAt;
            let categoryForProduct = category;
            if (category == null) {
              categoryForProduct = CollectiblesCategoryStore.getCategoryForProduct(product.skuId);
            }
            const obj = { product, index: closure_0 * columns + index, cardWidth, unpublishedAt, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground };
            unpublishedAt = undefined;
            const tmp3 = jsx;
            const tmp4 = closure_9;
            if (categoryForProduct != null) {
              unpublishedAt = categoryForProduct.unpublishedAt;
            }
            return tmp3(tmp4, obj, product.skuId);
          })}</rowContainer>;
        };
        cResult[16] = cardWidth;
        cResult[17] = category;
        cResult[18] = disableBundleStaticBackground;
        cResult[19] = muteBundleStaticBackground;
        cResult[20] = columns;
        cResult[21] = preferVCPrice;
        cResult[22] = tmp5;
        cResult[23] = fn;
        tmp10 = fn;
      }
    }
    const obj4 = { gap: category(disableBundleStaticBackground[5]).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" };
    cResult[3] = paddingBottom;
    cResult[4] = paddingTop;
    cResult[5] = rowWidth;
    cResult[6] = obj4;
    tmp8 = obj4;
  }
  const obj3 = preferVCPrice(disableBundleStaticBackground[10]);
  const chunkResult = obj3.chunk(products, columns);
  cResult[0] = columns;
  cResult[1] = products;
  cResult[2] = chunkResult;
  arr = chunkResult;
}) : (function CollectiblesShopCardsGrid(products) {
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
  let obj = products(16143);
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
    contentContainerStyle: { gap: products(8948).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" },
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
          const tmp4 = closure_9;
          if (categoryForProduct != null) {
            unpublishedAt = categoryForProduct.unpublishedAt;
          }
          return tmp3(tmp4, obj, product.skuId);
        })
      };
      return cardWidth(muteBundleStaticBackground, obj, index);
    })
  };
  ({ gap: products(8948).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" });
  return cardWidth(rowContainer, obj2);
});
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default tmp3;
