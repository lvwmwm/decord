// Module ID: 13620
// Function ID: 13621
// Name: BugReportStore
// Dependencies: [5124, 2]

// Module 13620 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5124 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
