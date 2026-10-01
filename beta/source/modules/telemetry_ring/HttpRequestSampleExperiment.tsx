// Module ID: 17062
// Function ID: 17063
// Name: HttpRequestSampleExperiment
// Dependencies: [1435, 2]
// Exports: getHttpRequestSampleRate

// Module 17062 (HttpRequestSampleExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
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
