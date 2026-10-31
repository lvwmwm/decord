// Module ID: 19375
// Function ID: 19376
// Name: useFormattedEndTime
// Dependencies: [1383, 1113, 504, 2]
// Exports: default

// Module 19375 (useFormattedEndTime)
import get_initialized from "get initialized" /* 504 */;
import intl from "intl" /* 1113 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

let currentUser;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useFormattedEndTime.tsx");

export default function useFormattedEndTime() {
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
};
