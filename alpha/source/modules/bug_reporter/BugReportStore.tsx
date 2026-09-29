// Module ID: 9811
// Function ID: 9812
// Name: BugReportStore
// Dependencies: [4705, 2]

// Module 9811 (BugReportStore)
import ZustandStore from "ZustandStore" /* 4705 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
