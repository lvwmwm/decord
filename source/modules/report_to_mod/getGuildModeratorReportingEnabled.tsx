// Module ID: 5766
// Function ID: 5767
// Name: getGuildModeratorReportingEnabled
// Dependencies: [2]
// Exports: default

// Module 5766 (getGuildModeratorReportingEnabled)
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
