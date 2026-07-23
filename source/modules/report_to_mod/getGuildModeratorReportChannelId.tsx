// Module ID: 5668
// Function ID: 48682
// Name: getGuildModeratorReportChannelId
// Dependencies: [2]
// Exports: default

// Module 5668 (getGuildModeratorReportChannelId)
const result = require("set").fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportChannelId.tsx");

export default function getGuildModeratorReportChannelId(moderatorReporting) {
  moderatorReporting = moderatorReporting.moderatorReporting;
  let prop;
  if (null != moderatorReporting) {
    prop = moderatorReporting.moderatorReportChannelId;
  }
  let tmp2 = null;
  if (null != prop) {
    tmp2 = prop;
  }
  return tmp2;
};
