// Module ID: 8953
// Function ID: 8954
// Name: RequestToStreamNonGamesExperiment
// Dependencies: [1449, 2]

// Module 8953 (RequestToStreamNonGamesExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-request-to-stream-non-games", kind: "guild", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamNonGamesExperiment.tsx");

export default apexExperiment;
