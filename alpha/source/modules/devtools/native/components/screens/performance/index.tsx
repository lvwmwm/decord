// Module ID: 17317
// Function ID: 17318
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 17318, 17319, 17320, 17321, 17322, 17323, 17324, 17325]

// Module 17317 (FRAME_BUDGET_MS)
import types from "types" /* 17318 */;
import startFrameMonitor from "startFrameMonitor" /* 17319 */;
import useMountTimerDefault from "useMountTimer" /* 17320 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 17321 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 17322 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 17323 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 17324 */;
import MountMeasureDefault from "MountMeasure" /* 17325 */;
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
