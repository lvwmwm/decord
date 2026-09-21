// Module ID: 13008
// Function ID: 13009
// Name: BugReportStore
// Dependencies: [4629, 2]

// Module 13008 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4629 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
