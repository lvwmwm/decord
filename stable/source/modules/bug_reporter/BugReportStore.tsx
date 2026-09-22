// Module ID: 10312
// Function ID: 10313
// Name: BugReportStore
// Dependencies: [4506, 2]

// Module 10312 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4506 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
