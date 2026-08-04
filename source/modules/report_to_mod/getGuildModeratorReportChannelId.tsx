// Module ID: 5816
// Function ID: 5817
// Name: getGuildModeratorReportChannelId
// Dependencies: [2]
// Exports: default

// Module 5816 (getGuildModeratorReportChannelId)
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
