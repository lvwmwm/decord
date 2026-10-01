// Module ID: 11198
// Function ID: 11199
// Name: Checkpoint2025ForwardPreview
// Dependencies: [21, 5899, 11199, 5069, 2]
// Exports: default

// Module 11198 (Checkpoint2025ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import CheckpointUtils from "CheckpointUtils" /* 5069 */;
import FastImageDefault from "FastImage" /* 5899 */;
import CheckpointColors from "CheckpointColors" /* 11199 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/2025/native/Checkpoint2025ForwardPreview.tsx");

export default function Checkpoint2025ForwardPreview(checkpointData) {
  let obj4;
  let num = checkpointData.checkpointData.cardId;
  if (num == null) {
    num = 0;
  }
  const obj = { backgroundColor: CheckpointColors.CHECKPOINT_PERSONA_COLORS[num].primaryColor };
  FastImageDefault;
  const obj2 = { uri: obj4.getCardAssetUrl(num) };
  obj4 = CheckpointUtils;
  return <tmp style={obj} width={56} height={56} source={obj2} />;
};
