// Module ID: 14927
// Function ID: 14928
// Name: MobileRequestToStreamExperiment
// Dependencies: [1452, 2]

// Module 14927 (MobileRequestToStreamExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", name: "2026-09-mobile-request-to-stream", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/request_to_stream/MobileRequestToStreamExperiment.tsx");

export const MobileRequestToStreamExperiment = tmp2;
