// Module ID: 15904
// Function ID: 15905
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15905, 15906, 15907, 15908, 15909, 15910, 15911, 15912]

// Module 15904 (FRAME_BUDGET_MS)
import types from "types" /* 15905 */;
import startFrameMonitor from "startFrameMonitor" /* 15906 */;
import useMountTimerDefault from "useMountTimer" /* 15907 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15908 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15909 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15910 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15911 */;
import MountMeasureDefault from "MountMeasure" /* 15912 */;
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
