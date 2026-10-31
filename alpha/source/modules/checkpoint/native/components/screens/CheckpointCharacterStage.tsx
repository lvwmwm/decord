// Module ID: 13445
// Function ID: 13446
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 13421, 21, 5014, 13446, 13614, 1491, 5612, 13612, 504, 13615, 13616, 13617, 6433, 5087, 2]
// Exports: default

// Module 13445 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import CheckpointCharacterReferencedAssets from "CheckpointCharacterReferencedAssets" /* 13446 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13612 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13615 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let tmp18;
  let tmp19;
  let tmp6Result;
  const f104569 = () => {
    const obj = stage(width[6]);
    const obj2 = { faceID: faceID2, headwearID: headwearID2, shoesID: shoesID2, wearableID: wearableID2 };
    return obj.getCheckpointCharacterVisibleTextureNames(obj2, chapterID2, device2);
  };
  stage = stage.stage;
  const characterBottomInset = stage.characterBottomInset;
  let width;
  let str;
  let textureScale;
  let stateFromStores;
  let checkpointCharacterLoadedTextureNames;
  const isActive = stage.isActive;
  const tmp = closure_8();
  let obj = str;
  const context = str.useContext(characterBottomInset(width[7]));
  size = characterBottomInset(width[8])();
  width = size.width;
  const height = size.height;
  str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp5 = characterBottomInset(width[9])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(width, height);
  });
  textureScale = tmp5;
  let obj2 = stage(tmp3[11]);
  const items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, str, characterBottomInset, height, tmp5];
  const memo = obj.useMemo(() => {
    const obj = CheckpointCharacterDataBinding;
    const obj2 = { stage, traits: stateFromStores, layout: str, characterBottomInset, stageHeight: height, textureScale };
    return obj.getCheckpointCharacterDataBinding(obj2);
  }, items1);
  const tmp9 = height(obj.useState(memo), 2);
  const first = tmp9[0];
  const faceID = memo.faceID;
  const headwearID = memo.headwearID;
  const shoesID = memo.shoesID;
  const wearableID = memo.wearableID;
  const chapterID = memo.chapterID;
  const device = memo.device;
  const items2 = [faceID, headwearID, shoesID, wearableID, chapterID, device];
  const faceID2 = first.faceID;
  const headwearID2 = first.headwearID;
  const shoesID2 = first.shoesID;
  const wearableID2 = first.wearableID;
  const chapterID2 = first.chapterID;
  const device2 = first.device;
  const items3 = [, , , , , ];
  const tmp11 = tmp9[1];
  items3[0] = faceID2;
  items3[1] = headwearID2;
  items3[2] = shoesID2;
  items3[3] = wearableID2;
  items3[4] = chapterID2;
  items3[5] = device2;
  const memo1 = obj.useMemo(f104569, items2);
  const memo2 = obj.useMemo(f104569, items3);
  const obj3 = stage(width[13]);
  checkpointCharacterLoadedTextureNames = obj3.useCheckpointCharacterLoadedTextureNames({ visibleTextureNames: memo2, requestedTextureNames: memo1 });
  const items4 = [checkpointCharacterLoadedTextureNames, tmp5];
  const memo3 = obj.useMemo(() => {
    const obj = CheckpointCharacterReferencedAssets;
    return obj.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, textureScale);
  }, items4);
  const tmp16 = characterBottomInset(width[9])(memo3);
  [tmp18, tmp19] = height(obj.useState(null), 2);
  height(obj.useState(null), 2);
  const obj4 = stage(width[14]);
  const tmp20 = obj4.useCheckpointCharacterTextureSwaps({ file: tmp18, referencedAssets: memo3, initialReferencedAssets: tmp16 }) && first !== memo;
  if (tmp20) {
    tmp11(memo);
  }
  let tmp24;
  const tmp23 = textureScale;
  if (isActive) {
    tmp24 = context;
  }
  const obj5 = { ref: tmp24, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp6Result.getCheckpointCharacterAccessibilityLabel(stateFromStores), children: checkpointCharacterLoadedTextureNames(stage(width[16]).CheckpointCharacterRive, obj6) };
  obj6 = { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp16, onRiveFileChange: tmp19, dataBinding: first, style: tmp.rive };
  tmp6Result = stage(width[15]);
  return checkpointCharacterLoadedTextureNames(tmp23, obj5);
};
