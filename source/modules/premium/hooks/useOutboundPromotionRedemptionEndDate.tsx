// Module ID: 12488
// Function ID: 96786
// Name: useOutboundPromotionRedemptionEndDate
// Dependencies: [31, 3712, 3800, 2]
// Exports: default

// Module 12488 (useOutboundPromotionRedemptionEndDate)
import result from "result";
import module_30 from "module_30";
import importDefaultResult from "t";

const require = arg1;
const result = require("resetCache").fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default function useOutboundPromotionRedemptionEndDate(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => {
    lib(outer1_2[2]);
    if (callback) {
      if (null != lib.outboundRedemptionEndDate) {
        let addResult = callback(outer1_2[1])(lib.outboundRedemptionEndDate);
      } else {
        addResult = callback(outer1_2[1])(lib.endDate).add(outer1_4);
        const obj = callback(outer1_2[1])(lib.endDate);
      }
    } else {
      return tmp2(callback(outer1_2[1])(lib.endDate), "LL");
    }
  }, items);
};
