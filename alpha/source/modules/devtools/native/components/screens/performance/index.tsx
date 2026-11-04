// Module ID: 17983
// Function ID: 17984
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17984, 17985, 17986, 17987, 17988, 17989, 17990, 17991]

// Module 17983 (FRAME_BUDGET_MS)
import types from "types" /* 17984 */;
import startFrameMonitor from "startFrameMonitor" /* 17985 */;
import useMountTimerDefault from "useMountTimer" /* 17986 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17987 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17988 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17989 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17990 */;
import MountMeasureDefault from "MountMeasure" /* 17991 */;
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
