// Module ID: 11049
// Function ID: 11050
// Name: BugReportStore
// Dependencies: [4983, 2]

// Module 11049 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4983 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
