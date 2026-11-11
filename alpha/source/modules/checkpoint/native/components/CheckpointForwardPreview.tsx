// Module ID: 15074
// Function ID: 15075
// Name: CheckpointForwardPreview
// Dependencies: [6314, 21, 15075, 15078, 2]
// Exports: default

// Module 15074 (CheckpointForwardPreview)
import Fragment from "Fragment" /* 21 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 15075 */;
import Checkpoint2026ForwardPreviewDefault from "Checkpoint2026ForwardPreview" /* 15078 */;
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
