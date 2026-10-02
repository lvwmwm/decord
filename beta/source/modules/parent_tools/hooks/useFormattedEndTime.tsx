// Module ID: 17077
// Function ID: 17078
// Name: useFormattedEndTime
// Dependencies: [1378, 1127, 558, 576, 504, 2]

// Module 17077 (useFormattedEndTime)
import react from "react" /* 576 */;
import intl from "intl" /* 1127 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
      let nextEndTime;
      if (currentUser != null) {
        const restrictedSchedule = currentUser.restrictedSchedule;
        if (restrictedSchedule != null) {
          nextEndTime = restrictedSchedule.getNextEndTime();
        }
      }
      let formatResult = null;
      if (null != nextEndTime) {
        const _Intl = Intl;
        const self = this;
        const self2 = this;
        const dateTimeFormat = new Intl.DateTimeFormat(intl.intl.currentLocale, { hour: "numeric", minute: "2-digit", weekday: "long" });
        formatResult = dateTimeFormat.format(nextEndTime);
      }
      return formatResult;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, function() {
    currentUser = currentUser.getCurrentUser();
    let nextEndTime;
    if (currentUser != null) {
      const restrictedSchedule = currentUser.restrictedSchedule;
      if (restrictedSchedule != null) {
        nextEndTime = restrictedSchedule.getNextEndTime();
      }
    }
    let formatResult = null;
    if (null != nextEndTime) {
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const dateTimeFormat = new Intl.DateTimeFormat(intl.intl.currentLocale, { hour: "numeric", minute: "2-digit", weekday: "long" });
      formatResult = dateTimeFormat.format(nextEndTime);
    }
    return formatResult;
  });
});
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useFormattedEndTime.tsx");

export default tmp2;
