// Module ID: 5787
// Function ID: 5788
// Name: getGuildModeratorReportChannelId
// Dependencies: [2]
// Exports: default

// Module 5787 (getGuildModeratorReportChannelId)
const result = require("set").fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportChannelId.tsx");

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
