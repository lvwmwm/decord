// Module ID: 6144
// Function ID: 6145
// Name: getGuildModeratorReportChannelId
// Dependencies: [2]
// Exports: default

// Module 6144 (getGuildModeratorReportChannelId)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportChannelId.tsx");

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
