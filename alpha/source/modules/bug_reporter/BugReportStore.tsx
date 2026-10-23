// Module ID: 13760
// Function ID: 13761
// Name: BugReportStore
// Dependencies: [5161, 2]

// Module 13760 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5161 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
