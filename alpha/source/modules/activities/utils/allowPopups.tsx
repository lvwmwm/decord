// Module ID: 12037
// Function ID: 12038
// Name: allowPopups
// Dependencies: [2147, 2]
// Exports: allowPopups

// Module 12037 (allowPopups)
import Constants from "Constants" /* 2147 */;
import size from "module_2" /* 2 */;

const set = Constants.APPLICATIONS_WITH_ALLOWED_POPUPS;
const result = size.fileFinishedImporting("modules/activities/utils/allowPopups.tsx");

export function allowPopups(application) {
  let tmp = null != application;
  if (tmp) {
    let hasItem = set.has(application.id);
    if (!hasItem) {
      let tmp4;
      if ("embeddedActivityConfig" in application) {
        const embeddedActivityConfig = application.embeddedActivityConfig;
        let prop;
        if (embeddedActivityConfig != null) {
          prop = embeddedActivityConfig.displays_advertisements;
        }
        tmp4 = true === prop;
      } else {
        tmp4 = "embedded_activity_config" in application;
        if (tmp4) {
          const embedded_activity_config = application.embedded_activity_config;
          let prop1;
          if (embedded_activity_config != null) {
            prop1 = embedded_activity_config.displays_advertisements;
          }
          tmp4 = true === prop1;
        }
      }
      hasItem = tmp4;
    }
    tmp = hasItem;
  }
  return tmp;
}
