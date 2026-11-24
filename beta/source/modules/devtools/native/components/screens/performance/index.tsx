// Module ID: 17167
// Function ID: 17168
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17168, 17169, 17170, 17171, 17172, 17173, 17174, 17175]

// Module 17167 (FRAME_BUDGET_MS)
import types from "types" /* 17168 */;
import startFrameMonitor from "startFrameMonitor" /* 17169 */;
import useMountTimerDefault from "useMountTimer" /* 17170 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17171 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17172 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17173 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17174 */;
import MountMeasureDefault from "MountMeasure" /* 17175 */;
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
