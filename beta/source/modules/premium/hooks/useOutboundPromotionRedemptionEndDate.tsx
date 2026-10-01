// Module ID: 13099
// Function ID: 13100
// Name: useOutboundPromotionRedemptionEndDate
// Dependencies: [19, 4421, 4512, 2]
// Exports: default

// Module 13099 (useOutboundPromotionRedemptionEndDate)
import DateUtils from "DateUtils" /* 4512 */;
import react from "react" /* 19 */;
import module_4421 from "module_4421" /* 4421 */;
import size from "module_2" /* 2 */;

let closure_4 = module_4421.duration(30, "days");
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
        addResult = module_4421(tmp6.outboundRedemptionEndDate);
      } else {
        const obj = module_4421(closure_0.endDate);
        addResult = obj.add(closure_4);
      }
      tmp5 = addResult;
    } else {
      tmp5 = module_4421(closure_0.endDate);
    }
    return dateFormat(tmp5, "LL");
  }, items);
};
