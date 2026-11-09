// Module ID: 18067
// Function ID: 18068
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18068, 18069, 18070, 18071, 18072, 18073, 18074, 18075]

// Module 18067 (FRAME_BUDGET_MS)
import types from "types" /* 18068 */;
import startFrameMonitor from "startFrameMonitor" /* 18069 */;
import useMountTimerDefault from "useMountTimer" /* 18070 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18071 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18072 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18073 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18074 */;
import MountMeasureDefault from "MountMeasure" /* 18075 */;
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
