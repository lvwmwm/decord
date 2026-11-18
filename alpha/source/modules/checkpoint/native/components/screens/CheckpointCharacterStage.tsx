// Module ID: 12469
// Function ID: 12470
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 12417, 21, 4823, 12430, 1496, 504, 5402, 12470, 12636, 12638, 12639, 12641, 12642, 12643, 6246, 12644, 6243, 4890, 2]
// Exports: default

// Module 12469 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 12470 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 12636 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 12417 */;
import createStyles_mod from "createStyles" /* 4823 */;
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
  let tmp17;
  let tmp18;
  let tmp5Result2;
  stage = stage.stage;
  const layout = stage.layout;
  const isHidden = stage.isHidden;
  ({ characterBottomInset, onExitPlaying } = stage);
  react = undefined;
  height = undefined;
  let closure_6;
  let stateFromStores;
  let closure_10;
  let ref;
  let num;
  const isActive = stage.isActive;
  let tmp = stateFromStores();
  let obj = react;
  const context = react.useContext(layout(isHidden[6]));
  ({ width: c4, height } = layout(isHidden[7])());
  layout(isHidden[7])();
  let obj2 = stage(isHidden[8]);
  const items = [closure_6];
  closure_6 = obj2.useStateFromStores(items, () => closure_6.compactAssets);
  const tmp6 = layout(isHidden[9])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(c4, height, closure_6);
  });
  const textureScale = tmp6;
  const items1 = [closure_6];
  const obj3 = stage(isHidden[8]);
  stateFromStores = obj3.useStateFromStores(items1, () => closure_6.selectedCharacterTraits);
  const items2 = [stage, isHidden, stateFromStores, layout, tmp6];
  const memo = react.useMemo(() => {
    const obj = CheckpointCharacterDataBinding;
    const obj2 = { stage, isHidden, traits: stateFromStores, layout, textureScale };
    return obj.getCheckpointCharacterDataBinding(obj2);
  }, items2);
  const tmp9 = onExitPlaying(react.useState(memo), 2);
  const first = tmp9[0];
  const tmp11 = tmp9[1];
  const obj4 = stage(isHidden[12]);
  const checkpointCharacterPreloadedTextureNames = obj4.useCheckpointCharacterPreloadedTextureNames(stage, tmp12);
  const obj5 = stage(isHidden[13]);
  const checkpointCharacterReferencedAssets = obj5.useCheckpointCharacterReferencedAssets({ visibleDataBinding: first, requestedDataBinding: memo, textureScale: tmp6, preloadedTextureNames: checkpointCharacterPreloadedTextureNames });
  const tmp15 = layout(isHidden[9])(checkpointCharacterReferencedAssets);
  [tmp17, tmp18] = onExitPlaying(react.useState(null), 2);
  onExitPlaying(react.useState(null), 2);
  const obj6 = stage(isHidden[14]);
  const checkpointCharacterTextureManager = obj6.useCheckpointCharacterTextureManager(tmp17);
  const obj7 = stage(isHidden[15]);
  let isOutfitPreloaded = obj7.useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp15 });
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
    tmp11(memo);
  }
  const tmp22 = stage === stage(isHidden[17]).CheckpointCharacterStage.EXIT && first === memo;
  closure_10 = tmp22;
  const items3 = [tmp22, onExitPlaying];
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
  let tmp31;
  const tmp5Result = stage(isHidden[18]);
  const checkpointCharacterGradientFadeIn = tmp5Result.useCheckpointCharacterGradientFadeIn({ stage, dataBinding: memo1 });
  const tmp30 = height;
  if (isActive) {
    tmp31 = context;
  }
  const obj9 = { ref: tmp31, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp5Result2.getCheckpointCharacterAccessibilityLabel(stateFromStores), children: textureScale(stage(isHidden[20]).CheckpointCharacterRive, obj10) };
  obj10 = { ref, artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp15, onRiveFileChange: tmp18, dataBinding: checkpointCharacterGradientFadeIn, onDataBindingChange, style: tmp.rive };
  tmp5Result2 = stage(isHidden[19]);
  return textureScale(tmp30, obj9);
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
