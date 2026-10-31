// Module ID: 19360
// Function ID: 19361
// Name: HttpRequestSampleExperiment
// Dependencies: [1447, 2]
// Exports: getHttpRequestSampleRate

// Module 19360 (HttpRequestSampleExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-04-http-request-sample", defaultConfig: { sampleRate: 0 }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { sampleRate: 0.0001 };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
}
