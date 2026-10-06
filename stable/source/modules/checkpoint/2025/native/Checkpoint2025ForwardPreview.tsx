// Module ID: 11069
// Function ID: 11070
// Name: Checkpoint2025ForwardPreview
// Dependencies: [21, 558, 576, 11070, 5070, 5896, 2]

// Module 11069 (Checkpoint2025ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointUtils from "CheckpointUtils" /* 5070 */;
import FastImageDefault from "FastImage" /* 5896 */;
import CheckpointColors from "CheckpointColors" /* 11070 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((checkpointData) => {
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react;
  const cResult = obj.c(9);
  let num = checkpointData.checkpointData.cardId;
  if (num == null) {
    num = 0;
  }
  const tmp4 = CheckpointColors.CHECKPOINT_PERSONA_COLORS[num];
  if (cResult[0] !== tmp4.primaryColor) {
    const obj2 = { backgroundColor: tmp4.primaryColor };
    cResult[0] = tmp4.primaryColor;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== num) {
    const tmpResult = CheckpointUtils;
    const cardAssetUrl = tmpResult.getCardAssetUrl(num);
    cResult[2] = num;
    cResult[3] = cardAssetUrl;
    tmp6 = cardAssetUrl;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp6) {
    const obj3 = { uri: tmp6 };
    cResult[4] = tmp6;
    cResult[5] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[5];
  }
  if (cResult[6] === tmp5) {
    let tmp9;
    if (cResult[7] === tmp8) {
      tmp9 = cResult[8];
    }
    return tmp9;
  }
  const tmp10 = jsx(FastImageDefault, { style: tmp5, width: 56, height: 56, source: tmp8 });
  cResult[6] = tmp5;
  cResult[7] = tmp8;
  cResult[8] = tmp10;
  tmp9 = tmp10;
}) : ((checkpointData) => {
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
});
const result = size.fileFinishedImporting("modules/checkpoint/2025/native/Checkpoint2025ForwardPreview.tsx");

export default tmp2;
