// Module ID: 14018
// Function ID: 14019
// Name: BugReportStore
// Dependencies: [5199, 2]

// Module 14018 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5199 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
