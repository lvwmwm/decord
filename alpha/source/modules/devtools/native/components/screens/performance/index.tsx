// Module ID: 17995
// Function ID: 17996
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17996, 17997, 17998, 17999, 18000, 18001, 18002, 18003]

// Module 17995 (FRAME_BUDGET_MS)
import types from "types" /* 17996 */;
import startFrameMonitor from "startFrameMonitor" /* 17997 */;
import useMountTimerDefault from "useMountTimer" /* 17998 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17999 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18000 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18001 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18002 */;
import MountMeasureDefault from "MountMeasure" /* 18003 */;
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
