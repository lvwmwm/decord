// Module ID: 9781
// Function ID: 9782
// Name: zustandStore
// Dependencies: [4153, 2]

// Module 9781 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
