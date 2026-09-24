// Module ID: 16041
// Function ID: 16042
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 16042, 16043, 16044, 16045, 16046, 16047, 16048, 16049]

// Module 16041 (FRAME_BUDGET_MS)
import startFrameMonitor from "startFrameMonitor" /* 16043 */;
import useMountTimerDefault from "useMountTimer" /* 16044 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 16045 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 16046 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 16047 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 16048 */;
import MountMeasureDefault from "MountMeasure" /* 16049 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in require("types")) {
  arg5[key10018] = require("types")[key10018];
  continue;
}

export const FRAME_BUDGET_MS = startFrameMonitor.FRAME_BUDGET_MS;
export const startFrameMonitor = startFrameMonitor.startFrameMonitor;
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;
