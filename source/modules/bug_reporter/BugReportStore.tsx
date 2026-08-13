// Module ID: 9910
// Function ID: 9911
// Name: zustandStore
// Dependencies: [4209, 2]

// Module 9910 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
