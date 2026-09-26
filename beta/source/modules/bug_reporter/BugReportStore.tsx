// Module ID: 10480
// Function ID: 10481
// Name: BugReportStore
// Dependencies: [4658, 2]

// Module 10480 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4658 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
