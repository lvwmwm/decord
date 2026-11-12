// Module ID: 13676
// Function ID: 13677
// Name: Checkpoint2025ForwardPreview
// Dependencies: [13677, 21, 5874, 13678, 6240, 2]
// Exports: default

// Module 13676 (Checkpoint2025ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import CheckpointUtils from "CheckpointUtils" /* 6240 */;
import checkpoint_CheckpointConstants from "checkpoint/CheckpointConstants" /* 13677 */;
import CheckpointColors from "CheckpointColors" /* 13678 */;
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
