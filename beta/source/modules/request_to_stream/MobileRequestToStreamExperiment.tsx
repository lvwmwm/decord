// Module ID: 14489
// Function ID: 14490
// Name: MobileRequestToStreamExperiment
// Dependencies: [1451, 2]

// Module 14489 (MobileRequestToStreamExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", name: "2026-09-mobile-request-to-stream", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/request_to_stream/MobileRequestToStreamExperiment.tsx");

export const MobileRequestToStreamExperiment = tmp2;
