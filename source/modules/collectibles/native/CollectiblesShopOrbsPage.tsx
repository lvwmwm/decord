// Module ID: 14557
// Function ID: 111079
// Name: onRenderFirstOrbsItem
// Dependencies: [31, 27, 6774, 655, 33, 4130, 5462, 8707, 14527, 4098, 8775, 14531, 1273, 8547, 1212, 14556, 2]
// Exports: default

// Module 14557 (onRenderFirstOrbsItem)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { display: "flex", flex: 1 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default function _default(arg0) {
  let fetchShopHomeError;
  let getItemType;
  let onRenderFirstOrbsItem;
  let shopBlocks;
  ({ shopBlocks, onRenderFirstOrbsItem } = arg0);
  ({ fetchShopHomeError, getItemType } = arg0);
  analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[6])().analyticsLocations;
  let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]);
  collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  let obj1 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[8]);
  const collectiblesShopDeepLinkProps = obj1.useCollectiblesShopDeepLinkProps({});
  const initialProductSkuId = collectiblesShopDeepLinkProps.initialProductSkuId;
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const initialCategorySkuId = collectiblesShopDeepLinkProps.initialCategorySkuId;
  const items = [initialProductSkuId, initialVariantIndex, initialCategorySkuId, analyticsLocations, collectiblesAnalyticsContext];
  const effect = initialProductSkuId.useEffect(() => {
    if (null != initialProductSkuId) {
      if (null != initialCategorySkuId) {
        const category = initialCategorySkuId.getCategory(initialCategorySkuId);
        let found;
        if (null != category) {
          const products = category.products;
          found = products.find((skuId) => skuId.skuId === outer1_3);
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
      let tmp9 = jsx(analyticsLocations(collectiblesAnalyticsContext[15]), { data: shopBlocks, renderItem: tmp5, getItemType });
    }
    return tmp9;
  }
  obj = { style: callback().container };
  obj1 = { style: { marginTop: 42 }, Illustration: onRenderFirstOrbsItem(collectiblesAnalyticsContext[13]).NoResults };
  const intl = onRenderFirstOrbsItem(collectiblesAnalyticsContext[14]).intl;
  obj1.body = intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[14]).t.eAn6z2);
  obj.children = jsx(onRenderFirstOrbsItem(collectiblesAnalyticsContext[12]).EmptyState, { style: { marginTop: 42 }, Illustration: onRenderFirstOrbsItem(collectiblesAnalyticsContext[13]).NoResults });
  tmp9 = <initialVariantIndex style={callback().container} />;
};
