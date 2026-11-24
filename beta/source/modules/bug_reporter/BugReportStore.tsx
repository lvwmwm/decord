// Module ID: 11169
// Function ID: 11170
// Name: BugReportStore
// Dependencies: [5102, 2]

// Module 11169 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5102 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
