// Module ID: 14348
// Function ID: 108373
// Dependencies: []
// Exports: default

// Module 14348
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).CollectiblesMobileShopScreen;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles({ container: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default function _default(shopBlock) {
  let fetchShopHomeError;
  let framesBannerBlock;
  shopBlock = shopBlock.shopBlock;
  ({ fetchShopHomeError, framesBannerBlock } = shopBlock);
  if (null === fetchShopHomeError) {
    if (undefined !== shopBlock) {
      let obj = { block: shopBlock, screen: constants.FEATURED_PAGE, framesBannerBlock };
      let tmp6 = jsx(importDefault(dependencyMap[8]), obj);
    }
    return tmp6;
  }
  obj = { style: callback().container };
  obj = { style: { marginTop: 42 }, Illustration: arg1(dependencyMap[6]).NoResults };
  const intl = arg1(dependencyMap[7]).intl;
  obj.body = intl.string(arg1(dependencyMap[7]).t.eAn6z2);
  obj.children = jsx(arg1(dependencyMap[5]).EmptyState, obj);
  tmp6 = <View {...obj} />;
};
