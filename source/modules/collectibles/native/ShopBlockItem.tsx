// Module ID: 14531
// Function ID: 110949
// Name: block
// Dependencies: [31, 27, 6774, 33, 4130, 689, 566, 6805, 8707, 14532, 14541, 14542, 14544, 14551, 14552, 2]
// Exports: default

// Module 14531 (block)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.shopBlockSpacing = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default function _default(block) {
  let framesBannerBlock;
  let preferVCPrice;
  let screen;
  block = block.block;
  ({ screen, preferVCPrice, framesBannerBlock } = block);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = block(stateFromStores1[6]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.categories);
  let obj1 = block(stateFromStores1[6]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_5.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = React.useMemo(() => {
    if (block.type === block(stateFromStores1[7]).ShopBlockType.HERO) {
      const _HermesInternal3 = HermesInternal;
      let combined = "hero-" + block.categoryStoreListingId;
    } else if (block.type === block(stateFromStores1[7]).ShopBlockType.REWARD_HERO) {
      const _HermesInternal2 = HermesInternal;
      combined = "reward-hero-" + block.categoryStoreListingId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
    }
    return combined;
  }, items2);
  const type = block.type;
  if (block(stateFromStores1[7]).ShopBlockType.HERO === type) {
    obj = {};
    obj = { pageSection: "top 4" };
    obj.newValue = obj;
    if (null != framesBannerBlock) {
      obj1 = { heroBlock: block, bannerBlock: framesBannerBlock, preferVCPrice, screen };
      let tmp36 = jsx(stateFromStores(stateFromStores1[9]), { heroBlock: block, bannerBlock: framesBannerBlock, preferVCPrice, screen }, memo);
    } else {
      const obj2 = { heroBlock: block, preferVCPrice, screen };
      tmp36 = jsx(stateFromStores(stateFromStores1[10]), { heroBlock: block, preferVCPrice, screen }, memo);
    }
    obj.children = tmp36;
    return jsx(block(stateFromStores1[8]).CollectiblesAnalyticsProvider, { pageSection: "top 4" });
  } else if (block(stateFromStores1[7]).ShopBlockType.FEATURED === type) {
    const obj3 = {};
    const obj4 = { pageSection: "featured_block" };
    obj3.newValue = obj4;
    const obj5 = { style: tmp.shopBlockSpacing };
    const obj6 = { featuredBlock: block };
    obj5.children = jsx(stateFromStores(stateFromStores1[11]), { featuredBlock: block });
    obj3.children = <View key={memo} style={tmp.shopBlockSpacing} />;
    return jsx(block(stateFromStores1[8]).CollectiblesAnalyticsProvider, {});
  } else if (block(stateFromStores1[7]).ShopBlockType.FEED === type) {
    const obj7 = {};
    const obj8 = { pageSection: "popular picks" };
    obj7.newValue = obj8;
    const obj9 = { style: tmp.shopBlockSpacing };
    const obj10 = { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true };
    obj9.children = jsx(stateFromStores(stateFromStores1[12]), { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true }, memo);
    obj7.children = <View style={tmp.shopBlockSpacing} />;
    return jsx(block(stateFromStores1[8]).CollectiblesAnalyticsProvider, {});
  } else if (block(stateFromStores1[7]).ShopBlockType.FRAMES_PRODUCT_SHELF === type) {
    const obj11 = {};
    const obj12 = { pageSection: "frames_product_shelf" };
    obj11.newValue = obj12;
    const obj13 = { block, preferVCPrice };
    obj11.children = jsx(stateFromStores(stateFromStores1[13]), { block, preferVCPrice }, memo);
    return jsx(block(stateFromStores1[8]).CollectiblesAnalyticsProvider, {});
  } else if (block(stateFromStores1[7]).ShopBlockType.SHELF === type) {
    const obj14 = {};
    const obj15 = { pageSection: block.name };
    obj14.newValue = obj15;
    const obj16 = { style: tmp.shopBlockSpacing };
    const obj17 = { block, preferVCPrice };
    obj16.children = jsx(stateFromStores(stateFromStores1[14]), { block, preferVCPrice }, memo);
    obj14.children = <View style={tmp.shopBlockSpacing} />;
    return jsx(block(stateFromStores1[8]).CollectiblesAnalyticsProvider, {});
  } else {
    if (block(stateFromStores1[7]).ShopBlockType.WIDE_BANNER !== type) {
      const FRAMES_BANNER = block(stateFromStores1[7]).ShopBlockType.FRAMES_BANNER;
    }
    return null;
  }
};
