// Module ID: 10282
// Function ID: 79471
// Name: zustandStore
// Dependencies: [3999, 2]

// Module 10282 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
