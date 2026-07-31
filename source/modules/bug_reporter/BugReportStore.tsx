// Module ID: 10358
// Function ID: 10359
// Name: zustandStore
// Dependencies: [4061, 2]

// Module 10358 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
