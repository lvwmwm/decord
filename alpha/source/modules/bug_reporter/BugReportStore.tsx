// Module ID: 9837
// Function ID: 9838
// Name: BugReportStore
// Dependencies: [4734, 2]

// Module 9837 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4734 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
