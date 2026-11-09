// Module ID: 15107
// Function ID: 15108
// Name: MobileRequestToStreamExperiment
// Dependencies: [1450, 2]

// Module 15107 (MobileRequestToStreamExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", name: "2026-09-mobile-request-to-stream", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/request_to_stream/MobileRequestToStreamExperiment.tsx");

export const MobileRequestToStreamExperiment = tmp2;
