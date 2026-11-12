// Module ID: 11032
// Function ID: 11033
// Name: BugReportStore
// Dependencies: [5442, 2]

// Module 11032 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5442 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
