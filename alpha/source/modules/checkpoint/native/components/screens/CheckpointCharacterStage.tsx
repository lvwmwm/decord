// Module ID: 13599
// Function ID: 13600
// Name: CheckpointCharacterStage
// Dependencies: [32, 19, 17, 13571, 21, 5141, 13600, 1493, 5735, 13601, 504, 13767, 13769, 13771, 13772, 6553, 5214, 2]
// Exports: default

// Module 13599 (CheckpointCharacterStage)
import Fragment from "Fragment" /* 21 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13601 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13767 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 13571 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let obj2;
let _slicedToArray = _slicedToArray_mod;
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
  let c3;
  let height;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  stage = stage.stage;
  const layout = stage.layout;
  const characterBottomInset = stage.characterBottomInset;
  _slicedToArray = undefined;
  height = undefined;
  let stateFromStores;
  const isActive = stage.isActive;
  const tmp = closure_8();
  const context = height.useContext(layout(characterBottomInset[6]));
  ({ width: c3, height } = layout(characterBottomInset[7])());
  layout(characterBottomInset[7])();
  const tmp5 = layout(characterBottomInset[8])(() => {
    const obj = CheckpointCharacterTextureUtils;
    return obj.getCheckpointCharacterTextureScale(c3, height);
  });
  const textureScale = tmp5;
  let obj = stage(characterBottomInset[10]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, layout, characterBottomInset, height, tmp5];
  const memo = height.useMemo(() => {
    const obj = CheckpointCharacterDataBinding;
    const obj2 = { stage, traits: stateFromStores, layout, characterBottomInset, stageHeight: height, textureScale };
    return obj.getCheckpointCharacterDataBinding(obj2);
  }, items1);
  [tmp10, tmp11] = height.useState(memo);
  _slicedToArray(height.useState(memo), 2);
  let obj2 = stage(characterBottomInset[12]);
  const checkpointCharacterReferencedAssets = obj2.useCheckpointCharacterReferencedAssets({ visibleDataBinding: tmp10, requestedDataBinding: memo, textureScale: tmp5 });
  const tmp13 = layout(characterBottomInset[8])(checkpointCharacterReferencedAssets);
  [tmp15, tmp16] = height.useState(null);
  _slicedToArray(height.useState(null), 2);
  const obj3 = stage(characterBottomInset[13]);
  const checkpointCharacterTextureManager = obj3.useCheckpointCharacterTextureManager(tmp15);
  const obj4 = stage(characterBottomInset[14]);
  const tmp18 = obj4.useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp13 }) && tmp10 !== memo;
  if (tmp18) {
    tmp11(memo);
  }
  let tmp22;
  if (isActive) {
    tmp22 = context;
  }
  const tmp6Result = stage(characterBottomInset[15]);
  return <tmp21 ref={tmp22} style={tmp.container} accessible accessibilityRole="image" accessibilityLabel={tmp6Result.getCheckpointCharacterAccessibilityLabel(stateFromStores)}>{null}</tmp21>;
};
