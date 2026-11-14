// Module ID: 14301
// Function ID: 14302
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 14253, 21, 5306, 14266, 1496, 504, 5917, 14302, 14468, 14470, 14472, 14473, 14474, 14475, 6743, 5383, 2]
// Exports: default

// Module 14301 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 14302 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 14468 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let obj2;
function CheckpointCharacterStage(stage) {
  let c3;
  let height;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp5Result2;
  stage = stage.stage;
  const layout = stage.layout;
  const isHidden = stage.isHidden;
  const characterBottomInset = stage.characterBottomInset;
  _slicedToArray = undefined;
  height = undefined;
  let textureScale;
  let dataBinding;
  let ref;
  let num;
  const isActive = stage.isActive;
  const tmp = dataBinding();
  let obj = height;
  const context = height.useContext(layout(isHidden[6]));
  ({ width: c3, height } = layout(isHidden[7])());
  layout(isHidden[7])();
  let obj2 = stage(isHidden[8]);
  const items = [textureScale];
  let closure_5 = obj2.useStateFromStores(items, () => textureScale.compactAssets);
  const tmp6 = layout(isHidden[9])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(c3, height, closure_5);
  });
  textureScale = tmp6;
  const items1 = [textureScale];
  const obj3 = stage(isHidden[8]);
  const stateFromStores = obj3.useStateFromStores(items1, () => textureScale.selectedCharacterTraits);
  const items2 = [stage, isHidden, stateFromStores, layout, tmp6];
  const memo = height.useMemo(() => {
    const obj = CheckpointCharacterDataBinding;
    const obj2 = { stage, isHidden, traits: stateFromStores, layout, textureScale };
    return obj.getCheckpointCharacterDataBinding(obj2);
  }, items2);
  [tmp10, tmp11] = height.useState(memo);
  _slicedToArray(height.useState(memo), 2);
  const obj4 = stage(isHidden[12]);
  const checkpointCharacterReferencedAssets = obj4.useCheckpointCharacterReferencedAssets({ visibleDataBinding: tmp10, requestedDataBinding: memo, textureScale: tmp6 });
  const tmp13 = layout(isHidden[9])(checkpointCharacterReferencedAssets);
  [tmp15, tmp16] = height.useState(null);
  _slicedToArray(height.useState(null), 2);
  const obj5 = stage(isHidden[13]);
  const checkpointCharacterTextureManager = obj5.useCheckpointCharacterTextureManager(tmp15);
  const obj6 = stage(isHidden[14]);
  let isOutfitPreloaded = obj6.useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp13 });
  const obj7 = stage(isHidden[15]);
  const checkpointCharacterOutfitPreload = obj7.useCheckpointCharacterOutfitPreload({ visibleDataBinding: tmp10, requestedDataBinding: memo });
  dataBinding = checkpointCharacterOutfitPreload.dataBinding;
  const onDataBindingChange = checkpointCharacterOutfitPreload.onDataBindingChange;
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
  num = 0;
  if ("MobilePortrait" === layout) {
    let num2 = 30;
    if (null != characterBottomInset) {
      const _Math = Math;
      num2 = Math.round((0.75 * height - (height - characterBottomInset)) / height * 1080);
    }
    num = num2;
  }
  const items4 = [dataBinding, num];
  const memo1 = obj.useMemo(() => {
    const obj = { mobileLift: num };
    const merged = Object.assign(dataBinding);
    return obj;
  }, items4);
  let tmp27;
  const tmp5Result = stage(isHidden[16]);
  const checkpointCharacterGradientFadeIn = tmp5Result.useCheckpointCharacterGradientFadeIn({ stage, dataBinding: memo1 });
  const tmp26 = closure_5;
  if (isActive) {
    tmp27 = context;
  }
  const obj8 = { ref: tmp27, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp5Result2.getCheckpointCharacterAccessibilityLabel(stateFromStores), children: stateFromStores(stage(isHidden[18]).CheckpointCharacterRive, obj9) };
  obj9 = { ref, artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp13, onRiveFileChange: tmp16, dataBinding: checkpointCharacterGradientFadeIn, onDataBindingChange, style: tmp.rive };
  tmp5Result2 = stage(isHidden[17]);
  return stateFromStores(tmp26, obj8);
}
let _slicedToArray = _slicedToArray_mod;
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
