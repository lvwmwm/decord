// Module ID: 9871
// Function ID: 9872
// Name: zustandStore
// Dependencies: [4170, 2]

// Module 9871 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
