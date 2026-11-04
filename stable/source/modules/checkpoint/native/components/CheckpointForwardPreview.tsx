// Module ID: 12963
// Function ID: 12964
// Name: CheckpointForwardPreview
// Dependencies: [6047, 21, 558, 576, 12964, 2]

// Module 12963 (CheckpointForwardPreview)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 6047 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 12964 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointForwardPreview(checkpointData) {
  const obj = react;
  const cResult = obj.c(2);
  checkpointData = checkpointData.checkpointData;
  if (CheckpointVersions.V2025 === checkpointData.version) {
    let tmp5;
    if (cResult[0] !== checkpointData) {
      const tmp8 = jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
      cResult[0] = checkpointData;
      cResult[1] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  } else {
    const V2026 = tmp3.V2026;
    return null;
  }
}) : (function CheckpointForwardPreview(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  if (CheckpointVersions.V2025 === checkpointData.version) {
    return jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default tmp2;
