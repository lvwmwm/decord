// Module ID: 17069
// Function ID: 17070
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17070, 17071, 17072, 17073, 17074, 17075, 17076, 17077]

// Module 17069 (FRAME_BUDGET_MS)
import types from "types" /* 17070 */;
import startFrameMonitor from "startFrameMonitor" /* 17071 */;
import useMountTimerDefault from "useMountTimer" /* 17072 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17073 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17074 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17075 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17076 */;
import MountMeasureDefault from "MountMeasure" /* 17077 */;
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
