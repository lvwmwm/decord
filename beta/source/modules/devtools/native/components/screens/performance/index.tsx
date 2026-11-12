// Module ID: 18105
// Function ID: 18106
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18106, 18107, 18108, 18109, 18110, 18111, 18112, 18113]

// Module 18105 (FRAME_BUDGET_MS)
import types from "types" /* 18106 */;
import startFrameMonitor from "startFrameMonitor" /* 18107 */;
import useMountTimerDefault from "useMountTimer" /* 18108 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18109 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18110 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18111 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18112 */;
import MountMeasureDefault from "MountMeasure" /* 18113 */;
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
