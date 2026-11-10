// Module ID: 11228
// Function ID: 11229
// Name: BugReportStore
// Dependencies: [5329, 2]

// Module 11228 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5329 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
