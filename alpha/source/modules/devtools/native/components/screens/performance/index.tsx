// Module ID: 17147
// Function ID: 17148
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17148, 17149, 17150, 17151, 17152, 17153, 17154, 17155]

// Module 17147 (FRAME_BUDGET_MS)
import types from "types" /* 17148 */;
import startFrameMonitor from "startFrameMonitor" /* 17149 */;
import useMountTimerDefault from "useMountTimer" /* 17150 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17151 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17152 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17153 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17154 */;
import MountMeasureDefault from "MountMeasure" /* 17155 */;
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
