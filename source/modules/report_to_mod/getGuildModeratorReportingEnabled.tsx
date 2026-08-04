// Module ID: 5795
// Function ID: 5796
// Name: getGuildModeratorReportingEnabled
// Dependencies: [2]
// Exports: default

// Module 5795 (getGuildModeratorReportingEnabled)
const result = require("set").fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportingEnabled.tsx");

export default function getGuildModeratorReportingEnabled(moderatorReporting) {
  moderatorReporting = moderatorReporting.moderatorReporting;
  let flag;
  if (moderatorReporting != null) {
    flag = moderatorReporting.moderatorReportingEnabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
