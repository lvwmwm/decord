// Module ID: 12374
// Function ID: 94630
// Name: useOutboundPromotionRedemptionEndDate
// Dependencies: []
// Exports: default

// Module 12374 (useOutboundPromotionRedemptionEndDate)
import module_30 from "module_30";

let closure_3 = importAll(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default function useOutboundPromotionRedemptionEndDate(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [arg0, arg1];
  return React.useMemo((self) => {
    self(closure_2[2]);
    if (arg1) {
      if (null != self.outboundRedemptionEndDate) {
        let addResult = arg1(closure_2[1])(self.outboundRedemptionEndDate);
      } else {
        addResult = arg1(closure_2[1])(self.endDate).add(module_30);
        const obj = arg1(closure_2[1])(self.endDate);
      }
    } else {
      return tmp2(arg1(closure_2[1])(self.endDate), "LL");
    }
  }, items);
};
