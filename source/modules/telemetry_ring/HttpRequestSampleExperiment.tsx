// Module ID: 16497
// Function ID: 16498
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: getHttpRequestSampleRate

// Module 16497 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { sampleRate: 0.0001 };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-http-request-sample", defaultConfig: { sampleRate: 0 }, variations: obj });
const result = require("set").fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export const getHttpRequestSampleRate = function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
};
