// Module ID: 1256
// Function ID: 1257
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1257, 2002, 14215, 14216, 2003, 2006]

// Module 1256 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1257 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 2002 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 2003 */;
import TelemetryRingNative from "TelemetryRingNative" /* 2006 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 14215 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 14216 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;
