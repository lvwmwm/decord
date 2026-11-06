// Module ID: 13672
// Function ID: 13673
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 13643, 21, 5170, 13673, 1493, 5769, 13674, 504, 13840, 13842, 13844, 13845, 13846, 6590, 5235, 2]
// Exports: default

// Module 13672 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13674 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13840 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 13643 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let obj2;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexGrow: 1 }, rive: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStage(stage) {
  let c4;
  let dataBinding;
  let height;
  let obj8;
  let onDataBindingChange;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp6Result;
  stage = stage.stage;
  const layout = stage.layout;
  const isHidden = stage.isHidden;
  const characterBottomInset = stage.characterBottomInset;
  react = undefined;
  height = undefined;
  let ref;
  const isActive = stage.isActive;
  const tmp = ref();
  let obj = react;
  const tmp2 = isHidden;
  const context = react.useContext(layout(isHidden[6]));
  ({ width: c4, height } = layout(isHidden[7])());
  const tmp4 = layout(isHidden[7])();
  const tmp5 = layout(isHidden[8])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(c4, height);
  });
  const textureScale = tmp5;
  const items = [textureScale];
  const obj2 = stage(isHidden[10]);
  const stateFromStores = obj2.useStateFromStores(items, () => textureScale.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, layout, characterBottomInset, height, tmp5];
  const memo = react.useMemo(() => {
    let num;
    const obj = { stage, traits: stateFromStores, layout, mobileLift: num, textureScale };
    num = 0;
    const getCheckpointCharacterDataBinding = CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding;
    CheckpointCharacterDataBinding;
    if ("MobilePortrait" === layout) {
      let num2 = 30;
      if (null != characterBottomInset) {
        const _Math = Math;
        num2 = Math.round((0.75 * tmp3 - (tmp3 - tmp2)) / tmp3 * 1080);
      }
      num = num2;
    }
    return getCheckpointCharacterDataBinding(obj);
  }, items1);
  [tmp10, tmp11] = characterBottomInset(react.useState(memo), 2);
  characterBottomInset(react.useState(memo), 2);
  const obj3 = stage(isHidden[12]);
  const checkpointCharacterReferencedAssets = obj3.useCheckpointCharacterReferencedAssets({ visibleDataBinding: tmp10, requestedDataBinding: memo, textureScale: tmp5 });
  const tmp13 = layout(isHidden[8])(checkpointCharacterReferencedAssets);
  [tmp15, tmp16] = characterBottomInset(react.useState(null), 2);
  characterBottomInset(react.useState(null), 2);
  const obj4 = stage(isHidden[13]);
  const checkpointCharacterTextureManager = obj4.useCheckpointCharacterTextureManager(tmp15);
  const obj5 = stage(isHidden[14]);
  let isOutfitPreloaded = obj5.useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp13 });
  const obj6 = stage(isHidden[15]);
  const checkpointCharacterOutfitPreload = obj6.useCheckpointCharacterOutfitPreload({ visibleDataBinding: tmp10, requestedDataBinding: memo });
  ({ dataBinding, onDataBindingChange } = checkpointCharacterOutfitPreload);
  if (isOutfitPreloaded) {
    isOutfitPreloaded = checkpointCharacterOutfitPreload.isOutfitPreloaded;
  }
  if (isOutfitPreloaded) {
    isOutfitPreloaded = tmp10 !== memo;
  }
  if (isOutfitPreloaded) {
    tmp11(memo);
  }
  ref = obj.useRef(null);
  const items2 = [isHidden];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    if (isHidden) {
      if (current != null) {
        current.pause();
      }
    } else if (current != null) {
      current.play();
    }
  }, items2);
  let tmp24;
  const tmp23 = height;
  if (isActive) {
    tmp24 = context;
  }
  const obj7 = { ref: tmp24, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp6Result.getCheckpointCharacterAccessibilityLabel(stateFromStores), children: stateFromStores(stage(tmp2[17]).CheckpointCharacterRive, obj8) };
  obj8 = { ref, artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp13, onRiveFileChange: tmp16, dataBinding, onDataBindingChange, style: tmp.rive };
  tmp6Result = stage(tmp2[16]);
  return stateFromStores(tmp23, obj7);
};
