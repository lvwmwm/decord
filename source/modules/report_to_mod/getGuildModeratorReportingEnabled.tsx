// Module ID: 5763
// Function ID: 50322
// Name: getGuildModeratorReportingEnabled
// Dependencies: [2]
// Exports: default

// Module 5763 (getGuildModeratorReportingEnabled)
const result = require("set").fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportingEnabled.tsx");

export default function getGuildModeratorReportingEnabled(moderatorReporting) {
  moderatorReporting = moderatorReporting.moderatorReporting;
  let prop;
  if (null != moderatorReporting) {
    prop = moderatorReporting.moderatorReportingEnabled;
  }
  return null != prop && prop;
};
