// Module ID: 16028
// Function ID: 16029
// Name: shouldShowActivityStatus
// Dependencies: [1086, 1097, 2]
// Exports: default

// Module 16028 (shouldShowActivityStatus)
import Constants from "Constants" /* 1086 */;
import Constants2 from "Constants" /* 1097 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const StatusTypes = Constants2.StatusTypes;
const result = size.fileFinishedImporting("modules/activity_status/shouldShowActivityStatus.tsx");

export default function shouldShowActivityStatus(arg0) {
  let activities;
  let status;
  ({ activities, status } = arg0);
  if (status !== StatusTypes.OFFLINE) {
    if (status !== StatusTypes.INVISIBLE) {
      let found;
      if (activities != null) {
        found = activities.filter((type) => type.type !== constants.HANG_STATUS);
      }
      let tmp4 = null != tmp || null != tmp2;
      if (!tmp4) {
        let num;
        if (found != null) {
          num = found.length;
        }
        if (num == null) {
          num = 0;
        }
        tmp4 = num > 0;
      }
      return tmp4;
    }
  }
  return false;
};
