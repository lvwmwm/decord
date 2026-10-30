// Module ID: 7455
// Function ID: 7456
// Name: getGuildModeratorReportChannelId
// Dependencies: [2]
// Exports: default

// Module 7455 (getGuildModeratorReportChannelId)
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
