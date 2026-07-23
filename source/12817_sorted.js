// Module ID: 12817
// Function ID: 99639
// Name: sorted
// Dependencies: [57, 12790, 12807]

// Module 12817 (sorted)
import _slicedToArray from "_slicedToArray";


export default (arr, raw) => {
  const _require = arg2;
  const items = [];
  let tmp2 = null;
  let tmp3 = null;
  const sorted = arr.sort((arg0, arg1) => callback(outer1_1[1])(arg0, arg1, callback));
  const iter = sorted[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp7 = nextResult;
    let tmp8 = _require;
    let tmp9 = dependencyMap;
    let tmp10 = raw;
    let tmp11 = arg2;
    if (_require(12807)(nextResult, raw, arg2)) {
      tmp3 = nextResult;
      let tmp17 = tmp2;
      if (!tmp2) {
        tmp2 = nextResult;
      }
    } else {
      let tmp12 = tmp3;
      if (tmp3) {
        let tmp13 = items;
        let tmp14 = tmp2;
        let items1 = [tmp2, ];
        let tmp15 = tmp3;
        items1[1] = tmp3;
        arr = items.push(items1);
      }
      tmp3 = null;
      tmp2 = null;
    }
    continue;
  }
  if (tmp2) {
    const items2 = [tmp2, null];
    items.push(items2);
  }
  const items3 = [];
  while (tmp21 !== undefined) {
    let tmp45 = _slicedToArray;
    let tmp46 = _slicedToArray(tmp22, 2);
    let first = tmp46[0];
    let tmp48 = first;
    let tmp49 = tmp46[1];
    let tmp50 = tmp49;
    if (first === tmp49) {
      let tmp40 = items3;
      let tmp41 = first;
      let arr1 = items3.push(tmp48);
    } else {
      let tmp51 = tmp49;
      if (!tmp50) {
        let tmp23 = first;
        let tmp24 = sorted;
        if (tmp48 === tmp5[0]) {
          let tmp25 = items3;
          let arr2 = items3.push("*");
        }
      }
      let tmp27 = tmp49;
      if (tmp50) {
        let tmp31 = first;
        let tmp32 = sorted;
        if (tmp48 === tmp5[0]) {
          let tmp37 = items3;
          let tmp38 = tmp49;
          let _HermesInternal3 = HermesInternal;
          let arr3 = items3.push("<=" + tmp50);
        } else {
          let tmp33 = items3;
          let tmp34 = first;
          let tmp35 = tmp49;
          let _HermesInternal2 = HermesInternal;
          let arr4 = items3.push("" + tmp48 + " - " + tmp50);
        }
      } else {
        let tmp28 = items3;
        let tmp29 = first;
        let _HermesInternal = HermesInternal;
        let arr5 = items3.push(">=" + tmp48);
      }
    }
    continue;
  }
  let joined = items3.join(" || ");
  if ("string" === typeof raw.raw) {
    raw = raw.raw;
  } else {
    const _String = String;
    raw = String(raw);
  }
  if (joined.length >= raw.length) {
    joined = raw;
  }
  return joined;
};
