// Module ID: 11251
// Function ID: 11252
// Name: BugReportStore
// Dependencies: [5359, 2]

// Module 11251 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5359 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
