// Module ID: 13785
// Function ID: 13786
// Name: BugReportStore
// Dependencies: [5163, 2]

// Module 13785 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5163 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
