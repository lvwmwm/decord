// Module ID: 13027
// Function ID: 13028
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 13015, 21, 5004, 558, 576, 1496, 504, 13028, 13195, 13197, 5635, 13198, 6397, 5077, 2]

// Module 13027 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _mod5077 from "module_5077" /* 5077 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6397 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13028 */;
import CheckpointCharacterReferencedAssets from "CheckpointCharacterReferencedAssets" /* 13195 */;
import useCheckpointCharacterLoadedTextureNames from "useCheckpointCharacterLoadedTextureNames" /* 13197 */;
import useCheckpointCharacterTextureSwaps from "useCheckpointCharacterTextureSwaps" /* 13198 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 13015 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let obj2;
let tmp5;
const useInitialValueDefault = tmp5(5635);
({ View: hasOwnProperty, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexGrow: 1 }, rive: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterStage(stage) {
  let chapterID;
  let faceID;
  let headwearID;
  let shoesID;
  let tmp22;
  let tmp23;
  let tmp6;
  let tmp7;
  let wearableID;
  const obj = react2;
  const cResult = obj.c(25);
  stage = stage.stage;
  const tmp4 = closure_8();
  size = useWindowDimensionsDefault();
  let str = "MobilePortrait";
  if (size.width > size.height) {
    str = "MobileLandscape";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function u() {
      return CheckpointStore.selectedCharacterTraits;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === str) {
    if (cResult[3] === stateFromStores) {
      let tmp10;
      if (cResult[4] === stage) {
        tmp10 = cResult[5];
      }
      ({ faceID, headwearID, shoesID, wearableID, chapterID } = tmp10);
      if (cResult[6] === chapterID) {
        if (cResult[7] === faceID) {
          if (cResult[8] === headwearID) {
            if (cResult[9] === str) {
              if (cResult[10] === shoesID) {
                let tmp12;
                let tmp15;
                let tmp25;
                if (cResult[11] === wearableID) {
                  tmp12 = cResult[12];
                }
                const tmpResult7 = useCheckpointCharacterLoadedTextureNames;
                const checkpointCharacterLoadedTextureNames = tmpResult7.useCheckpointCharacterLoadedTextureNames(tmp12);
                if (cResult[13] !== checkpointCharacterLoadedTextureNames) {
                  const tmpResult8 = CheckpointCharacterReferencedAssets;
                  const checkpointCharacterReferencedAssets = tmpResult8.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames);
                  cResult[13] = checkpointCharacterLoadedTextureNames;
                  cResult[14] = checkpointCharacterReferencedAssets;
                  tmp15 = checkpointCharacterReferencedAssets;
                } else {
                  tmp15 = cResult[14];
                }
                const tmp17 = useInitialValueDefault(tmp15);
                [tmp22, tmp23] = react.useState(null);
                _slicedToArray(react.useState(null), 2);
                const tmpResult9 = useCheckpointCharacterTextureSwaps;
                const checkpointCharacterTextureSwaps = tmpResult9.useCheckpointCharacterTextureSwaps(tmp22, tmp15, tmp17);
                const container = tmp4.container;
                if (cResult[15] !== stateFromStores) {
                  const tmpResult10 = CheckpointCharacterAccessibilityUtils;
                  const checkpointCharacterAccessibilityLabel = tmpResult10.getCheckpointCharacterAccessibilityLabel(stateFromStores);
                  cResult[15] = stateFromStores;
                  cResult[16] = checkpointCharacterAccessibilityLabel;
                  tmp25 = checkpointCharacterAccessibilityLabel;
                } else {
                  tmp25 = cResult[16];
                }
                if (cResult[17] === tmp10) {
                  if (cResult[18] === tmp17) {
                    let tmp27;
                    if (cResult[19] === tmp4.rive) {
                      tmp27 = cResult[20];
                    }
                    if (cResult[21] === tmp4.container) {
                      if (cResult[22] === tmp25) {
                        let tmp30;
                        if (cResult[23] === tmp27) {
                          tmp30 = cResult[24];
                        }
                        return tmp30;
                      }
                    }
                    const tmp33 = <hasOwnProperty style={container} accessible accessibilityRole="image" accessibilityLabel={tmp25}>{tmp27}</hasOwnProperty>;
                    cResult[21] = tmp4.container;
                    cResult[22] = tmp25;
                    cResult[23] = tmp27;
                    cResult[24] = tmp33;
                    tmp30 = tmp33;
                  }
                }
                const tmp29 = jsx(_mod5077.CheckpointCharacterRive, { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp17, onRiveFileChange: tmp23, dataBinding: tmp10, style: tmp4.rive });
                cResult[17] = tmp10;
                cResult[18] = tmp17;
                cResult[19] = tmp4.rive;
                cResult[20] = tmp29;
                tmp27 = tmp29;
              }
            }
          }
        }
      }
      const obj4 = { faceID, headwearID, shoesID, wearableID };
      const tmpResult11 = CheckpointCharacterReferencedAssets;
      const checkpointCharacterVisibleTextureNames = tmpResult11.getCheckpointCharacterVisibleTextureNames(obj4, chapterID, str);
      cResult[6] = chapterID;
      cResult[7] = faceID;
      cResult[8] = headwearID;
      cResult[9] = str;
      cResult[10] = shoesID;
      cResult[11] = wearableID;
      cResult[12] = checkpointCharacterVisibleTextureNames;
      tmp12 = checkpointCharacterVisibleTextureNames;
    }
  }
  const tmpResult12 = CheckpointCharacterDataBinding;
  const checkpointCharacterDataBinding = tmpResult12.getCheckpointCharacterDataBinding(stage, stateFromStores, str);
  cResult[2] = str;
  cResult[3] = stateFromStores;
  cResult[4] = stage;
  cResult[5] = checkpointCharacterDataBinding;
  tmp10 = checkpointCharacterDataBinding;
}) : (function CheckpointCharacterStage(stage) {
  let obj5;
  let obj6;
  let tmp11;
  let tmp12;
  stage = stage.stage;
  let str;
  let stateFromStores;
  let faceID;
  let headwearID;
  let shoesID;
  let wearableID;
  let chapterID;
  let checkpointCharacterLoadedTextureNames;
  const tmp = checkpointCharacterLoadedTextureNames();
  size = str(stateFromStores[8])();
  const tmp2 = str;
  str = "MobilePortrait";
  if (size.width > size.height) {
    str = "MobileLandscape";
  }
  let obj = stage(tmp3[9]);
  const items = [wearableID];
  stateFromStores = obj.useStateFromStores(items, () => wearableID.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, str];
  const memo = headwearID.useMemo(() => {
    const obj = CheckpointCharacterDataBinding;
    return obj.getCheckpointCharacterDataBinding(stage, stateFromStores, str);
  }, items1);
  faceID = memo.faceID;
  headwearID = memo.headwearID;
  shoesID = memo.shoesID;
  wearableID = memo.wearableID;
  chapterID = memo.chapterID;
  const items2 = [faceID, headwearID, shoesID, wearableID, chapterID, str];
  const memo1 = headwearID.useMemo(() => {
    const obj = CheckpointCharacterReferencedAssets;
    const obj2 = { faceID, headwearID, shoesID, wearableID };
    return obj.getCheckpointCharacterVisibleTextureNames(obj2, chapterID, str);
  }, items2);
  let obj2 = stage(tmp3[12]);
  checkpointCharacterLoadedTextureNames = obj2.useCheckpointCharacterLoadedTextureNames(memo1);
  const items3 = [checkpointCharacterLoadedTextureNames];
  const memo2 = headwearID.useMemo(() => {
    const obj = CheckpointCharacterReferencedAssets;
    return obj.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames);
  }, items3);
  const tmp9 = tmp2(stateFromStores[13])(memo2);
  [tmp11, tmp12] = faceID(headwearID.useState(null), 2);
  faceID(headwearID.useState(null), 2);
  const obj3 = stage(stateFromStores[14]);
  const checkpointCharacterTextureSwaps = obj3.useCheckpointCharacterTextureSwaps(tmp11, memo2, tmp9);
  const obj4 = { style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: obj5.getCheckpointCharacterAccessibilityLabel(stateFromStores), children: chapterID(stage(stateFromStores[16]).CheckpointCharacterRive, obj6) };
  obj5 = stage(stateFromStores[15]);
  obj6 = { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp9, onRiveFileChange: tmp12, dataBinding: memo, style: tmp.rive };
  return chapterID(shoesID, obj4);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default tmp5;
