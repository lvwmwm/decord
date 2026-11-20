// Module ID: 18385
// Function ID: 18386
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18386, 18387, 18388, 18389, 18390, 18391, 18392, 18393]

// Module 18385 (FRAME_BUDGET_MS)
import types from "types" /* 18386 */;
import startFrameMonitor from "startFrameMonitor" /* 18387 */;
import useMountTimerDefault from "useMountTimer" /* 18388 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18389 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18390 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18391 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18392 */;
import MountMeasureDefault from "MountMeasure" /* 18393 */;
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
