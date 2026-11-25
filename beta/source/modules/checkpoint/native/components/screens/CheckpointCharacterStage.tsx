// Module ID: 12545
// Function ID: 12546
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 12495, 21, 4913, 12510, 1494, 504, 5492, 12546, 12712, 12714, 12715, 12717, 12718, 12719, 6338, 12720, 6335, 4980, 2]
// Exports: default

// Module 12545 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 12546 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 12712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 12495 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let obj2;
function CheckpointCharacterStage(stage) {
  let c4;
  let characterBottomInset;
  let height;
  let obj10;
  let onExitPlaying;
  let tmp18;
  let tmp19;
  let tmp5Result2;
  stage = stage.stage;
  const layout = stage.layout;
  const isHidden = stage.isHidden;
  ({ characterBottomInset, onExitPlaying } = stage);
  react = undefined;
  height = undefined;
  let stateFromStores;
  let stateFromStores1;
  let closure_10;
  let ref;
  let num;
  const isActive = stage.isActive;
  let tmp = stateFromStores1();
  let obj = react;
  const context = react.useContext(layout(isHidden[6]));
  ({ width: c4, height } = layout(isHidden[7])());
  layout(isHidden[7])();
  let obj2 = stage(isHidden[8]);
  const items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores.compactAssets);
  const tmp7 = layout(isHidden[9])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(c4, height);
  });
  const textureScale = tmp7;
  const items1 = [stateFromStores];
  const obj3 = stage(isHidden[8]);
  stateFromStores1 = obj3.useStateFromStores(items1, () => stateFromStores.selectedCharacterTraits);
  const items2 = [stage, isHidden, stateFromStores1, layout, tmp7, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = CheckpointCharacterDataBinding;
    const obj2 = { stage, isHidden, traits: stateFromStores1, layout, textureScale, compactAssets: stateFromStores };
    return obj.getCheckpointCharacterDataBinding(obj2);
  }, items2);
  const tmp10 = onExitPlaying(react.useState(memo), 2);
  const first = tmp10[0];
  const tmp12 = tmp10[1];
  const obj4 = stage(isHidden[12]);
  const checkpointCharacterPreloadedTextureNames = obj4.useCheckpointCharacterPreloadedTextureNames(stage, tmp13);
  const obj5 = stage(isHidden[13]);
  const checkpointCharacterReferencedAssets = obj5.useCheckpointCharacterReferencedAssets({ visibleDataBinding: first, requestedDataBinding: memo, textureScale: tmp7, preloadedTextureNames: checkpointCharacterPreloadedTextureNames, compactAssets: stateFromStores });
  const tmp16 = layout(isHidden[9])(checkpointCharacterReferencedAssets);
  [tmp18, tmp19] = onExitPlaying(react.useState(null), 2);
  onExitPlaying(react.useState(null), 2);
  const obj6 = stage(isHidden[14]);
  const checkpointCharacterTextureManager = obj6.useCheckpointCharacterTextureManager(tmp18);
  const obj7 = stage(isHidden[15]);
  let isOutfitPreloaded = obj7.useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp16 });
  const obj8 = stage(isHidden[16]);
  const checkpointCharacterOutfitPreload = obj8.useCheckpointCharacterOutfitPreload({ visibleDataBinding: first, requestedDataBinding: memo });
  const dataBinding = checkpointCharacterOutfitPreload.dataBinding;
  const onDataBindingChange = checkpointCharacterOutfitPreload.onDataBindingChange;
  if (isOutfitPreloaded) {
    isOutfitPreloaded = checkpointCharacterOutfitPreload.isOutfitPreloaded;
  }
  if (isOutfitPreloaded) {
    isOutfitPreloaded = first !== memo;
  }
  if (isOutfitPreloaded) {
    tmp12(memo);
  }
  const tmp23 = stage === stage(isHidden[17]).CheckpointCharacterStage.EXIT && first === memo;
  closure_10 = tmp23;
  const items3 = [tmp23, onExitPlaying];
  const effect = obj.useEffect(() => {
    const tmp = closure_10;
    if (tmp) {
      onExitPlaying();
    }
  }, items3);
  ref = obj.useRef(null);
  const items4 = [isHidden];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (isHidden) {
      if (current != null) {
        current.pause();
      }
    } else if (current != null) {
      current.play();
    }
  }, items4);
  num = 0;
  if ("MobilePortrait" === layout) {
    let num2 = 30;
    if (null != characterBottomInset) {
      const _Math = Math;
      num2 = Math.round((0.75 * height - (height - characterBottomInset)) / height * 1080);
    }
    num = num2;
  }
  const items5 = [dataBinding, num];
  const memo1 = obj.useMemo(() => {
    const obj = { mobileLift: num };
    const merged = Object.assign(dataBinding);
    return obj;
  }, items5);
  let tmp32;
  const tmp5Result = stage(isHidden[18]);
  const checkpointCharacterGradientFadeIn = tmp5Result.useCheckpointCharacterGradientFadeIn({ stage, dataBinding: memo1 });
  const tmp31 = height;
  if (isActive) {
    tmp32 = context;
  }
  const obj9 = { ref: tmp32, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp5Result2.getCheckpointCharacterAccessibilityLabel(stateFromStores1), children: textureScale(stage(isHidden[20]).CheckpointCharacterRive, obj10) };
  obj10 = { ref, artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp16, onRiveFileChange: tmp19, dataBinding: checkpointCharacterGradientFadeIn, onDataBindingChange, style: tmp.rive };
  tmp5Result2 = stage(isHidden[19]);
  return textureScale(tmp31, obj9);
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
