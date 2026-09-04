// Module ID: 15652
// Function ID: 15653
// Name: FRAME_BUDGET_MS
// Dependencies: [2, 15653, 15654, 15655, 15656, 15657, 15658, 15659, 15660]

// Module 15652 (FRAME_BUDGET_MS)
import set from "set" /* 2 */;
import FRAME_BUDGET_MS from "FRAME_BUDGET_MS" /* 15654 */;
import useMountTimerDefault from "useMountTimer" /* 15655 */;
import useFrameMonitorDefault from "useFrameMonitor" /* 15656 */;
import useBenchmarkResultsDefault from "useBenchmarkResults" /* 15657 */;
import BenchmarkResultsListDefault from "BenchmarkResultsList" /* 15658 */;
import ScrollBenchmarkDefault from "ScrollBenchmark" /* 15659 */;
import MountMeasureDefault from "MountMeasure" /* 15660 */;

const result = set.fileFinishedImporting("modules/devtools/native/components/screens/performance/index.tsx");
for (const key10018 in require("set")) {
  let tmp3 = key10018;
  arg5[key10018] = require("set")[key10018];
  continue;
}

export const FRAME_BUDGET_MS = FRAME_BUDGET_MS.FRAME_BUDGET_MS;
export const startFrameMonitor = FRAME_BUDGET_MS.startFrameMonitor;
export const useMountTimer = useMountTimerDefault;
export const useFrameMonitor = useFrameMonitorDefault;
export const useBenchmarkResults = useBenchmarkResultsDefault;
export const BenchmarkResultsList = BenchmarkResultsListDefault;
export const ScrollBenchmark = ScrollBenchmarkDefault;
export const MountMeasure = MountMeasureDefault;
