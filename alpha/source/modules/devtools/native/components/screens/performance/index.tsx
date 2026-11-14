// Module ID: 18381
// Function ID: 18382
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18382, 18383, 18384, 18385, 18386, 18387, 18388, 18389]

// Module 18381 (FRAME_BUDGET_MS)
import types from "types" /* 18382 */;
import startFrameMonitor from "startFrameMonitor" /* 18383 */;
import useMountTimerDefault from "useMountTimer" /* 18384 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18385 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18386 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18387 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18388 */;
import MountMeasureDefault from "MountMeasure" /* 18389 */;
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
