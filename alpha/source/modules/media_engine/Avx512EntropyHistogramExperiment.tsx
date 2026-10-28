// Module ID: 5879
// Function ID: 5880
// Name: Avx512EntropyHistogramExperiment
// Dependencies: [1452, 2]
// Exports: getIsAvx512EntropyHistogramEnabled

// Module 5879 (Avx512EntropyHistogramExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-avx512-entropy-histogram", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/Avx512EntropyHistogramExperiment.tsx");

export const getIsAvx512EntropyHistogramEnabled = function getIsAvx512EntropyHistogramEnabled(RTCConnection) {
  const obj = { location: RTCConnection };
  return config.getConfig(obj).enabled;
};
