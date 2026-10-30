// Module ID: 7434
// Function ID: 7435
// Name: getGuildModeratorReportingEnabled
// Dependencies: [2]
// Exports: default

// Module 7434 (getGuildModeratorReportingEnabled)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportingEnabled.tsx");

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
