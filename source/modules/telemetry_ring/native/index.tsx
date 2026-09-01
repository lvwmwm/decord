// Module ID: 1210
// Function ID: 1211
// Name: TelemetryRingLifecycle
// Dependencies: [2, 1211, 13837, 13844, 13845, 13838, 13841]

// Module 1210 (TelemetryRingLifecycle)
import set from "set" /* 2 */;
import _updateZoomedInExportDefault from "_updateZoomedInExport" /* 1211 */;
import shouldRunDefault from "shouldRun" /* 13837 */;
import apexExperiment from "apexExperiment" /* 13838 */;
import TelemetryChannel from "TelemetryChannel" /* 13841 */;
import snapshotForBreadcrumbsDefault from "snapshotForBreadcrumbs" /* 13844 */;
import NormalTelemetryImplDefault from "NormalTelemetryImpl" /* 13845 */;

const result = set.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = _updateZoomedInExportDefault;
export const ZoomedInTelemetry = shouldRunDefault;
export const SentryTelemetry = snapshotForBreadcrumbsDefault;
export const NormalTelemetry = NormalTelemetryImplDefault;
export const isZoomedExperimentEnabled = apexExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryChannel.TelemetryChannel;
