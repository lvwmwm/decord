// Module ID: 12946
// Function ID: 12947
// Name: Checkpoint2026ForwardPreview
// Dependencies: [19, 17, 21, 4972, 558, 576, 6038, 8624, 6037, 1897, 5670, 12947, 587, 2]

// Module 12946 (Checkpoint2026ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import react_nativeDefault from "react-native" /* 1897 */;
import FastImageDefault from "FastImage" /* 5670 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6037 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let items;
let obj2;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let obj = { preview: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, layer: obj2 };
obj2 = { transform: items };
items = [{ translateY: -2 }];
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Checkpoint2026ForwardPreview(checkpointData) {
  let arr;
  let layer;
  let tmp6;
  const obj = require("react");
  const cResult = obj.c(16);
  checkpointData = checkpointData.checkpointData;
  const tmp4 = closure_7();
  _require = tmp4;
  const character = checkpointData.character;
  const obj2 = require("CheckpointExperiments");
  const isCheckpointCardEnabled = obj2.useIsCheckpointCardEnabled("Checkpoint2026ForwardPreview");
  if (cResult[0] !== character) {
    const tmpResult = require("CheckpointCardColors");
    const cardColors = tmpResult.getCardColors(character);
    cResult[0] = character;
    cResult[1] = cardColors;
    tmp6 = cardColors;
  } else {
    tmp6 = cResult[1];
  }
  const secondaryBackgroundColor = tmp6.secondaryBackgroundColor;
  if (cResult[2] !== character) {
    let characterLayerUrls;
    if (null != character) {
      const _Math = Math;
      const tmpResult2 = require("checkpoint/CheckpointMessageComponentUtils");
      characterLayerUrls = tmpResult2.getCharacterLayerUrls(character, Math.round(56 * react_nativeDefault()));
    } else {
      characterLayerUrls = [];
    }
    cResult[2] = character;
    cResult[3] = characterLayerUrls;
    arr = characterLayerUrls;
  } else {
    arr = cResult[3];
  }
  let tmp11 = null;
  if (isCheckpointCardEnabled) {
    let tmp12;
    if (cResult[4] !== secondaryBackgroundColor) {
      const obj3 = { backgroundColor: secondaryBackgroundColor };
      cResult[4] = secondaryBackgroundColor;
      cResult[5] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === tmp4.preview) {
      let tmp13;
      let mapped;
      if (cResult[7] === tmp12) {
        tmp13 = cResult[8];
      }
      if (cResult[9] === character) {
        if (cResult[10] === arr) {
          let tmp14;
          if (cResult[11] === tmp4.layer) {
            tmp14 = cResult[12];
          }
          if (cResult[13] === tmp13) {
            let tmp18;
            if (cResult[14] === tmp14) {
              tmp18 = cResult[15];
            }
            tmp11 = tmp18;
          }
          const tmp21 = <closure_5 style={tmp13}>{tmp14}</closure_5>;
          cResult[13] = tmp13;
          cResult[14] = tmp14;
          cResult[15] = tmp21;
          tmp18 = tmp21;
        }
      }
      if (null != character) {
        mapped = arr.map((uri) => {
          const items = [React3.absoluteFill, layer.layer];
          return jsx(FastImageDefault, { source: { uri }, style: items }, uri);
        });
      } else {
        const ExperimentalCheckpointIcon = tmp(12947).ExperimentalCheckpointIcon;
        mapped = <ExperimentalCheckpointIcon color={nativeDefault.colors.BLACK} />;
      }
      cResult[9] = character;
      cResult[10] = arr;
      cResult[11] = tmp4.layer;
      cResult[12] = mapped;
      tmp14 = mapped;
    }
    let items = [tmp4.preview, tmp12];
    cResult[6] = tmp4.preview;
    cResult[7] = tmp12;
    cResult[8] = items;
    tmp13 = items;
  }
  return tmp11;
}) : (function Checkpoint2026ForwardPreview(checkpointData) {
  let items1;
  let layer;
  let mapped;
  checkpointData = checkpointData.checkpointData;
  const tmp = closure_7();
  _require = tmp;
  let obj = require("CheckpointExperiments");
  const character = checkpointData.character;
  const isCheckpointCardEnabled = obj.useIsCheckpointCardEnabled("Checkpoint2026ForwardPreview");
  let items = [character];
  const obj2 = require("CheckpointCardColors");
  const secondaryBackgroundColor = obj2.getCardColors(character).secondaryBackgroundColor;
  const memo = react.useMemo(() => {
    let characterLayerUrls;
    if (null != character) {
      const _Math = Math;
      const obj = checkpoint_CheckpointMessageComponentUtils;
      characterLayerUrls = obj.getCharacterLayerUrls(tmp, Math.round(56 * react_nativeDefault()));
    } else {
      characterLayerUrls = [];
    }
    return characterLayerUrls;
  }, items);
  let tmp6Result = null;
  const tmp2 = _require;
  if (isCheckpointCardEnabled) {
    const obj3 = { style: items1, children: mapped };
    items1 = [tmp.preview, ];
    const obj4 = { backgroundColor: secondaryBackgroundColor };
    items1[1] = obj4;
    const tmp7 = closure_5;
    if (null != character) {
      mapped = memo.map((uri) => {
        const items = [React3.absoluteFill, layer.layer];
        return jsx(FastImageDefault, { source: { uri }, style: items }, uri);
      });
    } else {
      const obj5 = { color: character(587).colors.BLACK };
      const ExperimentalCheckpointIcon = tmp2(12947).ExperimentalCheckpointIcon;
      mapped = tmp6(ExperimentalCheckpointIcon, obj5);
    }
    tmp6Result = tmp6(tmp7, obj3);
  }
  return tmp6Result;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/Checkpoint2026ForwardPreview.tsx");

export default tmp3;
