// Module ID: 15830
// Function ID: 121006
// Name: apexExperiment
// Dependencies: []
// Exports: getHttpRequestSampleRate

// Module 15830 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { margin: true, paddingHorizontal: true, defaultConfig: { sampleRate: 0 }, variations: { [1]: { sampleRate: 0.0001 } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export const getHttpRequestSampleRate = function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
};
