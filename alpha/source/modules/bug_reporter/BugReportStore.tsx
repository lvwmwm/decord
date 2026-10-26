// Module ID: 13784
// Function ID: 13785
// Name: BugReportStore
// Dependencies: [5163, 2]

// Module 13784 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5163 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
