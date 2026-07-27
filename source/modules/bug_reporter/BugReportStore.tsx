// Module ID: 10283
// Function ID: 79476
// Name: zustandStore
// Dependencies: [3999, 2]

// Module 10283 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
