// Module ID: 9181
// Function ID: 9182
// Name: filterActiveMarketingComponentsUnprioritized
// Dependencies: [2]
// Exports: default

// Module 9181 (filterActiveMarketingComponentsUnprioritized)
import size from "module_2" /* 2 */;

let isTimed;

const result = size.fileFinishedImporting("modules/premium/promotions/utils/filterActiveMarketingComponentsUnprioritized.tsx");

export default function filterActiveMarketingComponentsUnprioritized(arr, arg1) {
  let closure_0 = arg1;
  let fn = arg2;
  if (arg2 === undefined) {
    fn = function o() {
      return true;
    };
  }
  return arr.filter((isTimed) => {
    let effectiveEndDate;
    let effectiveStartDate;
    ({ effectiveStartDate, effectiveEndDate } = isTimed);
    let tmp = null != effectiveStartDate;
    if (tmp) {
      const time = obj.getTime();
      tmp = time < effectiveStartDate.getTime();
    }
    if (!tmp) {
      let tmp3 = null != effectiveEndDate;
      if (tmp3) {
        const time1 = obj.getTime();
        tmp3 = time1 > effectiveEndDate.getTime();
      }
      tmp = tmp3;
    }
    let tmp5 = !tmp;
    if (tmp5) {
      isTimed = isTimed.isTimed;
      let tmp6 = !isTimed;
      if (isTimed) {
        tmp6 = fn(isTimed);
      }
      tmp5 = tmp6;
    }
    return tmp5;
  });
};
