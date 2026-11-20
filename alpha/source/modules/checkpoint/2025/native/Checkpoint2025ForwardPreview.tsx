// Module ID: 9992
// Function ID: 9993
// Name: Checkpoint2025ForwardPreview
// Dependencies: [9993, 21, 5481, 9994, 5859, 2]
// Exports: default

// Module 9992 (Checkpoint2025ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5481 */;
import CheckpointUtils from "CheckpointUtils" /* 5859 */;
import checkpoint_CheckpointConstants from "checkpoint/CheckpointConstants" /* 9993 */;
import CheckpointColors from "CheckpointColors" /* 9994 */;
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
