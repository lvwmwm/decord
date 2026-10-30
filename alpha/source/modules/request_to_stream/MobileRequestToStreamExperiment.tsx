// Module ID: 14830
// Function ID: 14831
// Name: MobileRequestToStreamExperiment
// Dependencies: [1449, 2]

// Module 14830 (MobileRequestToStreamExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", name: "2026-09-mobile-request-to-stream", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/request_to_stream/MobileRequestToStreamExperiment.tsx");

export const MobileRequestToStreamExperiment = tmp2;
