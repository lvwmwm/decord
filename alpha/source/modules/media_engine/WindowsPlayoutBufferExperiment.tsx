// Module ID: 16298
// Function ID: 16299
// Name: WindowsPlayoutBufferExperiment
// Dependencies: [1449, 2]
// Exports: getWindowsPlayoutBufferExperimentConfig

// Module 16298 (WindowsPlayoutBufferExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-10-windows-playout-buffer-duration", defaultConfig: { windowsOutputBufferDurationMs: null }, variations: obj2 };
obj2 = { 1: null, 2: { windowsOutputBufferDurationMs: 30 }, 3: { windowsOutputBufferDurationMs: 40 }, 4: { windowsOutputBufferDurationMs: 50 } };
obj2[4] = { windowsOutputBufferDurationMs: 60 };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/WindowsPlayoutBufferExperiment.tsx");

export function getWindowsPlayoutBufferExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
