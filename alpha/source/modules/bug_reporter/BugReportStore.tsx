// Module ID: 11038
// Function ID: 11039
// Name: BugReportStore
// Dependencies: [5442, 2]

// Module 11038 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5442 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
