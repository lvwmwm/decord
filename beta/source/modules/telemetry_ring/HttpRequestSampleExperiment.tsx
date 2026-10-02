// Module ID: 17064
// Function ID: 17065
// Name: HttpRequestSampleExperiment
// Dependencies: [1441, 2]
// Exports: getHttpRequestSampleRate

// Module 17064 (HttpRequestSampleExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-04-http-request-sample", defaultConfig: { sampleRate: 0 }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { sampleRate: 0.0001 };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export const getHttpRequestSampleRate = function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
};
