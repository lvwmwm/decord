// Module ID: 9865
// Function ID: 9866
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 9865 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
