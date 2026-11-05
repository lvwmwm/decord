// Module ID: 18023
// Function ID: 18024
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 18024, 18025, 18026, 18027, 18028, 18029, 18030, 18031]

// Module 18023 (FRAME_BUDGET_MS)
import types from "types" /* 18024 */;
import startFrameMonitor from "startFrameMonitor" /* 18025 */;
import useMountTimerDefault from "useMountTimer" /* 18026 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 18027 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 18028 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 18029 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 18030 */;
import MountMeasureDefault from "MountMeasure" /* 18031 */;
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
