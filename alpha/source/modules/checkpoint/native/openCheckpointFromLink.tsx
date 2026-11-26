// Module ID: 15481
// Function ID: 15482
// Name: openCheckpointFromLink
// Dependencies: [5847, 6769, 12625, 2]
// Exports: openCheckpointFromLink

// Module 15481 (openCheckpointFromLink)
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 5847 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6769 */;
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
