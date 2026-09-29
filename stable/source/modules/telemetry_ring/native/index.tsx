// Module ID: 1233
// Function ID: 1234
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1234, 1983, 14380, 14381, 1984, 1987]

// Module 1233 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1234 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1983 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1984 */;
import TelemetryRingNative from "TelemetryRingNative" /* 1987 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 14380 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 14381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;
