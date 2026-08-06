// Module ID: 9783
// Function ID: 9784
// Name: zustandStore
// Dependencies: [4152, 2]

// Module 9783 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
