// Module ID: 5662
// Function ID: 48596
// Name: getGuildModeratorReportChannelId
// Dependencies: []
// Exports: default

// Module 5662 (getGuildModeratorReportChannelId)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportChannelId.tsx");

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
