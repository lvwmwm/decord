// Module ID: 14299
// Function ID: 14300
// Name: CheckpointCharacterStageLayer
// Dependencies: [32, 19, 17, 14276, 21, 6836, 14300, 14301, 2]
// Exports: default

// Module 14299 (CheckpointCharacterStageLayer)
import usePrevious from "usePrevious" /* 6836 */;
import CheckpointFadeLayerDefault from "CheckpointFadeLayer" /* 14300 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 14276 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp13;
const CheckpointCharacterStageDefault = tmp13(14301);
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ CHECKPOINT_CHARACTER_STAGE_HIDE: metroImportDefault, CHECKPOINT_INSTANT: metroImportAll } = CheckpointTransitionConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCharacterStageLayer.tsx");

export default function CheckpointCharacterStageLayer(arg0) {
  let characterBottomInset;
  let children;
  let isActive;
  let isCovered;
  let items;
  let layout;
  let stage;
  let str;
  let str2;
  let style;
  let tmp2;
  let tmp3;
  ({ stage, isCovered, isActive } = arg0);
  ({ layout, characterBottomInset, style, children } = arg0);
  [tmp2, tmp3] = react.useState(isCovered);
  let c0 = tmp3;
  _slicedToArray(react.useState(isCovered), 2);
  const tmp4 = !isCovered && tmp2;
  if (tmp4) {
    tmp3(false);
  }
  const obj = usePrevious;
  const obj2 = { value: stage, shouldUpdate: !(isCovered && !tmp2) };
  let currentWhen = obj.useCurrentWhen(obj2);
  if (currentWhen == null) {
    currentWhen = stage;
  }
  const obj3 = { value: characterBottomInset, shouldUpdate: !(isCovered && !tmp2) };
  const tmp7Result = usePrevious;
  const currentWhen1 = tmp7Result.useCurrentWhen(obj3);
  const obj4 = { value: children, shouldUpdate: !(isCovered && !tmp2) };
  const tmp7Result2 = usePrevious;
  const currentWhen2 = tmp7Result2.useCurrentWhen(obj4);
  const obj5 = {
    visible: !isCovered,
    enter: metroImportAll,
    exit: metroImportDefault,
    keepMounted: true,
    onExitComplete() {
      return _undefined(true);
    },
    style,
    children: items
  };
  const obj6 = { collapsable: false, style: hasOwnProperty.absoluteFill, pointerEvents: str, accessibilityElementsHidden: !isActive, importantForAccessibility: str2, children: React4(CheckpointCharacterStageDefault, { stage: currentWhen, layout, isActive, isHidden: tmp2, characterBottomInset: currentWhen1 }) };
  str = "none";
  const tmp12 = authStore;
  const tmp14 = CheckpointFadeLayerDefault;
  const tmp16 = metroRequire;
  if (isActive) {
    str = "auto";
  }
  str2 = "no-hide-descendants";
  if (isActive) {
    str2 = "auto";
  }
  items = [React4(tmp16, obj6), currentWhen2];
  return tmp12(tmp14, obj5);
};
