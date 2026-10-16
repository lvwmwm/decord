// Module ID: 11126
// Function ID: 11127
// Name: RequestToStreamNonGamesExperiment
// Dependencies: [1455, 2]

// Module 11126 (RequestToStreamNonGamesExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-request-to-stream-non-games", kind: "guild", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamNonGamesExperiment.tsx");

export default apexExperiment;
