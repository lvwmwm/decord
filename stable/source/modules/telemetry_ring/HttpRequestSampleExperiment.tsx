// Module ID: 17398
// Function ID: 17399
// Name: HttpRequestSampleExperiment
// Dependencies: [1433, 2]
// Exports: getHttpRequestSampleRate

// Module 17398 (HttpRequestSampleExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-04-http-request-sample", defaultConfig: { sampleRate: 0 }, variations: null };
const obj2 = { 1: null };
obj2[1] = { sampleRate: 0.0001 };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export const getHttpRequestSampleRate = function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
};
