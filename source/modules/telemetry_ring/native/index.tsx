// Module ID: 1210
// Function ID: 1211
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1211, 13522, 13529, 13530, 13523, 13526]

// Module 1210 (TelemetryRingLifecycle)
const result = require("shouldRun").fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = require("_updateZoomedInExport");
export const ZoomedInTelemetry = require("shouldRun");
export const SentryTelemetry = require("snapshotForBreadcrumbs");
export const NormalTelemetry = require("NormalTelemetryImpl");
export const isZoomedExperimentEnabled = require("apexExperiment").isZoomedExperimentEnabled;
export const TelemetryChannel = require("TelemetryChannel").TelemetryChannel;
