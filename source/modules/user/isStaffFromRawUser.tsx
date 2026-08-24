// Module ID: 11636
// Function ID: 11637
// Name: isStaff
// Dependencies: [676, 2]
// Exports: default

// Module 11636 (isStaff)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const UserFlags = ME.UserFlags;
const result = set.fileFinishedImporting("modules/user/isStaffFromRawUser.tsx");

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
