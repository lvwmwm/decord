// Module ID: 16728
// Function ID: 16729
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16729, 16730, 16731, 16732, 16733, 16734, 16735, 16736]

// Module 16728 (FRAME_BUDGET_MS)
import types from "types" /* 16729 */;
import startFrameMonitor from "startFrameMonitor" /* 16730 */;
import useMountTimerDefault from "useMountTimer" /* 16731 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16732 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16733 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16734 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16735 */;
import MountMeasureDefault from "MountMeasure" /* 16736 */;
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
