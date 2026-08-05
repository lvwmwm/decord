// Module ID: 9752
// Function ID: 9753
// Name: zustandStore
// Dependencies: [4123, 2]

// Module 9752 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
