// Module ID: 15714
// Function ID: 15715
// Name: UserProfileAddableWidgetCategories
// Dependencies: [7293, 2]
// Exports: partitionAddableWidgets

// Module 15714 (UserProfileAddableWidgetCategories)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7293 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetCategories.tsx");

export function partitionAddableWidgets(arg0) {
  const applicationWidgets = [];
  const interestsWidgets = [];
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
      let arr = applicationWidgets.push(tmp2);
    } else {
      let arr2 = interestsWidgets.push(tmp2);
    }
    continue;
  }
  return { applicationWidgets, interestsWidgets };
}
