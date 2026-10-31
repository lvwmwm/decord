// Module ID: 11087
// Function ID: 11088
// Name: BugReportStore
// Dependencies: [5211, 2]

// Module 11087 (BugReportStore)
import ZustandStore from "ZustandStore" /* 5211 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ isReportOpen: false }));
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportStore.tsx");

export default zustandStore;
