// Module ID: 9633
// Function ID: 9634
// Name: BugReportStore
// Dependencies: [4701, 2]

// Module 9633 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4701 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
