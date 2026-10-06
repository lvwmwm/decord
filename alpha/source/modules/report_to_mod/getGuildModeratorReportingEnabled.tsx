// Module ID: 6779
// Function ID: 6780
// Name: getGuildModeratorReportingEnabled
// Dependencies: [2]
// Exports: default

// Module 6779 (getGuildModeratorReportingEnabled)
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
