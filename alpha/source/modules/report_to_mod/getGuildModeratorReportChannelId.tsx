// Module ID: 6981
// Function ID: 6982
// Name: getGuildModeratorReportChannelId
// Dependencies: [2]
// Exports: default

// Module 6981 (getGuildModeratorReportChannelId)
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
