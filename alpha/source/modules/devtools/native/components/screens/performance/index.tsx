// Module ID: 16858
// Function ID: 16859
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16859, 16860, 16861, 16862, 16863, 16864, 16865, 16866]

// Module 16858 (FRAME_BUDGET_MS)
import types from "types" /* 16859 */;
import startFrameMonitor from "startFrameMonitor" /* 16860 */;
import useMountTimerDefault from "useMountTimer" /* 16861 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16862 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16863 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16864 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16865 */;
import MountMeasureDefault from "MountMeasure" /* 16866 */;
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
