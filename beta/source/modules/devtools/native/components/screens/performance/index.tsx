// Module ID: 15319
// Function ID: 15320
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15320, 15321, 15322, 15323, 15324, 15325, 15326, 15327]

// Module 15319 (FRAME_BUDGET_MS)
import types from "types" /* 15320 */;
import startFrameMonitor from "startFrameMonitor" /* 15321 */;
import useMountTimerDefault from "useMountTimer" /* 15322 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15323 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15324 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15325 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15326 */;
import MountMeasureDefault from "MountMeasure" /* 15327 */;
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
