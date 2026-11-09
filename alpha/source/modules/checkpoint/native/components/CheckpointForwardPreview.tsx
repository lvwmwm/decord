// Module ID: 13643
// Function ID: 13644
// Name: CheckpointForwardPreview
// Dependencies: [6199, 21, 13644, 13647, 2]
// Exports: default

// Module 13643 (CheckpointForwardPreview)
import Fragment from "Fragment" /* 21 */;
import CheckpointConstants from "CheckpointConstants" /* 6199 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 13644 */;
import Checkpoint2026ForwardPreviewDefault from "Checkpoint2026ForwardPreview" /* 13647 */;
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
