// Module ID: 17204
// Function ID: 17205
// Name: apexExperiment
// Dependencies: [1468, 2]
// Exports: getHttpRequestSampleRate

// Module 17204 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { sampleRate: 0.0001 };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-http-request-sample", defaultConfig: { sampleRate: 0 }, variations: obj });
const result = set.fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export const getHttpRequestSampleRate = function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
};
