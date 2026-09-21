// Module ID: 1237
// Function ID: 1238
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1238, 1987, 14352, 14353, 1988, 1991]

// Module 1237 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1238 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1987 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1988 */;
import TelemetryRingNative from "TelemetryRingNative" /* 1991 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 14352 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 14353 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;
