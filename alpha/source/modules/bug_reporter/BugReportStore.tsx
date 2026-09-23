// Module ID: 10526
// Function ID: 10527
// Name: BugReportStore
// Dependencies: [4697, 2]

// Module 10526 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4697 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
