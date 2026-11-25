// Module ID: 12543
// Function ID: 12544
// Name: CheckpointCharacterStageLayer
// Dependencies: [32, 19, 17, 10118, 21, 6417, 12544, 12545, 2]
// Exports: default

// Module 12543 (CheckpointCharacterStageLayer)
import usePrevious from "usePrevious" /* 6417 */;
import CheckpointFadeLayerDefault from "CheckpointFadeLayer" /* 12544 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 10118 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp18;
let unpackModuleId;
const CheckpointCharacterStageDefault = tmp18(12545);
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ CHECKPOINT_CHARACTER_STAGE_FADE: metroImportDefault, CHECKPOINT_CHARACTER_STAGE_HIDE: metroImportAll, CHECKPOINT_INSTANT: c9, CheckpointCharacterStageHiddenBy: c10 } = CheckpointTransitionConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCharacterStageLayer.tsx");

export default function CheckpointCharacterStageLayer(arg0) {
  let characterBottomInset;
  let children;
  let hiddenBy;
  let isActive;
  let items;
  let layout;
  let onExitPlaying;
  let stage;
  let str;
  let str2;
  let style;
  let tmp4;
  let tmp5;
  ({ stage, hiddenBy, isActive } = arg0);
  let closure_0 = tmp2;
  ({ layout, characterBottomInset, onExitPlaying, style, children } = arg0);
  let tmp = constants;
  const CUSTOMIZATION_ROUTE_CHANGE = constants.CUSTOMIZATION_ROUTE_CHANGE;
  [tmp4, tmp5] = _slicedToArray(react.useState(hiddenBy === constants.STATS), 2);
  let c1 = tmp5;
  const tmp3 = _slicedToArray(react.useState(hiddenBy === constants.STATS), 2);
  const tmp6 = hiddenBy !== constants.STATS && tmp4;
  if (tmp6) {
    tmp5(false);
  }
  const obj2 = { value: stage, shouldUpdate: !(hiddenBy === constants.STATS && !tmp4 || tmp9) };
  const obj = usePrevious;
  let currentWhen = obj.useCurrentWhen(obj2);
  if (currentWhen == null) {
    currentWhen = stage;
  }
  const tmp10Result = usePrevious;
  const currentWhen1 = tmp10Result.useCurrentWhen({ value: characterBottomInset, shouldUpdate: tmp12 });
  const tmp10Result3 = usePrevious;
  const currentWhen2 = tmp10Result3.useCurrentWhen({ value: children, shouldUpdate: tmp12 });
  const obj3 = { value: hiddenBy, shouldUpdate: null != hiddenBy };
  const tmp10Result4 = usePrevious;
  const currentWhen3 = tmp10Result4.useCurrentWhen(obj3);
  const obj4 = {
    visible: null == hiddenBy,
    enter: currentWhen3 === tmp.CUSTOMIZATION_ROUTE_CHANGE ? metroImportDefault : React4,
    exit: hiddenBy === CUSTOMIZATION_ROUTE_CHANGE ? metroImportDefault : metroImportAll,
    keepMounted: true,
    onExitComplete() {
      const tmp = closure_0;
      if (tmp) {
        _undefined(true);
      }
    },
    style,
    children: items
  };
  const obj5 = { collapsable: false, style: hasOwnProperty.absoluteFill, pointerEvents: str, accessibilityElementsHidden: !isActive, importantForAccessibility: str2, children: unpackModuleId(CheckpointCharacterStageDefault, { stage: currentWhen, layout, isActive, isHidden: tmp4, characterBottomInset: currentWhen1, onExitPlaying }) };
  str = "none";
  const tmp17 = authStore2;
  const tmp19 = CheckpointFadeLayerDefault;
  const tmp21 = metroRequire;
  if (isActive) {
    str = "auto";
  }
  str2 = "no-hide-descendants";
  if (isActive) {
    str2 = "auto";
  }
  items = [unpackModuleId(tmp21, obj5), currentWhen2];
  return tmp17(tmp19, obj4);
};
