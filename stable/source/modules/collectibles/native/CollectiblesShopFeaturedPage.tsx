// Module ID: 16140
// Function ID: 16141
// Name: CollectiblesShopFeaturedPage
// Dependencies: [19, 17, 1076, 21, 4788, 1177, 8533, 1115, 16141, 2]
// Exports: default

// Module 16140 (CollectiblesShopFeaturedPage)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import generated_NoResults from "generated/NoResults" /* 8533 */;
import ShopBlockItemDefault from "ShopBlockItem" /* 16141 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const constants = fn(1076).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let closure_6 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default function _default(shopBlock) {
  shopBlock = shopBlock.shopBlock;
  if (null === shopBlock.fetchShopHomeError) {
    if (undefined !== shopBlock) {
      const obj = { block: shopBlock, screen: constants.FEATURED_PAGE };
      let tmp6 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
    }
    return tmp6;
  }
  const obj2 = { style: closure_6().container, children: null };
  const obj3 = { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null };
  const intl = util.intl;
  obj3.body = intl.string(util.t.eAn6z2);
  obj2.children = jsx(native.EmptyState, { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null });
  tmp6 = <View style={closure_6().container}>{null}</View>;
};
