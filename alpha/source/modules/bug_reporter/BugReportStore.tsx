// Module ID: 13568
// Function ID: 13569
// Name: BugReportStore
// Dependencies: [5085, 2]

// Module 13568 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5085 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
