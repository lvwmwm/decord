// Module ID: 16810
// Function ID: 16811
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16811, 16812, 16813, 16814, 16815, 16816, 16817, 16818]

// Module 16810 (FRAME_BUDGET_MS)
import types from "types" /* 16811 */;
import startFrameMonitor from "startFrameMonitor" /* 16812 */;
import useMountTimerDefault from "useMountTimer" /* 16813 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16814 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16815 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16816 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16817 */;
import MountMeasureDefault from "MountMeasure" /* 16818 */;
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
