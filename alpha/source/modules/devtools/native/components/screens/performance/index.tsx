// Module ID: 16419
// Function ID: 16420
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16420, 16421, 16422, 16423, 16424, 16425, 16426, 16427]

// Module 16419 (FRAME_BUDGET_MS)
import types from "types" /* 16420 */;
import startFrameMonitor from "startFrameMonitor" /* 16421 */;
import useMountTimerDefault from "useMountTimer" /* 16422 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16423 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16424 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16425 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16426 */;
import MountMeasureDefault from "MountMeasure" /* 16427 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in types) {
  exports[key10018] = types[key10018];
  continue;
}
const startFrameMonitor_export = startFrameMonitor.startFrameMonitor;

export const FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
export { startFrameMonitor_export as startFrameMonitor };
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;
