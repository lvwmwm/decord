// Module ID: 12577
// Function ID: 12578
// Name: BugReportStore
// Dependencies: [4950, 2]

// Module 12577 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4950 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
