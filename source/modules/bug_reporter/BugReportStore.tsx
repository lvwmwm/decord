// Module ID: 10320
// Function ID: 79627
// Name: zustandStore
// Dependencies: [3998, 2]

// Module 10320 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
