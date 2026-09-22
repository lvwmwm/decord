// Module ID: 10447
// Function ID: 10448
// Name: BugReportStore
// Dependencies: [4627, 2]

// Module 10447 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4627 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
