// Module ID: 14612
// Function ID: 14613
// Name: block
// Dependencies: [19, 17, 5798, 21, 4189, 712, 589, 5829, 8663, 14613, 14622, 14623, 14625, 14632, 14633, 2]
// Exports: default

// Module 14612 (block)
import noop from "noop";
import { View } from "get ActivityIndicator";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { shopBlockSpacing: null };
createCacheKey = { marginTop: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("updateCategoriesAndProducts").fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default function _default(block) {
  let framesBannerBlock;
  let preferVCPrice;
  let screen;
  block = block.block;
  ({ screen, preferVCPrice, framesBannerBlock } = block);
  let stateFromStores;
  let stateFromStores1;
  const tmp = createCacheKey();
  let obj = block(stateFromStores1[6]);
  const items = [updateCategoriesAndProducts];
  stateFromStores = obj.useStateFromStores(items, () => updateCategoriesAndProducts.categories);
  let obj1 = block(stateFromStores1[6]);
  const items1 = [updateCategoriesAndProducts];
  stateFromStores1 = obj1.useStateFromStores(items1, () => updateCategoriesAndProducts.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = React.useMemo(() => {
    if (block.type === block(stateFromStores1[7]).ShopBlockType.HERO) {
      const _HermesInternal3 = HermesInternal;
      let combined = "hero-" + tmp.categoryStoreListingId;
    } else if (tmp.type === block(stateFromStores1[7]).ShopBlockType.REWARD_HERO) {
      const _HermesInternal2 = HermesInternal;
      combined = "reward-hero-" + tmp.categoryStoreListingId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
    }
    return combined;
  }, items2);
  const type = block.type;
  if (block(stateFromStores1[7]).ShopBlockType.HERO === type) {
    obj = { newValue: null, children: null };
    obj[0] = { pageSection: "top 4" };
    if (null != framesBannerBlock) {
      obj = { heroBlock: null, bannerBlock: null, preferVCPrice: null, screen: null };
      obj[0] = block;
      obj[1] = framesBannerBlock;
      obj[2] = preferVCPrice;
      obj[3] = screen;
      let tmp19Result = tmp19(stateFromStores(tmp3[9]), obj, memo);
    } else {
      obj1 = { heroBlock: null, preferVCPrice: null, screen: null };
      obj1[0] = block;
      obj1[1] = preferVCPrice;
      obj1[2] = screen;
      tmp19Result = tmp19(stateFromStores(tmp3[10]), obj1, memo);
    }
    obj[1] = tmp19Result;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else if (tmp2(tmp3[7]).ShopBlockType.FEATURED === type) {
    const obj2 = { newValue: null, children: null };
    obj2[0] = { pageSection: "featured_block" };
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.shopBlockSpacing;
    const obj4 = { featuredBlock: null };
    obj4[0] = block;
    obj3[1] = jsx(stateFromStores(tmp3[11]), { featuredBlock: null });
    obj2[1] = <View key={memo} style={null}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else if (tmp2(tmp3[7]).ShopBlockType.FEED === type) {
    const obj5 = { newValue: null, children: null };
    obj5[0] = { pageSection: "popular picks" };
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.shopBlockSpacing;
    const obj7 = { feedBlock: null, screen: null, preferVCPrice: null, disableBundleStaticBackground: true };
    obj7[0] = block;
    obj7[1] = screen;
    obj7[2] = preferVCPrice;
    obj6[1] = jsx(stateFromStores(tmp3[12]), { feedBlock: null, screen: null, preferVCPrice: null, disableBundleStaticBackground: true }, memo);
    obj5[1] = <View style={null}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else if (tmp2(tmp3[7]).ShopBlockType.FRAMES_PRODUCT_SHELF === type) {
    const obj8 = { newValue: null, children: null };
    obj8[0] = { pageSection: "frames_product_shelf" };
    const obj9 = { block: null, preferVCPrice: null };
    obj9[0] = block;
    obj9[1] = preferVCPrice;
    obj8[1] = jsx(stateFromStores(tmp3[13]), { block: null, preferVCPrice: null }, memo);
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else if (tmp2(tmp3[7]).ShopBlockType.SHELF === type) {
    const obj10 = { newValue: null, children: null };
    const obj11 = { pageSection: null };
    obj11[0] = block.name;
    obj10[0] = obj11;
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.shopBlockSpacing;
    const obj13 = { block: null, preferVCPrice: null };
    obj13[0] = block;
    obj13[1] = preferVCPrice;
    obj12[1] = jsx(stateFromStores(tmp3[14]), { block: null, preferVCPrice: null }, memo);
    obj10[1] = <View style={null}>{null}</View>;
    return jsx(tmp2(tmp3[8]).CollectiblesAnalyticsProvider, { newValue: null, children: null });
  } else {
    if (tmp2(tmp3[7]).ShopBlockType.WIDE_BANNER !== type) {
      const FRAMES_BANNER = tmp2(tmp3[7]).ShopBlockType.FRAMES_BANNER;
    }
    return null;
  }
};
