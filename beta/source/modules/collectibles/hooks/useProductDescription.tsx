// Module ID: 13491
// Function ID: 13492
// Name: useProductDescription
// Dependencies: [19, 1119, 1977, 558, 568, 2]

// Module 13491 (useProductDescription)
import _mod19 from "module_19" /* 19 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
        let intl2 = tmp6(1119).intl;
        let obj3 = { itemName: null };
        obj3.itemName = tmp4.name;
        let arr = items.push(intl2.formatToPlainString(tmp6(1119).t.Ntv9Jt, obj3));
      } else if (tmp6(1977).CollectiblesItemType.PROFILE_EFFECT === type) {
        let intl = tmp6(1119).intl;
        let obj = { itemName: null };
        obj.itemName = tmp4.name;
        let arr2 = items.push(intl.formatToPlainString(tmp6(1119).t["3Y8q7a"], obj));
      } else if (tmp6(1977).CollectiblesItemType.NAMEPLATE === type) {
        let intl6 = tmp6(1119).intl;
        let obj4 = { itemName: null };
        obj4.itemName = tmp4.name;
        let arr3 = items.push(intl6.formatToPlainString(tmp6(1119).t["2keXky"], obj4));
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
const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDescription.tsx");

export const useProductDescription = ReactCompilerGating.isReactCompilerEnabled() ? ((summary, arg1) => {
  let stringResult = dependencyMap;
  const cResult = c.c(10);
  if (null != summary) {
    if (null != summary.summary) {
      if ("" !== summary.summary) {
        if (summary.type === tmp(1977).CollectiblesItemType.BUNDLE) {
          summary = summary.summary;
          if (summary.includes("{joinedItems}")) {
            if (cResult[0] === summary) {
              if (cResult[1] === tmp4) {
                let tmp5 = cResult[2];
              }
              let str2 = tmp5;
            }
            const replaced = summary.summary.replace("{joinedItems}", getBundleDescription(summary, tmp4));
            cResult[0] = summary;
            cResult[1] = tmp4;
            cResult[2] = replaced;
            tmp5 = replaced;
          }
        }
        str2 = summary.summary;
      }
      return str2;
    }
  }
  let type;
  if (summary != null) {
    type = summary.type;
  }
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const _Symbol4 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1119).intl;
      stringResult = intl4.string(tmp(1119).t["3lv7q2"]);
      cResult[3] = stringResult;
    }
  } else if (tmp(1977).CollectiblesItemType.PROFILE_EFFECT === type) {
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1119).intl;
      const stringResult1 = intl3.string(tmp(1119).t.VhJL72);
      cResult[4] = stringResult1;
      let tmp19 = stringResult1;
    } else {
      tmp19 = cResult[4];
    }
    str2 = tmp19;
  } else if (tmp(1977).CollectiblesItemType.NAMEPLATE === type) {
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const stringResult2 = intl2.string(tmp(1119).t.ik37EZ);
      cResult[5] = stringResult2;
      let tmp16 = stringResult2;
    } else {
      tmp16 = cResult[5];
    }
    str2 = tmp16;
  } else if (tmp(1977).CollectiblesItemType.PROFILE_FRAME === type) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult3 = intl.string(tmp(1119).t.fWzWPp);
      cResult[6] = stringResult3;
      let tmp13 = stringResult3;
    } else {
      tmp13 = cResult[6];
    }
    str2 = tmp13;
  } else {
    str2 = "";
    if (tmp(1977).CollectiblesItemType.BUNDLE === type) {
      if (cResult[7] === summary) {
        if (cResult[8] === tmp4) {
          let tmp9 = cResult[9];
        }
        str2 = tmp9;
      }
      const tmp11 = getBundleDescription(summary, tmp4);
      cResult[7] = summary;
      cResult[8] = tmp4;
      cResult[9] = tmp11;
      tmp9 = tmp11;
    }
  }
}) : ((arg0) => {
  closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [arg0, flag];
  return useMemo(() => {
    if (null != closure_0) {
      if (null != tmp.summary) {
        if ("" !== tmp.summary) {
          if (tmp.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
            const summary = tmp.summary;
            if (summary.includes("{joinedItems}")) {
              return tmp.summary.replace("{joinedItems}", getBundleDescription(tmp, flag));
            }
          }
          return tmp.summary;
        }
      }
    }
    let type;
    if (closure_0 != null) {
      type = tmp.type;
    }
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      const intl4 = util.intl;
      return intl4.string(util.t["3lv7q2"]);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      const intl3 = util.intl;
      return intl3.string(util.t.VhJL72);
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const intl2 = util.intl;
      return intl2.string(util.t.ik37EZ);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const intl = util.intl;
      return intl.string(util.t.fWzWPp);
    } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
      return getBundleDescription(tmp, flag);
    } else {
      return "";
    }
  }, items);
});
