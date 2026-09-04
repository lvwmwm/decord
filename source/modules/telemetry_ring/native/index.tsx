// Module ID: 1207
// Function ID: 1208
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1208, 14108, 14115, 14116, 14109, 14112]

// Module 1207 (TelemetryRingLifecycle)
import set from "set" /* 2 */;
import _updateZoomedInExportDefault from "_updateZoomedInExport" /* 1208 */;
import shouldRunDefault from "shouldRun" /* 14108 */;
import apexExperiment from "apexExperiment" /* 14109 */;
import TelemetryChannel from "TelemetryChannel" /* 14112 */;
import snapshotForBreadcrumbsDefault from "snapshotForBreadcrumbs" /* 14115 */;
import NormalTelemetryImplDefault from "NormalTelemetryImpl" /* 14116 */;

const result = set.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = _updateZoomedInExportDefault;
export const ZoomedInTelemetry = shouldRunDefault;
export const SentryTelemetry = snapshotForBreadcrumbsDefault;
export const NormalTelemetry = NormalTelemetryImplDefault;
export const isZoomedExperimentEnabled = apexExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryChannel.TelemetryChannel;
