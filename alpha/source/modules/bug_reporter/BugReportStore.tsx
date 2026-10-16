// Module ID: 13497
// Function ID: 13498
// Name: BugReportStore
// Dependencies: [5048, 2]

// Module 13497 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5048 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
