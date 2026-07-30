// Module ID: 10340
// Function ID: 10341
// Name: zustandStore
// Dependencies: [4057, 2]

// Module 10340 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
