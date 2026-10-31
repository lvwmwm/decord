// Module ID: 13400
// Function ID: 13401
// Name: Checkpoint2026ForwardPreview
// Dependencies: [19, 17, 21, 5014, 6088, 6091, 6087, 1892, 5717, 13401, 575, 2]
// Exports: default

// Module 13400 (Checkpoint2026ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import react_nativeDefault from "react-native" /* 1892 */;
import FastImageDefault from "FastImage" /* 5717 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6087 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5014 */;
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
const result = size.fileFinishedImporting("modules/checkpoint/native/components/Checkpoint2026ForwardPreview.tsx");

export default function Checkpoint2026ForwardPreview(checkpointData) {
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
  const secondaryBackgroundColor = obj2.getCardColors(checkpointData.cardColorPalette).secondaryBackgroundColor;
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
        const items = [absoluteFill.absoluteFill, layer.layer];
        return jsx(FastImageDefault, { source: { uri }, style: items }, uri);
      });
    } else {
      const obj5 = { color: character(575).colors.BLACK };
      const ExperimentalCheckpointIcon = tmp2(13401).ExperimentalCheckpointIcon;
      mapped = tmp6(ExperimentalCheckpointIcon, obj5);
    }
    tmp6Result = tmp6(tmp7, obj3);
  }
  return tmp6Result;
};
