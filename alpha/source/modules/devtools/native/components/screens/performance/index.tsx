// Module ID: 17169
// Function ID: 17170
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17170, 17171, 17172, 17173, 17174, 17175, 17176, 17177]

// Module 17169 (FRAME_BUDGET_MS)
import types from "types" /* 17170 */;
import startFrameMonitor from "startFrameMonitor" /* 17171 */;
import useMountTimerDefault from "useMountTimer" /* 17172 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17173 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17174 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17175 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17176 */;
import MountMeasureDefault from "MountMeasure" /* 17177 */;
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
