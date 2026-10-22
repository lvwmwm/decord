// Module ID: 17025
// Function ID: 17026
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17026, 17027, 17028, 17029, 17030, 17031, 17032, 17033]

// Module 17025 (FRAME_BUDGET_MS)
import types from "types" /* 17026 */;
import startFrameMonitor from "startFrameMonitor" /* 17027 */;
import useMountTimerDefault from "useMountTimer" /* 17028 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17029 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17030 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17031 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17032 */;
import MountMeasureDefault from "MountMeasure" /* 17033 */;
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
