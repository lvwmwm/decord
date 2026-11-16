// Module ID: 12446
// Function ID: 12447
// Name: conjureSharingMode
// Dependencies: [6933, 12447, 2]
// Exports: conjureSharingChange, conjureSharingMode

// Module 12446 (conjureSharingMode)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6933 */;
import conjureSharingFlags from "conjureSharingFlags" /* 12447 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharingMode.tsx");

export function conjureSharingMode(stateFromStores, shareLinksEnabled) {
  let str = "public";
  const obj = ConjureProjectTypes;
  if (!obj.isProjectPublic(stateFromStores)) {
    let tmp2 = null;
    if (null != shareLinksEnabled) {
      let str2 = "collaborators";
      if (shareLinksEnabled) {
        str2 = "link";
      }
      tmp2 = str2;
    }
    str = tmp2;
  }
  return str;
}
export function conjureSharingChange(flags, arg1, arg2) {
  const obj = conjureSharingFlags;
  const conjureSharingFlagsResult = obj.conjureSharingFlags(flags, "public" === arg2);
  if (null == conjureSharingFlagsResult) {
    return null;
  } else {
    const obj2 = {};
    if (conjureSharingFlagsResult !== flags.flags) {
      obj2.flags = conjureSharingFlagsResult;
    }
    const tmp3 = "link" === arg2 && true !== arg1;
    if (tmp3) {
      obj2.share_links_enabled = true;
    }
    const tmp4 = "collaborators" === arg2 && false !== arg1;
    if (tmp4) {
      obj2.share_links_enabled = false;
    }
    return obj2;
  }
}
