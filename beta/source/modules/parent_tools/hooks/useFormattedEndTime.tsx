// Module ID: 17075
// Function ID: 17076
// Name: useFormattedEndTime
// Dependencies: [1372, 1115, 504, 2]
// Exports: default

// Module 17075 (useFormattedEndTime)
import get_initialized from "get initialized" /* 504 */;
import intl from "intl" /* 1115 */;
import UserStore from "UserStore" /* 1372 */;
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
