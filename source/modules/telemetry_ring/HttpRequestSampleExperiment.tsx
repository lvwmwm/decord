// Module ID: 15834
// Function ID: 121050
// Name: apexExperiment
// Dependencies: []
// Exports: getHttpRequestSampleRate

// Module 15834 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { bottom: "isArray", name: "body", defaultConfig: { sampleRate: 0 }, variations: { [1]: { sampleRate: 0.0001 } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export const getHttpRequestSampleRate = function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
};
