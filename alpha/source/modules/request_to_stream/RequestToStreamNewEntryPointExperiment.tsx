// Module ID: 14899
// Function ID: 14900
// Name: RequestToStreamNewEntryPointExperiment
// Dependencies: [1452, 2]

// Module 14899 (RequestToStreamNewEntryPointExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-request-to-stream-new-entry-point", defaultConfig: { showReminderPanel: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { showReminderPanel: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamNewEntryPointExperiment.tsx");

export default tmp2;
