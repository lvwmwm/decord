// Module ID: 13800
// Function ID: 13801
// Name: BugReportStore
// Dependencies: [5164, 2]

// Module 13800 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5164 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
