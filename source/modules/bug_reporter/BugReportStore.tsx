// Module ID: 9799
// Function ID: 9800
// Name: zustandStore
// Dependencies: [4169, 2]

// Module 9799 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
