// Module ID: 1207
// Function ID: 1208
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1208, 14076, 14083, 14084, 14077, 14080]

// Module 1207 (TelemetryRingLifecycle)
import set from "set" /* 2 */;
import _updateZoomedInExportDefault from "_updateZoomedInExport" /* 1208 */;
import shouldRunDefault from "shouldRun" /* 14076 */;
import apexExperiment from "apexExperiment" /* 14077 */;
import TelemetryChannel from "TelemetryChannel" /* 14080 */;
import snapshotForBreadcrumbsDefault from "snapshotForBreadcrumbs" /* 14083 */;
import NormalTelemetryImplDefault from "NormalTelemetryImpl" /* 14084 */;

const result = set.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = _updateZoomedInExportDefault;
export const ZoomedInTelemetry = shouldRunDefault;
export const SentryTelemetry = snapshotForBreadcrumbsDefault;
export const NormalTelemetry = NormalTelemetryImplDefault;
export const isZoomedExperimentEnabled = apexExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryChannel.TelemetryChannel;
