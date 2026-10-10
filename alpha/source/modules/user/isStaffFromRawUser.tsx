// Module ID: 12127
// Function ID: 12128
// Name: isStaffFromRawUser
// Dependencies: [1085, 2]
// Exports: default

// Module 12127 (isStaffFromRawUser)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const UserFlags = Constants.UserFlags;
const result = size.fileFinishedImporting("modules/user/isStaffFromRawUser.tsx");

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
