// Module ID: 15726
// Function ID: 15727
// Name: useOutboundPromotionRedemptionEndDate
// Dependencies: [19, 2166, 4962, 2]
// Exports: default

// Module 15726 (useOutboundPromotionRedemptionEndDate)
import DateUtils from "DateUtils" /* 4962 */;
import react from "react" /* 19 */;
import module_2166 from "module_2166" /* 2166 */;
import size from "module_2" /* 2 */;

let closure_4 = module_2166.duration(30, "days");
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
        addResult = module_2166(tmp6.outboundRedemptionEndDate);
      } else {
        const obj = module_2166(closure_0.endDate);
        addResult = obj.add(closure_4);
      }
      tmp5 = addResult;
    } else {
      tmp5 = module_2166(closure_0.endDate);
    }
    return dateFormat(tmp5, "LL");
  }, items);
};
