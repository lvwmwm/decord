// Module ID: 11282
// Function ID: 11283
// Name: BugReportStore
// Dependencies: [5337, 2]

// Module 11282 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5337 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
