// Module ID: 16839
// Function ID: 16840
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16840, 16841, 16842, 16843, 16844, 16845, 16846, 16847]

// Module 16839 (FRAME_BUDGET_MS)
import types from "types" /* 16840 */;
import startFrameMonitor from "startFrameMonitor" /* 16841 */;
import useMountTimerDefault from "useMountTimer" /* 16842 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16843 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16844 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16845 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16846 */;
import MountMeasureDefault from "MountMeasure" /* 16847 */;
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
