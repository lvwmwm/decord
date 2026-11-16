// Module ID: 18383
// Function ID: 18384
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18384, 18385, 18386, 18387, 18388, 18389, 18390, 18391]

// Module 18383 (FRAME_BUDGET_MS)
import types from "types" /* 18384 */;
import startFrameMonitor from "startFrameMonitor" /* 18385 */;
import useMountTimerDefault from "useMountTimer" /* 18386 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18387 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18388 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18389 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18390 */;
import MountMeasureDefault from "MountMeasure" /* 18391 */;
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
