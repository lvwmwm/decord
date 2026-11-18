// Module ID: 11129
// Function ID: 11130
// Name: BugReportStore
// Dependencies: [5012, 2]

// Module 11129 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5012 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
