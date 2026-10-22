// Module ID: 13737
// Function ID: 13738
// Name: BugReportStore
// Dependencies: [5149, 2]

// Module 13737 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5149 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
