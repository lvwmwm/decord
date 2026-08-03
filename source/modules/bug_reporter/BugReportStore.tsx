// Module ID: 10497
// Function ID: 10498
// Name: zustandStore
// Dependencies: [4123, 2]

// Module 10497 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
