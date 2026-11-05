// Module ID: 13644
// Function ID: 13645
// Name: Checkpoint2025ForwardPreview
// Dependencies: [13645, 21, 5854, 13646, 6213, 2]
// Exports: default

// Module 13644 (Checkpoint2025ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5854 */;
import CheckpointUtils from "CheckpointUtils" /* 6213 */;
import checkpoint_CheckpointConstants from "checkpoint/CheckpointConstants" /* 13645 */;
import CheckpointColors from "CheckpointColors" /* 13646 */;
import size from "module_2" /* 2 */;

const CheckpointPersonas = checkpoint_CheckpointConstants.CheckpointPersonas;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/2025/native/Checkpoint2025ForwardPreview.tsx");

export default function Checkpoint2025ForwardPreview(checkpointData) {
  let obj4;
  let num = checkpointData.checkpointData.cardId;
  if (num == null) {
    num = 0;
  }
  const values = Object.values(CheckpointPersonas);
  let NINE = values.find((item) => item === num);
  const tmp = CheckpointPersonas;
  if (typeof NINE !== "number") {
    NINE = tmp.NINE;
  }
  const obj = { backgroundColor: CheckpointColors.CHECKPOINT_PERSONA_COLORS[NINE].primaryColor };
  FastImageDefault;
  const obj2 = { uri: obj4.getCardAssetUrl(num) };
  obj4 = CheckpointUtils;
  return <tmp2 style={obj} width={56} height={56} source={obj2} />;
};
