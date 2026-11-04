// Module ID: 11274
// Function ID: 11275
// Name: BugReportStore
// Dependencies: [5335, 2]

// Module 11274 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5335 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
