// Module ID: 15458
// Function ID: 15459
// Name: CollectiblesShopOrbsPage
// Dependencies: [19, 17, 6962, 1076, 21, 4836, 6583, 8229, 15424, 4800, 7621, 15430, 1177, 7678, 1115, 15457, 2]
// Exports: default

// Module 15458 (CollectiblesShopOrbsPage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet" /* 7621 */;
import ShopBlockItemDefault from "ShopBlockItem" /* 15430 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
let closure_6 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ container: { display: "flex", flex: 1 } });
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopOrbsPage.tsx");

export default function _default(arg0) {
  let fetchShopHomeError;
  let getItemType;
  let intl;
  let onRenderFirstOrbsItem;
  let shopBlocks;
  ({ shopBlocks, onRenderFirstOrbsItem } = arg0);
  let analyticsLocations;
  let collectiblesAnalyticsContext;
  ({ fetchShopHomeError, getItemType } = arg0);
  const tmp = closure_8();
  const tmp2 = analyticsLocations;
  analyticsLocations = analyticsLocations(collectiblesAnalyticsContext[6])().analyticsLocations;
  let obj = onRenderFirstOrbsItem(collectiblesAnalyticsContext[7]);
  collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  let obj2 = onRenderFirstOrbsItem(collectiblesAnalyticsContext[8]);
  const collectiblesShopDeepLinkProps = obj2.useCollectiblesShopDeepLinkProps({});
  const initialProductSkuId = collectiblesShopDeepLinkProps.initialProductSkuId;
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const initialCategorySkuId = collectiblesShopDeepLinkProps.initialCategorySkuId;
  const items = [initialProductSkuId, initialVariantIndex, initialCategorySkuId, analyticsLocations, collectiblesAnalyticsContext];
  const effect = initialProductSkuId.useEffect(() => {
    let tmp9;
    if (null != initialProductSkuId) {
      if (null != initialCategorySkuId) {
        const category = CollectiblesCategoryStore.getCategory(tmp11);
        let found;
        if (category != null) {
          const products = category.products;
          found = products.find((skuId) => skuId.skuId === initialProductSkuId);
        }
        if (null != found) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: tmp9 };
          const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
          openProductDetailsActionSheet2;
          const result = openProductDetailsActionSheet(obj2);
          tmp9 = collectiblesAnalyticsContext;
        }
      }
    }
  }, items);
  [][0] = onRenderFirstOrbsItem;
  if (null === fetchShopHomeError) {
    let tmp10;
    if (0 !== shopBlocks.length) {
      let tmp9 = jsx;
      tmp10 = jsx(tmp2(tmp3[15]), { data: shopBlocks, renderItem: tmp8, getItemType });
    }
    return tmp10;
  }
  ({ style: { marginTop: 42 }, Illustration: onRenderFirstOrbsItem(collectiblesAnalyticsContext[13]).NoResults, body: intl.string(onRenderFirstOrbsItem(collectiblesAnalyticsContext[14]).t.eAn6z2) });
  const EmptyState = tmp4(tmp3[12]).EmptyState;
  intl = tmp4(tmp3[14]).intl;
  tmp10 = <initialVariantIndex style={tmp.container}>{null}</initialVariantIndex>;
};
