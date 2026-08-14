// Module ID: 9921
// Function ID: 9922
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 9921 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
