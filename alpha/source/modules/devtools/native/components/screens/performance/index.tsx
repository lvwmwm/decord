// Module ID: 17105
// Function ID: 17106
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17106, 17107, 17108, 17109, 17110, 17111, 17112, 17113]

// Module 17105 (FRAME_BUDGET_MS)
import types from "types" /* 17106 */;
import startFrameMonitor from "startFrameMonitor" /* 17107 */;
import useMountTimerDefault from "useMountTimer" /* 17108 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17109 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17110 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17111 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17112 */;
import MountMeasureDefault from "MountMeasure" /* 17113 */;
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
