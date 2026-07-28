// Module ID: 10323
// Function ID: 79605
// Name: zustandStore
// Dependencies: [4033, 2]

// Module 10323 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
