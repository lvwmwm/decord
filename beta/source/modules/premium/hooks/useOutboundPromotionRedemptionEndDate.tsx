// Module ID: 13825
// Function ID: 13826
// Name: useOutboundPromotionRedemptionEndDate
// Dependencies: [19, 4352, 558, 568, 4442, 2]

// Module 13825 (useOutboundPromotionRedemptionEndDate)
import c from "c" /* 568 */;
import DateUtils from "DateUtils" /* 4442 */;
import noop from "module_19" /* 19 */;
import hooks from "module_4352" /* 4352 */;

require = fn;
let closure_4 = hooks.duration(30, "days");
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  outboundRedemptionEndDate = arg0;
  let outboundRedemptionEndDate2 = dependencyMap;
  const cResult = c.c(4);
  if (cResult[0] === arg1) {
    if (cResult[1] === outboundRedemptionEndDate.endDate) {
      if (cResult[2] === outboundRedemptionEndDate.outboundRedemptionEndDate) {
        return cResult[3];
      }
    }
  }
  DateUtils;
  if (!arg1) {
    const tmp4Result = tmp4(hooks(outboundRedemptionEndDate.endDate), "LL");
    cResult[0] = arg1;
    ({ endDate: tmp2[1], outboundRedemptionEndDate } = outboundRedemptionEndDate);
    cResult[2] = outboundRedemptionEndDate;
    cResult[3] = tmp4Result;
  }
  if (null != outboundRedemptionEndDate.outboundRedemptionEndDate) {
    outboundRedemptionEndDate2 = outboundRedemptionEndDate.outboundRedemptionEndDate;
    hooks(outboundRedemptionEndDate2);
  } else {
    hooks(outboundRedemptionEndDate.endDate).add(closure_4);
    const obj2 = hooks(outboundRedemptionEndDate.endDate);
  }
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => {
    let tmp = dependencyMap;
    DateUtils;
    if (closure_1) {
      let outboundRedemptionEndDate = closure_0;
      if (null != closure_0.outboundRedemptionEndDate) {
        tmp = hooks;
        outboundRedemptionEndDate = outboundRedemptionEndDate.outboundRedemptionEndDate;
        let addResult = tmp(outboundRedemptionEndDate);
      } else {
        addResult = hooks(outboundRedemptionEndDate.endDate).add(closure_4);
        const obj = hooks(outboundRedemptionEndDate.endDate);
      }
    } else {
      return tmp3(hooks(closure_0.endDate), "LL");
    }
  }, items);
});
