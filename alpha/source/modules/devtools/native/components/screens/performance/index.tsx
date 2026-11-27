// Module ID: 17375
// Function ID: 17376
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17376, 17377, 17378, 17379, 17380, 17381, 17382, 17383]

// Module 17375 (FRAME_BUDGET_MS)
import types from "types" /* 17376 */;
import startFrameMonitor from "startFrameMonitor" /* 17377 */;
import useMountTimerDefault from "useMountTimer" /* 17378 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17379 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17380 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17381 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17382 */;
import MountMeasureDefault from "MountMeasure" /* 17383 */;
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
