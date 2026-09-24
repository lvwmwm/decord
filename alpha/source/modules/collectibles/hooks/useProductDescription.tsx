// Module ID: 13549
// Function ID: 13550
// Name: useProductDescription
// Dependencies: [19, 1115, 1973, 2]
// Exports: useProductDescription

// Module 13549 (useProductDescription)
import _mod19 from "module_19" /* 19 */;
import util from "util" /* 1115 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import size from "module_2" /* 2 */;

function getBundleDescription(bundledProducts, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    const intl5 = util.intl;
    bundledProducts = bundledProducts.bundledProducts;
    let length;
    if (bundledProducts != null) {
      length = bundledProducts.length;
    }
    const obj2 = { num: length };
    return intl5.formatToPlainString(util.t["/0Yndu"], obj2);
  } else {
    let bundledProducts1 = bundledProducts.bundledProducts;
    if (bundledProducts1 == null) {
      bundledProducts1 = [];
    }
    const items = [];
    let flag2 = false;
    for (const item10012 of bundledProducts1) {
      let tmp4 = item10012;
      let type = item10012.type;
      let tmp6 = require;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        let intl2 = tmp6(1115).intl;
        let obj3 = { itemName: null };
        obj3.itemName = tmp4.name;
        let arr = items.push(intl2.formatToPlainString(tmp6(1115).t.Ntv9Jt, obj3));
      } else if (tmp6(1973).CollectiblesItemType.PROFILE_EFFECT === type) {
        let intl = tmp6(1115).intl;
        let obj = { itemName: null };
        obj.itemName = tmp4.name;
        let arr2 = items.push(intl.formatToPlainString(tmp6(1115).t["3Y8q7a"], obj));
      } else if (tmp6(1973).CollectiblesItemType.NAMEPLATE === type) {
        let intl6 = tmp6(1115).intl;
        let obj4 = { itemName: null };
        obj4.itemName = tmp4.name;
        let arr3 = items.push(intl6.formatToPlainString(tmp6(1115).t["2keXky"], obj4));
        flag2 = true;
      }
      continue;
    }
    const join = items.join;
    if (flag2) {
      const replaced = join(", ").replace(/, ([^,]*)$/, " & $1");
      const intl4 = util.intl;
      const obj5 = { joinedItems: replaced };
      return intl4.formatToPlainString(util.t.Ofrqj6, obj5);
    } else {
      const joined = join(" & ");
      const intl3 = util.intl;
      const obj6 = { joinedItems: joined };
      return intl3.formatToPlainString(util.t.Ofrqj6, obj6);
    }
  }
}
function getProductDescription(summary, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (null != summary) {
    if (null != summary.summary) {
      if ("" !== summary.summary) {
        if (summary.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
          summary = summary.summary;
          if (summary.includes("{joinedItems}")) {
            return summary.summary.replace("{joinedItems}", getBundleDescription(summary, flag));
          }
        }
        return summary.summary;
      }
    }
  }
  let type;
  if (summary != null) {
    type = summary.type;
  }
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl4 = tmp2(1115).intl;
    return intl4.string(tmp2(1115).t["3lv7q2"]);
  } else if (tmp2(1973).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl3 = tmp2(1115).intl;
    return intl3.string(tmp2(1115).t.VhJL72);
  } else if (tmp2(1973).CollectiblesItemType.NAMEPLATE === type) {
    const intl2 = tmp2(1115).intl;
    return intl2.string(tmp2(1115).t.ik37EZ);
  } else if (tmp2(1973).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp2(1115).intl;
    return intl.string(tmp2(1115).t.fWzWPp);
  } else if (tmp2(1973).CollectiblesItemType.BUNDLE === type) {
    return getBundleDescription(summary, flag);
  } else {
    return "";
  }
}
const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDescription.tsx");

export { getProductDescription };
export const useProductDescription = function useProductDescription(product) {
  closure_0 = product;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [product, flag];
  return useMemo(() => getProductDescription(closure_0, flag), items);
};
