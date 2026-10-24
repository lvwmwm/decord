// Module ID: 17101
// Function ID: 17102
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17102, 17103, 17104, 17105, 17106, 17107, 17108, 17109]

// Module 17101 (FRAME_BUDGET_MS)
import types from "types" /* 17102 */;
import startFrameMonitor from "startFrameMonitor" /* 17103 */;
import useMountTimerDefault from "useMountTimer" /* 17104 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17105 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17106 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17107 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17108 */;
import MountMeasureDefault from "MountMeasure" /* 17109 */;
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
