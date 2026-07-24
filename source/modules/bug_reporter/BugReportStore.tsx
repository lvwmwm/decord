// Module ID: 10349
// Function ID: 79818
// Name: zustandStore
// Dependencies: [3998, 2]

// Module 10349 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
