// Module ID: 14530
// Function ID: 110947
// Dependencies: [31, 27, 655, 33, 4130, 1273, 8547, 1212, 14531, 2]
// Exports: default

// Module 14530
import "result";
import { View } from "get ActivityIndicator";
import { CollectiblesMobileShopScreen as closure_4 } from "items";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("items").fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default function _default(shopBlock) {
  let fetchShopHomeError;
  let framesBannerBlock;
  shopBlock = shopBlock.shopBlock;
  ({ fetchShopHomeError, framesBannerBlock } = shopBlock);
  if (null === fetchShopHomeError) {
    if (undefined !== shopBlock) {
      let obj = { block: shopBlock, screen: constants.FEATURED_PAGE, framesBannerBlock };
      let tmp6 = jsx(importDefault(14531), { block: shopBlock, screen: constants.FEATURED_PAGE, framesBannerBlock });
    }
    return tmp6;
  }
  obj = { style: callback().container };
  obj = { style: { marginTop: 42 }, Illustration: require(8547) /* getNoResultsSource */.NoResults };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.body = intl.string(require(1212) /* getSystemLocale */.t.eAn6z2);
  obj.children = jsx(require(1273) /* Button */.EmptyState, { style: { marginTop: 42 }, Illustration: require(8547) /* getNoResultsSource */.NoResults });
  tmp6 = <View style={{ marginTop: 42 }} Illustration={require(8547) /* getNoResultsSource */.NoResults} />;
};
