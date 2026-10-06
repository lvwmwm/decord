// Module ID: 1245
// Function ID: 1246
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1246, 1990, 13624, 13625, 1991, 1994]

// Module 1245 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1246 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1990 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1991 */;
import TelemetryRingNative from "TelemetryRingNative" /* 1994 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 13624 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 13625 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;
