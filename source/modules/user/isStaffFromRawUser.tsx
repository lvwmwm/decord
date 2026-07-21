// Module ID: 11443
// Function ID: 89102
// Name: isStaff
// Dependencies: []
// Exports: default

// Module 11443 (isStaff)
const UserFlags = require(dependencyMap[0]).UserFlags;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user/isStaffFromRawUser.tsx");

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
