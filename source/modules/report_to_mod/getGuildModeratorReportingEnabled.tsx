// Module ID: 5642
// Function ID: 48253
// Name: getGuildModeratorReportingEnabled
// Dependencies: []
// Exports: default

// Module 5642 (getGuildModeratorReportingEnabled)
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
