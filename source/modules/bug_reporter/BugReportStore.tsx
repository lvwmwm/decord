// Module ID: 9912
// Function ID: 9913
// Name: zustandStore
// Dependencies: [4211, 2]

// Module 9912 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
