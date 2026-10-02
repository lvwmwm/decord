// Module ID: 12270
// Function ID: 12271
// Name: BugReportStore
// Dependencies: [4707, 2]

// Module 12270 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4707 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
