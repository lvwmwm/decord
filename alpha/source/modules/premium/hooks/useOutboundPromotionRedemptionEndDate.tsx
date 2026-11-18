// Module ID: 14096
// Function ID: 14097
// Name: useOutboundPromotionRedemptionEndDate
// Dependencies: [19, 2169, 4645, 2]
// Exports: default

// Module 14096 (useOutboundPromotionRedemptionEndDate)
import DateUtils from "DateUtils" /* 4645 */;
import react from "react" /* 19 */;
import module_2169 from "module_2169" /* 2169 */;
import size from "module_2" /* 2 */;

let closure_4 = module_2169.duration(30, "days");
const result = size.fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default function useOutboundPromotionRedemptionEndDate(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let tmp5;
    const dateFormat = DateUtils.dateFormat;
    DateUtils;
    if (closure_1) {
      let addResult;
      if (null != closure_0.outboundRedemptionEndDate) {
        addResult = module_2169(tmp6.outboundRedemptionEndDate);
      } else {
        const obj = module_2169(closure_0.endDate);
        addResult = obj.add(closure_4);
      }
      tmp5 = addResult;
    } else {
      tmp5 = module_2169(closure_0.endDate);
    }
    return dateFormat(tmp5, "LL");
  }, items);
};
