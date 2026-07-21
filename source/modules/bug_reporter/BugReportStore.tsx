// Module ID: 10306
// Function ID: 79540
// Name: zustandStore
// Dependencies: []

// Module 10306 (zustandStore)
const zustandStore = require(dependencyMap[0]).createZustandStore(() => ({ isReportOpen: false }));
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
