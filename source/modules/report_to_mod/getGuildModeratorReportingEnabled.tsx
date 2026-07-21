// Module ID: 5643
// Function ID: 48237
// Name: getGuildModeratorReportingEnabled
// Dependencies: [284214097]
// Exports: default

// Module 5643 (getGuildModeratorReportingEnabled)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/report_to_mod/getGuildModeratorReportingEnabled.tsx");

export default function getGuildModeratorReportingEnabled(moderatorReporting) {
  moderatorReporting = moderatorReporting.moderatorReporting;
  let prop;
  if (null != moderatorReporting) {
    prop = moderatorReporting.moderatorReportingEnabled;
  }
  return null != prop && prop;
};
