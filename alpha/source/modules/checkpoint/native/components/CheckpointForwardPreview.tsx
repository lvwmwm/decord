// Module ID: 12989
// Function ID: 12990
// Name: CheckpointForwardPreview
// Dependencies: [6050, 21, 558, 576, 12990, 12993, 2]

// Module 12989 (CheckpointForwardPreview)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 6050 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 12990 */;
import Checkpoint2026ForwardPreviewDefault from "Checkpoint2026ForwardPreview" /* 12993 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointForwardPreview(checkpointData) {
  const obj = react;
  const cResult = obj.c(4);
  checkpointData = checkpointData.checkpointData;
  const version = checkpointData.version;
  if (CheckpointVersions.V2025 === version) {
    let tmp9;
    if (cResult[0] !== checkpointData) {
      const tmp12 = jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
      cResult[0] = checkpointData;
      cResult[1] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[1];
    }
    return tmp9;
  } else if (tmp3.V2026 === version) {
    let tmp5;
    if (cResult[2] !== checkpointData) {
      const tmp8 = jsx(Checkpoint2026ForwardPreviewDefault, { checkpointData });
      cResult[2] = checkpointData;
      cResult[3] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[3];
    }
    return tmp5;
  } else {
    return null;
  }
}) : (function CheckpointForwardPreview(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  const version = checkpointData.version;
  if (CheckpointVersions.V2025 === version) {
    return jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
  } else if (tmp.V2026 === version) {
    return jsx(Checkpoint2026ForwardPreviewDefault, { checkpointData });
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default tmp2;
