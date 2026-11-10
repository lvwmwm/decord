// Module ID: 12428
// Function ID: 12429
// Name: conjureSharingFlags
// Dependencies: [6903, 2]
// Exports: conjureSharingFlags

// Module 12428 (conjureSharingFlags)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6903 */;
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
