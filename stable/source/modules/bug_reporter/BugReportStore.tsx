// Module ID: 12631
// Function ID: 12632
// Name: BugReportStore
// Dependencies: [4989, 2]

// Module 12631 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4989 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
