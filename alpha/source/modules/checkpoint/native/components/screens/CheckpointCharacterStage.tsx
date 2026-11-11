// Module ID: 14198
// Function ID: 14199
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 14150, 21, 5243, 14159, 1493, 504, 5854, 14199, 14365, 14367, 14369, 14370, 14371, 6680, 5320, 2]
// Exports: default

// Module 14198 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 14199 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 14365 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let obj2;
function CheckpointCharacterStage(stage) {
  let c4;
  let dataBinding;
  let height;
  let obj9;
  let onDataBindingChange;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp5Result;
  stage = stage.stage;
  const layout = stage.layout;
  const isHidden = stage.isHidden;
  const characterBottomInset = stage.characterBottomInset;
  react = undefined;
  height = undefined;
  let closure_6;
  let stateFromStores;
  let ref;
  const isActive = stage.isActive;
  const tmp = stateFromStores();
  let obj = react;
  const tmp2 = isHidden;
  const context = react.useContext(layout(isHidden[6]));
  ({ width: c4, height } = layout(isHidden[7])());
  const items = [closure_6];
  const tmp4 = layout(isHidden[7])();
  const obj2 = stage(isHidden[8]);
  closure_6 = obj2.useStateFromStores(items, () => closure_6.compactAssets);
  const tmp6 = layout(isHidden[9])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(c4, height, closure_6);
  });
  const textureScale = tmp6;
  const items1 = [closure_6];
  const obj3 = stage(isHidden[8]);
  stateFromStores = obj3.useStateFromStores(items1, () => closure_6.selectedCharacterTraits);
  const items2 = [stage, isHidden, stateFromStores, layout, characterBottomInset, height, tmp6];
  const memo = react.useMemo(() => {
    let num;
    const obj = { stage, isHidden, traits: stateFromStores, layout, mobileLift: num, textureScale };
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
  }, items2);
  [tmp10, tmp11] = characterBottomInset(react.useState(memo), 2);
  characterBottomInset(react.useState(memo), 2);
  const obj4 = stage(isHidden[12]);
  const checkpointCharacterReferencedAssets = obj4.useCheckpointCharacterReferencedAssets({ visibleDataBinding: tmp10, requestedDataBinding: memo, textureScale: tmp6 });
  const tmp13 = layout(isHidden[9])(checkpointCharacterReferencedAssets);
  [tmp15, tmp16] = characterBottomInset(react.useState(null), 2);
  characterBottomInset(react.useState(null), 2);
  const obj5 = stage(isHidden[13]);
  const checkpointCharacterTextureManager = obj5.useCheckpointCharacterTextureManager(tmp15);
  const obj6 = stage(isHidden[14]);
  let isOutfitPreloaded = obj6.useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp13 });
  const obj7 = stage(isHidden[15]);
  const checkpointCharacterOutfitPreload = obj7.useCheckpointCharacterOutfitPreload({ visibleDataBinding: tmp10, requestedDataBinding: memo });
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
  const items3 = [isHidden];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    if (isHidden) {
      if (current != null) {
        current.pause();
      }
    } else if (current != null) {
      current.play();
    }
  }, items3);
  let tmp24;
  const tmp23 = height;
  if (isActive) {
    tmp24 = context;
  }
  const obj8 = { ref: tmp24, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp5Result.getCheckpointCharacterAccessibilityLabel(stateFromStores), children: textureScale(stage(tmp2[17]).CheckpointCharacterRive, obj9) };
  obj9 = { ref, artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp13, onRiveFileChange: tmp16, dataBinding, onDataBindingChange, style: tmp.rive };
  tmp5Result = stage(tmp2[16]);
  return textureScale(tmp23, obj8);
}
let react = react_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexGrow: 1 }, rive: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStageGate(arg0) {
  const items = [CheckpointStore];
  let tmp = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => CheckpointStore.isCharacterCreatorEnabled)) {
    const merged = Object.assign(arg0);
    tmp = <CheckpointCharacterStage />;
  }
  return tmp;
};
