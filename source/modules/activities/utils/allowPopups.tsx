// Module ID: 10602
// Function ID: 82738
// Name: allowPopups
// Dependencies: []
// Exports: allowPopups

// Module 10602 (allowPopups)
let closure_0 = require(dependencyMap[0]).APPLICATIONS_WITH_ALLOWED_POPUPS;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/allowPopups.tsx");

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
      const tmp7 = prop == embeddedActivityConfig;
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
