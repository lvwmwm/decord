// Module ID: 7371
// Function ID: 59428
// Name: getApplicationFlags
// Dependencies: [4153, 483, 2]
// Exports: hasApplicationFlag

// Module 7371 (getApplicationFlags)
import _callSuper from "_callSuper";

function getApplicationFlags(application) {
  if (null == application) {
    let flags2 = importAll(483).deserialize(0);
    const obj2 = importAll(483);
  } else {
    let tmp5 = null != application;
    if (tmp5) {
      let tmp2 = application instanceof _callSuper;
      if (!tmp2) {
        let tmp3 = "flags" in application;
        if (tmp3) {
          tmp3 = "bigint" === typeof application.flags;
        }
        tmp2 = tmp3;
      }
      if (!tmp2) {
        let tmp4 = "flags" in application && null != application.flags;
        if (tmp4) {
          tmp4 = "object" === typeof application.flags;
        }
        if (tmp4) {
          tmp4 = "parts" in application.flags;
        }
        tmp2 = tmp4;
      }
      tmp5 = tmp2;
    }
    if (tmp5) {
      flags2 = application.flags;
    } else {
      let flags = application.flags_new;
      if (null == flags) {
        flags = application.flags;
      }
      let num2 = 0;
      if (null != flags) {
        num2 = flags;
      }
      flags2 = importAll(483).deserialize(num2);
      const obj = importAll(483);
    }
  }
  return flags2;
}
const result = require("set").fileFinishedImporting("modules/applications/utils/ApplicationFlagUtils.tsx");

export { getApplicationFlags };
export const hasApplicationFlag = function hasApplicationFlag(application, EMBEDDED) {
  return importAll(483).has(getApplicationFlags(application), EMBEDDED);
};
