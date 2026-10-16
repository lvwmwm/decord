// Module ID: 16111
// Function ID: 16112
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16112, 16113, 16114, 16115, 16116, 16117, 16118, 16119]

// Module 16111 (FRAME_BUDGET_MS)
import types from "types" /* 16112 */;
import startFrameMonitor from "startFrameMonitor" /* 16113 */;
import useMountTimerDefault from "useMountTimer" /* 16114 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16115 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16116 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16117 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16118 */;
import MountMeasureDefault from "MountMeasure" /* 16119 */;
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
