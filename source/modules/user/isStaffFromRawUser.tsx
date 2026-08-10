// Module ID: 11784
// Function ID: 11785
// Name: isStaff
// Dependencies: [676, 2]
// Exports: default

// Module 11784 (isStaff)
import { UserFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/user/isStaffFromRawUser.tsx");

export default function isStaff(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  let tmp = (num & UserFlags.STAFF) === UserFlags.STAFF;
  if (!tmp) {
    let prop;
    if (flags != null) {
      prop = flags.personal_connection_id;
    }
    tmp = null != prop;
  }
  return tmp;
};
