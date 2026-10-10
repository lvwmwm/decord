// Module ID: 16083
// Function ID: 16084
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16084, 16085, 16086, 16087, 16088, 16089, 16090, 16091]

// Module 16083 (FRAME_BUDGET_MS)
import types from "types" /* 16084 */;
import startFrameMonitor from "startFrameMonitor" /* 16085 */;
import useMountTimerDefault from "useMountTimer" /* 16086 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16087 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16088 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16089 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16090 */;
import MountMeasureDefault from "MountMeasure" /* 16091 */;
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
