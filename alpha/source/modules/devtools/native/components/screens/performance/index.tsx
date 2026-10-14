// Module ID: 16456
// Function ID: 16457
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16457, 16458, 16459, 16460, 16461, 16462, 16463, 16464]

// Module 16456 (FRAME_BUDGET_MS)
import types from "types" /* 16457 */;
import startFrameMonitor from "startFrameMonitor" /* 16458 */;
import useMountTimerDefault from "useMountTimer" /* 16459 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16460 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16461 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16462 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16463 */;
import MountMeasureDefault from "MountMeasure" /* 16464 */;
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
