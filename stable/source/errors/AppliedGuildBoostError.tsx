// Module ID: 4742
// Function ID: 4743
// Name: AppliedGuildBoostError
// Dependencies: [4514, 4515, 1103, 1127, 2]

// Module 4742 (AppliedGuildBoostError)
import DurationsDefault from "Durations" /* 1103 */;
import intl from "intl" /* 1127 */;
import DateUtils from "DateUtils" /* 4515 */;
import V6OrEarlierAPIError from "errors/V6OrEarlierAPIError" /* 4514 */;
import size from "module_2" /* 2 */;

class AppliedGuildBoostError extends V6OrEarlierAPIError {
  constructor(body, arg1) {
    const tmp2 = new tmp(body, arg1, new.target, tmp);
    if (429 === tmp2.status) {
      tmp2.message = tmp2._getMessageFromRateLimit(body);
    }
    return tmp2;
  }
  _getMessageFromRateLimit(body) {
    const retry_after = body.body.retry_after;
    const obj = DateUtils;
    const diffAsUnitsResult = obj.diffAsUnits(0, retry_after * DurationsDefault.Millis.SECOND);
    const obj2 = DateUtils;
    const time = { days: intl.t["iXc/Ib"], hours: intl.t.WW9P57, minutes: intl.t.I7rYev };
    return obj2.unitsAsStrings(diffAsUnitsResult, time);
  }
}
const prototype = AppliedGuildBoostError.prototype;
const result = size.fileFinishedImporting("errors/AppliedGuildBoostError.tsx");

export default AppliedGuildBoostError;
