// Module ID: 10205
// Function ID: 10206
// Name: zustandStore
// Dependencies: [4312, 2]

// Module 10205 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4312 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ isReportOpen: false }));
const result = set.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
