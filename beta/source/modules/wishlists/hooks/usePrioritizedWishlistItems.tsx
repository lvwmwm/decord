// Module ID: 14612
// Function ID: 14613
// Name: usePrioritizedWishlistItems
// Dependencies: [32, 19, 9003, 2]
// Exports: default, doesWishlistReorderChangePreview, prioritizeSoonToUnpublishWishlistItems

// Module 14612 (usePrioritizedWishlistItems)
import WishlistShopUnpublishUtils from "WishlistShopUnpublishUtils" /* 9003 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const f106411 = (deadline, deadline2) => {
  let diff = deadline.deadline - deadline2.deadline;
  if (0 === diff) {
    diff = deadline.index - deadline2.index;
  }
  return diff;
};
function getUpcomingShopUnpublish(shopUnpublishedAt, arg1) {
  let tmp = null;
  const obj = WishlistShopUnpublishUtils;
  if (obj.canRenderWishlistShopUnpublishCountdown(shopUnpublishedAt)) {
    tmp = null;
    if (null != shopUnpublishedAt.shopUnpublishedAt) {
      shopUnpublishedAt = shopUnpublishedAt.shopUnpublishedAt;
      const time = shopUnpublishedAt.getTime();
      const _Number = Number;
      let tmp4 = null;
      if (Number.isFinite(time)) {
        tmp4 = time;
      }
      tmp = tmp4;
    }
  }
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (tmp > arg1) {
      tmp5 = tmp;
    }
  }
  return tmp5;
}
let react = react_mod;
const result = size.fileFinishedImporting("modules/wishlists/hooks/usePrioritizedWishlistItems.tsx");

export default function usePrioritizedWishlistItems(arg0, arg1) {
  let closure_3;
  let first;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = first(react.useState(Date.now), 2);
  first = tmp[0];
  react = tmp[1];
  let items = [arg0, arg1, first];
  const effect = react.useEffect(() => {
    let timeout;
    function getNextPriorityChange(arg0, timestamp) {
      let tmp = null;
      const tmp2 = arg0[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let tmp5 = closure_1_4(tmp3, timestamp);
        if (null != tmp5) {
          let diff = tmp6 - closure_0(closure_1_1[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS;
          let tmp12 = diff > timestamp ? diff : tmp5;
          let tmp15 = null == tmp;
          if (!tmp15) {
            tmp15 = tmp13 < tmp;
          }
          if (tmp15) {
            tmp = tmp12;
          }
        }
        continue;
      }
      return tmp;
    }
    let tmp = closure_1;
    if (tmp) {
      let tmp2 = globalThis;
      const _Date = Date;
      const timestamp = Date.now();
      let obj = timeout;
      let tmp4 = getNextPriorityChange(timeout, timestamp);
      let tmp5 = first;
      timeout = first;
      let tmp6 = timestamp > first && obj.some((shopUnpublishedAt) => {
        let tmp3 = null;
        const obj = closure_0(closure_2_1[2]);
        const tmp = closure_0;
        const tmp2 = closure_2_1;
        if (obj.canRenderWishlistShopUnpublishCountdown(shopUnpublishedAt)) {
          tmp3 = null;
          if (null != shopUnpublishedAt.shopUnpublishedAt) {
            shopUnpublishedAt = shopUnpublishedAt.shopUnpublishedAt;
            const time = shopUnpublishedAt.getTime();
            const _Number = Number;
            let tmp6 = null;
            if (Number.isFinite(time)) {
              tmp6 = time;
            }
            tmp3 = tmp6;
          }
        }
        if (null == tmp3) {
          return false;
        } else {
          const diff = tmp3 - tmp(tmp2[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS;
          let tmp9 = diff > closure_0;
          const tmp8 = closure_0;
          if (tmp9) {
            tmp9 = diff <= timestamp;
          }
          if (!tmp9) {
            tmp9 = tmp3 > tmp8 && tmp3 <= timestamp;
            const tmp11 = tmp3 > tmp8 && tmp3 <= timestamp;
          }
          return tmp9;
        }
      });
      let num2 = 0;
      if (!tmp6) {
        let bound = null;
        if (null != tmp4) {
          const _Math = Math;
          bound = Math.min(tmp4 - timestamp, 2147483647);
        }
        num2 = bound;
      }
      let tmp8 = null;
      if (null != num2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_3(Date.now()), num2);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  let items1 = [arg0, arg1, first];
  return react.useMemo(() => {
    let tmp2;
    if (closure_1) {
      let timestamp = first;
      if (first === undefined) {
        let tmp4 = globalThis;
        const _Date = Date;
        timestamp = Date.now();
      }
      const items = [];
      const items1 = [];
      const item = arr.forEach((shopUnpublishedAt, index) => {
        let tmp4 = null;
        const obj = closure_2_0(closure_2_1[2]);
        const tmp2 = closure_2_0;
        const tmp3 = closure_2_1;
        if (obj.canRenderWishlistShopUnpublishCountdown(shopUnpublishedAt)) {
          tmp4 = null;
          if (null != shopUnpublishedAt.shopUnpublishedAt) {
            shopUnpublishedAt = shopUnpublishedAt.shopUnpublishedAt;
            const time = shopUnpublishedAt.getTime();
            const _Number = Number;
            let tmp7 = null;
            if (Number.isFinite(time)) {
              tmp7 = time;
            }
            tmp4 = tmp7;
          }
        }
        let tmp8 = null;
        if (null != tmp4) {
          tmp8 = null;
          if (tmp4 > timestamp) {
            tmp8 = tmp4;
          }
        }
        if (null != tmp8) {
          const diff = tmp8 - tmp;
          if (diff <= tmp2(tmp3[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS) {
            const obj2 = { item: shopUnpublishedAt, deadline: tmp8, index };
            items.push(obj2);
          }
        }
        items1.push(shopUnpublishedAt);
      });
      const sorted = items.sort(f106411);
      const items2 = [];
      let tmp7 = items2;
      let tmp8 = items2;
      HermesBuiltin.arraySpread(items2, items1, HermesBuiltin.arraySpread(items2, items.map((item) => item.item), 0));
      tmp2 = items2;
    } else {
      tmp2 = arr;
    }
    return tmp2;
  }, items1);
};
export function prioritizeSoonToUnpublishWishlistItems(arr) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  const items = [];
  const items1 = [];
  const item = arr.forEach((shopUnpublishedAt, index) => {
    let tmp4 = null;
    const obj = closure_2_0(closure_2_1[2]);
    const tmp2 = closure_2_0;
    const tmp3 = closure_2_1;
    if (obj.canRenderWishlistShopUnpublishCountdown(shopUnpublishedAt)) {
      tmp4 = null;
      if (null != shopUnpublishedAt.shopUnpublishedAt) {
        shopUnpublishedAt = shopUnpublishedAt.shopUnpublishedAt;
        const time = shopUnpublishedAt.getTime();
        const _Number = Number;
        let tmp7 = null;
        if (Number.isFinite(time)) {
          tmp7 = time;
        }
        tmp4 = tmp7;
      }
    }
    let tmp8 = null;
    if (null != tmp4) {
      tmp8 = null;
      if (tmp4 > timestamp) {
        tmp8 = tmp4;
      }
    }
    if (null != tmp8) {
      const diff = tmp8 - tmp;
      if (diff <= tmp2(tmp3[2]).SHOP_UNPUBLISH_LABEL_THRESHOLD_MS) {
        const obj2 = { item: shopUnpublishedAt, deadline: tmp8, index };
        items.push(obj2);
      }
    }
    items1.push(shopUnpublishedAt);
  });
  const sorted = items.sort(f106411);
  const items2 = [...items1];
  return items2;
}
export function doesWishlistReorderChangePreview(arr, arr2, arg2) {
  const substr = arr.slice(0, arg2);
  const found = substr.filter((sku) => null != sku.sku);
  const substr1 = arr2.slice(0, arg2);
  const found1 = substr1.filter((sku) => null != sku.sku);
  const tmp = found.length !== found1.length || found.some((item, index) => item !== found1[index]);
  return tmp;
}
