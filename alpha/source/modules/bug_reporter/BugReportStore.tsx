// Module ID: 13687
// Function ID: 13688
// Name: BugReportStore
// Dependencies: [5145, 2]

// Module 13687 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5145 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
