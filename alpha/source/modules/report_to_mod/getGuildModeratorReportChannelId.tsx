// Module ID: 7585
// Function ID: 7586
// Name: getGuildModeratorReportChannelId
// Dependencies: [2]
// Exports: default

// Module 7585 (getGuildModeratorReportChannelId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportChannelId.tsx");

export default function getGuildModeratorReportChannelId(moderatorReporting) {
  moderatorReporting = moderatorReporting.moderatorReporting;
  let prop;
  if (moderatorReporting != null) {
    prop = moderatorReporting.moderatorReportChannelId;
  }
  if (prop == null) {
    prop = null;
  }
  return prop;
};
