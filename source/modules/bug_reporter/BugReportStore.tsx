// Module ID: 10127
// Function ID: 10128
// Name: zustandStore
// Dependencies: [4241, 2]

// Module 10127 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
