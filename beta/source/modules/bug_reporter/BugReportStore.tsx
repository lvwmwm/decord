// Module ID: 11174
// Function ID: 11175
// Name: BugReportStore
// Dependencies: [5102, 2]

// Module 11174 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5102 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
