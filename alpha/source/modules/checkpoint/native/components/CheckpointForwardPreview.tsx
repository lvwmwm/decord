// Module ID: 13361
// Function ID: 13362
// Name: CheckpointForwardPreview
// Dependencies: [6061, 21, 13362, 13365, 2]
// Exports: default

// Module 13361 (CheckpointForwardPreview)
import Fragment from "Fragment" /* 21 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 13362 */;
import Checkpoint2026ForwardPreviewDefault from "Checkpoint2026ForwardPreview" /* 13365 */;
import size from "module_2" /* 2 */;

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default function CheckpointForwardPreview(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  const version = checkpointData.version;
  if (CheckpointVersions.V2025 === version) {
    return jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
  } else if (tmp.V2026 === version) {
    return jsx(Checkpoint2026ForwardPreviewDefault, { checkpointData });
  } else {
    return null;
  }
};
