// Module ID: 9866
// Function ID: 9867
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 9866 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
