// Module ID: 11099
// Function ID: 11100
// Name: BugReportStore
// Dependencies: [5505, 2]

// Module 11099 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5505 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
