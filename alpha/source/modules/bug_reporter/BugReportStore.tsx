// Module ID: 10690
// Function ID: 10691
// Name: BugReportStore
// Dependencies: [5232, 2]

// Module 10690 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5232 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
