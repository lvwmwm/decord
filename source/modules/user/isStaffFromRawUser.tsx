// Module ID: 12347
// Function ID: 12348
// Name: isStaff
// Dependencies: [673, 2]
// Exports: default

// Module 12347 (isStaff)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

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
