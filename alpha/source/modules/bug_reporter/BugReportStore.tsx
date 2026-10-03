// Module ID: 12524
// Function ID: 12525
// Name: BugReportStore
// Dependencies: [4749, 2]

// Module 12524 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4749 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
