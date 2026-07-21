// Module ID: 14359
// Function ID: 108430
// Name: block
// Dependencies: []
// Exports: default

// Module 14359 (block)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).space.PX_16 };
obj.shopBlockSpacing = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default function _default(block) {
  let framesBannerBlock;
  let preferVCPrice;
  let screen;
  block = block.block;
  const arg1 = block;
  ({ screen, preferVCPrice, framesBannerBlock } = block);
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.categories);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[6]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_5.products);
  const dependencyMap = stateFromStores1;
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
  if (arg1(dependencyMap[7]).ShopBlockType.HERO === type) {
    obj = {};
    obj = { pageSection: "top 4" };
    obj.newValue = obj;
    if (null != framesBannerBlock) {
      obj1 = { heroBlock: block, bannerBlock: framesBannerBlock, preferVCPrice, screen };
      let tmp36 = jsx(importDefault(dependencyMap[9]), obj1, memo);
    } else {
      const obj2 = { heroBlock: block, preferVCPrice, screen };
      tmp36 = jsx(importDefault(dependencyMap[10]), obj2, memo);
    }
    obj.children = tmp36;
    return jsx(arg1(dependencyMap[8]).CollectiblesAnalyticsProvider, obj);
  } else if (arg1(dependencyMap[7]).ShopBlockType.FEATURED === type) {
    const obj3 = {};
    const obj4 = { pageSection: "featured_block" };
    obj3.newValue = obj4;
    const obj5 = { style: tmp.shopBlockSpacing };
    const obj6 = { featuredBlock: block };
    obj5.children = jsx(importDefault(dependencyMap[11]), obj6);
    obj3.children = <View key={memo} {...obj5} />;
    return jsx(arg1(dependencyMap[8]).CollectiblesAnalyticsProvider, obj3);
  } else if (arg1(dependencyMap[7]).ShopBlockType.FEED === type) {
    const obj7 = {};
    const obj8 = { pageSection: "popular picks" };
    obj7.newValue = obj8;
    const obj9 = { style: tmp.shopBlockSpacing };
    const obj10 = { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true };
    obj9.children = jsx(importDefault(dependencyMap[12]), obj10, memo);
    obj7.children = <View {...obj9} />;
    return jsx(arg1(dependencyMap[8]).CollectiblesAnalyticsProvider, obj7);
  } else if (arg1(dependencyMap[7]).ShopBlockType.FRAMES_PRODUCT_SHELF === type) {
    const obj11 = {};
    const obj12 = { pageSection: "frames_product_shelf" };
    obj11.newValue = obj12;
    const obj13 = { block, preferVCPrice };
    obj11.children = jsx(importDefault(dependencyMap[13]), obj13, memo);
    return jsx(arg1(dependencyMap[8]).CollectiblesAnalyticsProvider, obj11);
  } else if (arg1(dependencyMap[7]).ShopBlockType.SHELF === type) {
    const obj14 = {};
    const obj15 = { pageSection: block.name };
    obj14.newValue = obj15;
    const obj16 = { style: tmp.shopBlockSpacing };
    const obj17 = { block, preferVCPrice };
    obj16.children = jsx(importDefault(dependencyMap[14]), obj17, memo);
    obj14.children = <View {...obj16} />;
    return jsx(arg1(dependencyMap[8]).CollectiblesAnalyticsProvider, obj14);
  } else {
    if (arg1(dependencyMap[7]).ShopBlockType.WIDE_BANNER !== type) {
      const FRAMES_BANNER = arg1(dependencyMap[7]).ShopBlockType.FRAMES_BANNER;
    }
    return null;
  }
};
