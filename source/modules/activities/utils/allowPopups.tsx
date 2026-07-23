// Module ID: 10612
// Function ID: 82788
// Name: allowPopups
// Dependencies: [4155, 2]
// Exports: allowPopups

// Module 10612 (allowPopups)
import { APPLICATIONS_WITH_ALLOWED_POPUPS as closure_0 } from "items3";

const result = require("set").fileFinishedImporting("modules/activities/utils/allowPopups.tsx");

export const allowPopups = function allowPopups(application) {
  let flag = application;
  let prop = null;
  let tmp2 = null != application;
  if (tmp2) {
    const tmp4 = !set.has(flag.id);
    if (!tmp4) {
      tmp2 = !tmp4;
    } else if ("embeddedActivityConfig" in flag) {
      const embeddedActivityConfig = flag.embeddedActivityConfig;
      prop = undefined;
      if (!tmp7) {
        prop = embeddedActivityConfig.displays_advertisements;
      }
      flag = true;
      let tmp5 = true === prop;
      tmp7 = prop == embeddedActivityConfig;
    } else {
      tmp5 = "embedded_activity_config" in flag;
      if (tmp5) {
        const embedded_activity_config = flag.embedded_activity_config;
        let prop1;
        if (prop != embedded_activity_config) {
          prop1 = embedded_activity_config.displays_advertisements;
        }
        tmp5 = true === prop1;
      }
    }
  }
  return tmp2;
};
