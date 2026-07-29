// Module ID: 10344
// Function ID: 10345
// Name: zustandStore
// Dependencies: [4057, 2]

// Module 10344 (zustandStore)
const zustandStore = require("defaultStatesAreEqual").createZustandStore(() => ({ isReportOpen: false }));
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
