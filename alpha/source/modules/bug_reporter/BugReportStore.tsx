// Module ID: 13489
// Function ID: 13490
// Name: BugReportStore
// Dependencies: [5048, 2]

// Module 13489 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5048 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
