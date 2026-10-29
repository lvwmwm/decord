// Module ID: 13258
// Function ID: 13259
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 13236, 21, 5005, 558, 576, 13259, 1497, 13260, 5636, 504, 13426, 13428, 13429, 13430, 6421, 5078, 2]

// Module 13258 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13260 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13426 */;
import CheckpointCharacterReferencedAssets from "CheckpointCharacterReferencedAssets" /* 13428 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 13236 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let obj2;
({ View: hasOwnProperty, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexGrow: 1 }, rive: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterStage(isActive) {
  let chapterID;
  let characterBottomInset;
  let faceID;
  let headwearID;
  let height;
  let shoesID;
  let stage;
  let tmp25;
  let tmp26;
  let wearableID;
  let width;
  let obj = width(576);
  const cResult = obj.c(33);
  ({ stage, characterBottomInset } = isActive);
  isActive = isActive.isActive;
  const tmp4 = closure_8();
  const context = react.useContext(height(13259));
  size = height(1497)();
  width = size.width;
  height = size.height;
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  if (cResult[0] === height) {
    let tmp7;
    let tmp11;
    let tmp10;
    if (cResult[1] === width) {
      tmp7 = cResult[2];
    }
    const tmp8 = height(5636)(tmp7);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [CheckpointStore];
      const fn2 = function x() {
        return CheckpointStore.selectedCharacterTraits;
      };
      cResult[3] = items;
      cResult[4] = fn2;
      tmp11 = fn2;
      tmp10 = items;
    } else {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    const tmpResult = width(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
    if (cResult[5] === characterBottomInset) {
      if (cResult[6] === height) {
        if (cResult[7] === str) {
          if (cResult[8] === stateFromStores) {
            if (cResult[9] === stage) {
              let tmp14;
              if (cResult[10] === tmp8) {
                tmp14 = cResult[11];
              }
              ({ faceID, headwearID, shoesID, wearableID, chapterID } = tmp14);
              if (cResult[12] === chapterID) {
                if (cResult[13] === faceID) {
                  if (cResult[14] === headwearID) {
                    if (cResult[15] === str) {
                      if (cResult[16] === shoesID) {
                        let tmp16;
                        if (cResult[17] === wearableID) {
                          tmp16 = cResult[18];
                        }
                        const tmpResult7 = width(13429);
                        const checkpointCharacterLoadedTextureNames = tmpResult7.useCheckpointCharacterLoadedTextureNames(tmp16);
                        if (cResult[19] === checkpointCharacterLoadedTextureNames) {
                          let tmp19;
                          let tmp29;
                          if (cResult[20] === tmp8) {
                            tmp19 = cResult[21];
                          }
                          const tmp21 = height(5636)(tmp19);
                          [tmp25, tmp26] = react.useState(null);
                          _slicedToArray(react.useState(null), 2);
                          const tmpResult8 = width(13430);
                          const checkpointCharacterTextureSwaps = tmpResult8.useCheckpointCharacterTextureSwaps(tmp25, tmp19, tmp21);
                          const container = tmp4.container;
                          if (cResult[22] !== stateFromStores) {
                            const tmpResult9 = width(6421);
                            const checkpointCharacterAccessibilityLabel = tmpResult9.getCheckpointCharacterAccessibilityLabel(stateFromStores);
                            cResult[22] = stateFromStores;
                            cResult[23] = checkpointCharacterAccessibilityLabel;
                            tmp29 = checkpointCharacterAccessibilityLabel;
                          } else {
                            tmp29 = cResult[23];
                          }
                          if (cResult[24] === tmp14) {
                            if (cResult[25] === tmp21) {
                              let tmp31;
                              if (cResult[26] === tmp4.rive) {
                                tmp31 = cResult[27];
                              }
                              if (cResult[28] === tmp4.container) {
                                if (cResult[29] === tmp31) {
                                  if (cResult[30] === tmp28) {
                                    let tmp34;
                                    if (cResult[31] === tmp29) {
                                      tmp34 = cResult[32];
                                    }
                                    return tmp34;
                                  }
                                }
                              }
                              const tmp37 = <closure_5 ref={tmp28} style={container} accessible accessibilityRole="image" accessibilityLabel={tmp29}>{tmp31}</closure_5>;
                              cResult[28] = tmp4.container;
                              cResult[29] = tmp31;
                              cResult[30] = tmp28;
                              cResult[31] = tmp29;
                              cResult[32] = tmp37;
                              tmp34 = tmp37;
                            }
                          }
                          const tmp33 = jsx(width(5078).CheckpointCharacterRive, { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp21, onRiveFileChange: tmp26, dataBinding: tmp14, style: tmp4.rive });
                          cResult[24] = tmp14;
                          cResult[25] = tmp21;
                          cResult[26] = tmp4.rive;
                          cResult[27] = tmp33;
                          tmp31 = tmp33;
                        }
                        const tmpResult10 = width(13428);
                        const checkpointCharacterReferencedAssets = tmpResult10.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, tmp8);
                        cResult[19] = checkpointCharacterLoadedTextureNames;
                        cResult[20] = tmp8;
                        cResult[21] = checkpointCharacterReferencedAssets;
                        tmp19 = checkpointCharacterReferencedAssets;
                      }
                    }
                  }
                }
              }
              const obj5 = { faceID, headwearID, shoesID, wearableID };
              const tmpResult11 = width(13428);
              const checkpointCharacterVisibleTextureNames = tmpResult11.getCheckpointCharacterVisibleTextureNames(obj5, chapterID, str);
              cResult[12] = chapterID;
              cResult[13] = faceID;
              cResult[14] = headwearID;
              cResult[15] = str;
              cResult[16] = shoesID;
              cResult[17] = wearableID;
              cResult[18] = checkpointCharacterVisibleTextureNames;
              tmp16 = checkpointCharacterVisibleTextureNames;
            }
          }
        }
      }
    }
    const obj6 = { stage, traits: stateFromStores, layout: str, characterBottomInset, stageHeight: height, textureScale: tmp8 };
    const tmpResult12 = width(13426);
    const checkpointCharacterDataBinding = tmpResult12.getCheckpointCharacterDataBinding(obj6);
    cResult[5] = characterBottomInset;
    cResult[6] = height;
    cResult[7] = str;
    cResult[8] = stateFromStores;
    cResult[9] = stage;
    cResult[10] = tmp8;
    cResult[11] = checkpointCharacterDataBinding;
    tmp14 = checkpointCharacterDataBinding;
  }
  const fn = function n() {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(width, height);
  };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function CheckpointCharacterStage(stage) {
  let obj6;
  let tmp14;
  let tmp15;
  let tmp6Result;
  stage = stage.stage;
  const characterBottomInset = stage.characterBottomInset;
  let width;
  let str;
  let textureScale;
  let stateFromStores;
  let faceID;
  let headwearID;
  let shoesID;
  let wearableID;
  let chapterID;
  let checkpointCharacterLoadedTextureNames;
  const isActive = stage.isActive;
  const tmp = headwearID();
  let obj = str;
  const context = str.useContext(characterBottomInset(width[8]));
  size = characterBottomInset(width[9])();
  width = size.width;
  const height = size.height;
  str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp5 = characterBottomInset(width[11])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(width, height);
  });
  textureScale = tmp5;
  let obj2 = stage(tmp3[12]);
  const items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, str, characterBottomInset, height, tmp5];
  const memo = obj.useMemo(() => {
    const obj = CheckpointCharacterDataBinding;
    const obj2 = { stage, traits: stateFromStores, layout: str, characterBottomInset, stageHeight: height, textureScale };
    return obj.getCheckpointCharacterDataBinding(obj2);
  }, items1);
  faceID = memo.faceID;
  headwearID = memo.headwearID;
  shoesID = memo.shoesID;
  wearableID = memo.wearableID;
  chapterID = memo.chapterID;
  const items2 = [faceID, headwearID, shoesID, wearableID, chapterID, str];
  const memo1 = obj.useMemo(() => {
    const obj = CheckpointCharacterReferencedAssets;
    const obj2 = { faceID, headwearID, shoesID, wearableID };
    return obj.getCheckpointCharacterVisibleTextureNames(obj2, chapterID, str);
  }, items2);
  const obj3 = stage(width[15]);
  checkpointCharacterLoadedTextureNames = obj3.useCheckpointCharacterLoadedTextureNames(memo1);
  const items3 = [checkpointCharacterLoadedTextureNames, tmp5];
  const memo2 = obj.useMemo(() => {
    const obj = CheckpointCharacterReferencedAssets;
    return obj.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, textureScale);
  }, items3);
  const tmp12 = characterBottomInset(width[11])(memo2);
  [tmp14, tmp15] = height(obj.useState(null), 2);
  height(obj.useState(null), 2);
  const obj4 = stage(width[16]);
  const checkpointCharacterTextureSwaps = obj4.useCheckpointCharacterTextureSwaps(tmp14, memo2, tmp12);
  let tmp19;
  const tmp18 = textureScale;
  if (isActive) {
    tmp19 = context;
  }
  const obj5 = { ref: tmp19, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp6Result.getCheckpointCharacterAccessibilityLabel(stateFromStores), children: faceID(stage(width[18]).CheckpointCharacterRive, obj6) };
  obj6 = { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp12, onRiveFileChange: tmp15, dataBinding: memo, style: tmp.rive };
  tmp6Result = stage(width[17]);
  return faceID(tmp18, obj5);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default tmp5;
