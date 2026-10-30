// Module ID: 17687
// Function ID: 17688
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17688, 17689, 17690, 17691, 17692, 17693, 17694, 17695]

// Module 17687 (FRAME_BUDGET_MS)
import types from "types" /* 17688 */;
import startFrameMonitor from "startFrameMonitor" /* 17689 */;
import useMountTimerDefault from "useMountTimer" /* 17690 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17691 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17692 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17693 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17694 */;
import MountMeasureDefault from "MountMeasure" /* 17695 */;
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
