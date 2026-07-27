// Module ID: 11448
// Function ID: 89062
// Name: isStaff
// Dependencies: [653, 2]
// Exports: default

// Module 11448 (isStaff)
import { UserFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/user/isStaffFromRawUser.tsx");

export default function isStaff(flags) {
  flags = flags.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  let tmp = (num & UserFlags.STAFF) === UserFlags.STAFF;
  if (!tmp) {
    let prop;
    if (null != flags) {
      prop = flags.personal_connection_id;
    }
    tmp = null != prop;
  }
  return tmp;
};
