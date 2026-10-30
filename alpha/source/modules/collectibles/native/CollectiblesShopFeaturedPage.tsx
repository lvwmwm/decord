// Module ID: 17787
// Function ID: 17788
// Name: CollectiblesShopFeaturedPage
// Dependencies: [19, 17, 1074, 21, 5009, 1188, 8797, 1114, 17788, 2]
// Exports: default

// Module 17787 (CollectiblesShopFeaturedPage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import NoResults from "NoResults" /* 8797 */;
import ShopBlockItemDefault from "ShopBlockItem" /* 17788 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default function _default(shopBlock) {
  let intl;
  shopBlock = shopBlock.shopBlock;
  const fetchShopHomeError = shopBlock.fetchShopHomeError;
  const tmp = closure_6();
  if (null === fetchShopHomeError) {
    let tmp6;
    if (undefined !== shopBlock) {
      tmp6 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
    }
    return tmp6;
  }
  ({ style: { marginTop: 42 }, Illustration: NoResults.NoResults, body: intl.string(intl2.t.eAn6z2) });
  const EmptyState = native.EmptyState;
  intl = intl2.intl;
  tmp6 = <View style={tmp.container}>{null}</View>;
};
