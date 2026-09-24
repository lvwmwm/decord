// Module ID: 13044
// Function ID: 13045
// Name: BugReportStore
// Dependencies: [4661, 2]

// Module 13044 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4661 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
