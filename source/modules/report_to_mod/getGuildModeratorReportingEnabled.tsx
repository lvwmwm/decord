// Module ID: 5993
// Function ID: 5994
// Name: getGuildModeratorReportingEnabled
// Dependencies: [2]
// Exports: default

// Module 5993 (getGuildModeratorReportingEnabled)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportingEnabled.tsx");

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
