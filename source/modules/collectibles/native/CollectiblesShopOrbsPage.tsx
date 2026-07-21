// Module ID: 14385
// Function ID: 108560
// Name: onRenderFirstOrbsItem
// Dependencies: []
// Exports: default

// Module 14385 (onRenderFirstOrbsItem)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).CollectiblesMobileShopScreen;
const jsx = arg1(dependencyMap[4]).jsx;
let closure_8 = arg1(dependencyMap[5]).createStyles({ container: {} });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default function _default(arg0) {
  let fetchShopHomeError;
  let getItemType;
  let onRenderFirstOrbsItem;
  let shopBlocks;
  ({ shopBlocks, onRenderFirstOrbsItem } = arg0);
  const arg1 = onRenderFirstOrbsItem;
  ({ fetchShopHomeError, getItemType } = arg0);
  const analyticsLocations = importDefault(dependencyMap[6])().analyticsLocations;
  const importDefault = analyticsLocations;
  let obj = arg1(dependencyMap[7]);
  const collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  const dependencyMap = collectiblesAnalyticsContext;
  let obj1 = arg1(dependencyMap[8]);
  const collectiblesShopDeepLinkProps = obj1.useCollectiblesShopDeepLinkProps({});
  const initialProductSkuId = collectiblesShopDeepLinkProps.initialProductSkuId;
  const React = initialProductSkuId;
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const View = initialVariantIndex;
  const initialCategorySkuId = collectiblesShopDeepLinkProps.initialCategorySkuId;
  let closure_5 = initialCategorySkuId;
  const items = [initialProductSkuId, initialVariantIndex, initialCategorySkuId, analyticsLocations, collectiblesAnalyticsContext];
  const effect = React.useEffect(() => {
    if (null != initialProductSkuId) {
      if (null != initialCategorySkuId) {
        const category = initialCategorySkuId.getCategory(initialCategorySkuId);
        let found;
        if (null != category) {
          const products = category.products;
          found = products.find((skuId) => skuId.skuId === closure_3);
        }
        if (null != found) {
          let obj = analyticsLocations(collectiblesAnalyticsContext[9]);
          obj.hideActionSheet();
          obj = { product: found, initialVariantIndex, analyticsLocations };
          let tmp9;
          if (null != collectiblesAnalyticsContext) {
            tmp9 = collectiblesAnalyticsContext;
          }
          obj.shopAnalyticsContext = tmp9;
          const result = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]).openProductDetailsActionSheet(obj);
          const obj2 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[10]);
        }
      }
    }
  }, items);
  [][0] = onRenderFirstOrbsItem;
  if (null === fetchShopHomeError) {
    if (0 !== shopBlocks.length) {
      obj = { data: shopBlocks, renderItem: tmp5, getItemType };
      let tmp9 = jsx(importDefault(dependencyMap[15]), obj);
    }
    return tmp9;
  }
  obj = { style: callback().container };
  obj1 = { style: { marginTop: 42 }, Illustration: arg1(dependencyMap[13]).NoResults };
  const intl = arg1(dependencyMap[14]).intl;
  obj1.body = intl.string(arg1(dependencyMap[14]).t.eAn6z2);
  obj.children = jsx(arg1(dependencyMap[12]).EmptyState, obj1);
  tmp9 = <View {...obj} />;
};
