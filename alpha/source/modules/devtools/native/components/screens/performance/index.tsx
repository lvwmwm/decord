// Module ID: 16106
// Function ID: 16107
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16107, 16108, 16109, 16110, 16111, 16112, 16113, 16114]

// Module 16106 (FRAME_BUDGET_MS)
import types from "types" /* 16107 */;
import startFrameMonitor from "startFrameMonitor" /* 16108 */;
import useMountTimerDefault from "useMountTimer" /* 16109 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16110 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16111 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16112 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16113 */;
import MountMeasureDefault from "MountMeasure" /* 16114 */;
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
