// Module ID: 14836
// Function ID: 14837
// Dependencies: [19, 17, 678, 21, 4303, 1297, 8827, 1236, 14837, 2]
// Exports: default

// Module 14836
import "noop";
import { View } from "get ActivityIndicator";
import { CollectiblesMobileShopScreen as closure_4 } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("items").fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default function _default(shopBlock) {
  shopBlock = shopBlock.shopBlock;
  if (null === shopBlock.fetchShopHomeError) {
    if (undefined !== shopBlock) {
      let obj = { block: null, screen: null };
      obj[0] = shopBlock;
      obj[1] = constants.FEATURED_PAGE;
      let tmp6 = jsx(importDefault(14837), { block: null, screen: null });
    }
    return tmp6;
  }
  obj = { style: callback().container, children: null };
  obj = { style: { marginTop: 42 }, Illustration: null, body: null };
  obj[1] = require(8827) /* getNoResultsSource */.NoResults;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.eAn6z2);
  obj[1] = jsx(require(1297) /* Button */.EmptyState, { style: { marginTop: 42 }, Illustration: null, body: null });
  tmp6 = <View style={{ marginTop: 42 }} Illustration={null} body={null} />;
};
