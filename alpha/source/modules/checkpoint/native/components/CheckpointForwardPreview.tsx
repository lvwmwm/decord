// Module ID: 9988
// Function ID: 9989
// Name: CheckpointForwardPreview
// Dependencies: [5848, 21, 9989, 9992, 2]
// Exports: default

// Module 9988 (CheckpointForwardPreview)
import Fragment from "Fragment" /* 21 */;
import CheckpointConstants from "CheckpointConstants" /* 5848 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 9989 */;
import Checkpoint2026ForwardPreviewDefault from "Checkpoint2026ForwardPreview" /* 9992 */;
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
