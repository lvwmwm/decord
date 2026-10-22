// Module ID: 13723
// Function ID: 13724
// Name: BugReportStore
// Dependencies: [5149, 2]

// Module 13723 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5149 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
