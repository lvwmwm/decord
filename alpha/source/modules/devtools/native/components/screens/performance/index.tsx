// Module ID: 16806
// Function ID: 16807
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16807, 16808, 16809, 16810, 16811, 16812, 16813, 16814]

// Module 16806 (FRAME_BUDGET_MS)
import types from "types" /* 16807 */;
import startFrameMonitor from "startFrameMonitor" /* 16808 */;
import useMountTimerDefault from "useMountTimer" /* 16809 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16810 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16811 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16812 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16813 */;
import MountMeasureDefault from "MountMeasure" /* 16814 */;
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
