// Module ID: 11068
// Function ID: 11069
// Name: BugReportStore
// Dependencies: [5206, 2]

// Module 11068 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5206 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
