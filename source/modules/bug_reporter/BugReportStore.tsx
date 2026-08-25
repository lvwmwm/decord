// Module ID: 10016
// Function ID: 10017
// Name: zustandStore
// Dependencies: [4246, 2]

// Module 10016 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4246 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ isReportOpen: false }));
const result = set.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
