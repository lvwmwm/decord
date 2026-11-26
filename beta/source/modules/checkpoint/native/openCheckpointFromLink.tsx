// Module ID: 15299
// Function ID: 15300
// Name: openCheckpointFromLink
// Dependencies: [7263, 6340, 12500, 2]
// Exports: openCheckpointFromLink

// Module 15299 (openCheckpointFromLink)
import CheckpointExperiments from "CheckpointExperiments" /* 6340 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 7263 */;
import size from "module_2" /* 2 */;

const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
const result = size.fileFinishedImporting("modules/checkpoint/native/openCheckpointFromLink.tsx");

export function openCheckpointFromLink() {
  let tmp = addPostConnectionCallback(() => {
    const obj = CheckpointExperiments;
    const tmp = require;
    const tmp2 = dependencyMap;
    if (obj.getIsCheckpointEnabled("openCheckpointFromLink")) {
      const tmpResult = tmp(tmp2[2]);
      tmpResult.openCheckpoint("deep_link");
    }
  });
}
