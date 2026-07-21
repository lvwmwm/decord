// Module ID: 1186
// Function ID: 13532
// Name: TelemetryRingLifecycle
// Dependencies: []

// Module 1186 (TelemetryRingLifecycle)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = importDefault(dependencyMap[1]);
export const ZoomedInTelemetry = importDefault(dependencyMap[2]);
export const SentryTelemetry = importDefault(dependencyMap[3]);
export const NormalTelemetry = importDefault(dependencyMap[4]);
export const isZoomedExperimentEnabled = require(dependencyMap[5]).isZoomedExperimentEnabled;
export const TelemetryChannel = require(dependencyMap[6]).TelemetryChannel;
