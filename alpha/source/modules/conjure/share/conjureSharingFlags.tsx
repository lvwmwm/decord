// Module ID: 18306
// Function ID: 18307
// Name: conjureSharingFlags
// Dependencies: [6809, 2]
// Exports: conjureSharingFlags

// Module 18306 (conjureSharingFlags)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharingFlags.tsx");

export function conjureSharingFlags(flags, arg1) {
  flags = flags.flags;
  let tmp = null;
  if (null != flags) {
    let tmp5;
    const PUBLIC = ConjureProjectTypes.ConjureProjectFlags.PUBLIC;
    if (arg1) {
      tmp5 = flags | PUBLIC;
    } else {
      tmp5 = flags & ~PUBLIC;
    }
    tmp = tmp5;
  }
  return tmp;
}
