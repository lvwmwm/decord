// Module ID: 17106
// Function ID: 17107
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17107, 17108, 17109, 17110, 17111, 17112, 17113, 17114]

// Module 17106 (FRAME_BUDGET_MS)
import types from "types" /* 17107 */;
import startFrameMonitor from "startFrameMonitor" /* 17108 */;
import useMountTimerDefault from "useMountTimer" /* 17109 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17110 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17111 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17112 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17113 */;
import MountMeasureDefault from "MountMeasure" /* 17114 */;
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
