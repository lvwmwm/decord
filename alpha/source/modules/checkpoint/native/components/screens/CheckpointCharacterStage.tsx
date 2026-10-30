// Module ID: 13408
// Function ID: 13409
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 13386, 21, 5009, 13409, 1492, 5607, 13410, 504, 13576, 13578, 13579, 13580, 6428, 5082, 2]
// Exports: default

// Module 13408 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13410 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13576 */;
import CheckpointCharacterReferencedAssets from "CheckpointCharacterReferencedAssets" /* 13578 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStage(stage) {
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
  const context = str.useContext(characterBottomInset(width[6]));
  size = characterBottomInset(width[7])();
  width = size.width;
  const height = size.height;
  str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp5 = characterBottomInset(width[8])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(width, height);
  });
  textureScale = tmp5;
  let obj2 = stage(tmp3[10]);
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
  const obj3 = stage(width[13]);
  checkpointCharacterLoadedTextureNames = obj3.useCheckpointCharacterLoadedTextureNames(memo1);
  const items3 = [checkpointCharacterLoadedTextureNames, tmp5];
  const memo2 = obj.useMemo(() => {
    const obj = CheckpointCharacterReferencedAssets;
    return obj.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, textureScale);
  }, items3);
  const tmp12 = characterBottomInset(width[8])(memo2);
  [tmp14, tmp15] = height(obj.useState(null), 2);
  height(obj.useState(null), 2);
  const obj4 = stage(width[14]);
  const checkpointCharacterTextureSwaps = obj4.useCheckpointCharacterTextureSwaps(tmp14, memo2, tmp12);
  let tmp19;
  const tmp18 = textureScale;
  if (isActive) {
    tmp19 = context;
  }
  const obj5 = { ref: tmp19, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp6Result.getCheckpointCharacterAccessibilityLabel(stateFromStores), children: faceID(stage(width[16]).CheckpointCharacterRive, obj6) };
  obj6 = { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp12, onRiveFileChange: tmp15, dataBinding: memo, style: tmp.rive };
  tmp6Result = stage(width[15]);
  return faceID(tmp18, obj5);
};
