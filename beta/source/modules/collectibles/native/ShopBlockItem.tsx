// Module ID: 15430
// Function ID: 15431
// Name: ShopBlockItem
// Dependencies: [19, 17, 6962, 21, 4836, 576, 504, 6992, 8229, 15431, 15444, 15446, 15453, 2]
// Exports: default

// Module 15430 (ShopBlockItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ShopBlockType from "ShopBlockType" /* 6992 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { shopBlockSpacing: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default function _default(block) {
  let preferVCPrice;
  let screen;
  block = block.block;
  ({ screen, preferVCPrice } = block);
  let stateFromStores1;
  const tmp = closure_7();
  let tmp2 = block;
  const items = [CollectiblesCategoryStore];
  const obj = block(stateFromStores1[6]);
  const stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  const items1 = [CollectiblesCategoryStore];
  const obj2 = block(stateFromStores1[6]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => CollectiblesCategoryStore.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = react.useMemo(() => {
    let combined;
    if (block.type === ShopBlockType.ShopBlockType.HERO) {
      const _HermesInternal3 = HermesInternal;
      combined = "hero-" + tmp.categoryStoreListingId;
    } else if (block.type === ShopBlockType.ShopBlockType.REWARD_HERO) {
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
    const CollectiblesAnalyticsProvider4 = tmp2(tmp3[8]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider4 newValue={{ pageSection: "top 4" }}>{null}</CollectiblesAnalyticsProvider4>;
  } else if (tmp2(stateFromStores1[7]).ShopBlockType.FEATURED === type) {
    const CollectiblesAnalyticsProvider3 = tmp2(tmp3[8]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider3 newValue={{ pageSection: "featured_block" }}>{null}</CollectiblesAnalyticsProvider3>;
  } else if (tmp2(stateFromStores1[7]).ShopBlockType.FEED === type) {
    const CollectiblesAnalyticsProvider2 = tmp2(tmp3[8]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider2 newValue={{ pageSection: "popular picks" }}>{null}</CollectiblesAnalyticsProvider2>;
  } else if (tmp2(stateFromStores1[7]).ShopBlockType.SHELF === type) {
    const obj12 = { pageSection: block.name };
    const CollectiblesAnalyticsProvider = tmp2(tmp3[8]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider newValue={obj12}>{null}</CollectiblesAnalyticsProvider>;
  } else {
    const WIDE_BANNER = tmp2(tmp3[7]).ShopBlockType.WIDE_BANNER;
    return null;
  }
};
