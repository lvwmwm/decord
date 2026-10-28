// Module ID: 13817
// Function ID: 13818
// Name: BugReportStore
// Dependencies: [5195, 2]

// Module 13817 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5195 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
