// Module ID: 10289
// Function ID: 10290
// Name: zustandStore
// Dependencies: [4344, 2]

// Module 10289 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4344 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ isReportOpen: false }));
const result = set.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
