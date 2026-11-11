// Module ID: 14422
// Function ID: 14423
// Name: TraitOptionItem
// Dependencies: [17, 6314, 21, 575, 6681, 5243, 6315, 7467, 9369, 5830, 8197, 6360, 5957, 5315, 2]
// Exports: default

// Module 14422 (TraitOptionItem)
import nativeDefault from "native" /* 575 */;
import react_native from "react-native" /* 5315 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import FastImageDefault from "FastImage" /* 5957 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6315 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 6360 */;
import _modDef7467 from "module_7467" /* 7467 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import react_native2 from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import Fragment from "Fragment" /* 21 */;
import "CheckpointCustomizationUtils";
import CheckpointCustomizationUtils_mod from "CheckpointCustomizationUtils" /* 6681 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let CheckpointCustomizationUtils;
let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj4;
let tmp2;
const NitroWheelIcon = tmp2(9369);
function RarityIndicator(rarity) {
  let items;
  let obj3;
  let tmp4Result;
  rarity = rarity.rarity;
  const tmp = closure_18();
  if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    obj2 = { style: items, maskElement: React4(NitroWheelIcon.NitroWheelIcon, { size: "xxs" }), pointerEvents: "none", children: React4(LinearGradientDefault, obj3) };
    items = [, ];
    ({ rarityIndicator: arr2[0], cornerNitroIcon: arr2[1] } = tmp);
    obj3 = { colors: metroRequire, start, end, style: tmp.cornerNitroIconGradient };
    const tmp12 = _modDef7467;
    tmp4Result = React4(tmp12, obj2);
  } else {
    const items1 = [, , ];
    ({ rarityIndicator: arr[0], cornerFlag: arr[1] } = tmp);
    let tmp7 = metroImportAll[rarity];
    const tmp4 = React4;
    const tmp5 = React3;
    if (tmp7 == null) {
      tmp7 = metroImportDefault;
    }
    const obj = { style: items1 };
    const obj4 = { borderTopColor: tmp7 };
    items1[2] = obj4;
    tmp4Result = tmp4(tmp5, obj);
  }
  return tmp4Result;
}
function TraitOptionImage(arg0) {
  let asset;
  let obj4;
  let obj5;
  let obj7;
  let status;
  let traitOption;
  ({ traitOption, size } = arg0);
  const tmp = closure_18();
  const obj = CheckpointCustomizationUtils;
  if (obj.isNoneOption(traitOption)) {
    const size1 = { width: PX_32, height: PX_32, pointerEvents: "none", children: React4(inlineStyles.Line, obj2) };
    obj2 = { x1: "0", y1: "0", x2: PX_32, y2: PX_32, stroke, strokeWidth: 1, strokeLinecap: "round" };
    const tmp14 = inlineStylesDefault;
    return React4(tmp14, size1);
  } else {
    let tmp7;
    ({ asset, status } = traitOption);
    if (status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const obj3 = { style: tmp.assetImageLocked, children: React4(FastImageDefault, obj4) };
      obj4 = { source: obj5, style: closure_16[size], resizeMode: "contain" };
      obj5 = { uri: asset };
      tmp7 = React4(React3, obj3);
    } else {
      const obj6 = { source: obj7, style: closure_16[size], resizeMode: "contain" };
      obj7 = { uri: asset };
      tmp7 = React4(FastImageDefault, obj6);
    }
    return tmp7;
  }
}
function AssetShape(arg0) {
  let LinearGradient;
  let height;
  let isNoneOption;
  let isSelected;
  let items;
  let items1;
  let num;
  let obj;
  let width;
  ({ size, isNoneOption, isSelected } = arg0);
  const tmp2 = obj[size];
  ({ width, height } = tmp2);
  const size1 = { width, height, style: closure_18().assetShape, pointerEvents: "none", children: items1 };
  let tmp7 = !isNoneOption;
  closure_18();
  const tmp6 = inlineStylesDefault;
  if (!isNoneOption) {
    obj = { children: authStore(LinearGradient, obj2) };
    const Defs = inlineStyles.Defs;
    obj2 = { id: checkpointTraitGradient, x1: "0", y1: "1", x2: "0", y2: "0", children: items };
    LinearGradient = inlineStyles.LinearGradient;
    const obj3 = { offset: "0", stopColor: hasOwnProperty, stopOpacity: 0.04 };
    items = [React4(inlineStyles.Stop, obj3), ];
    const obj4 = { offset: "1", stopColor: hasOwnProperty, stopOpacity: 0.04 };
    items[1] = React4(inlineStyles.Stop, obj4);
    tmp7 = React4(Defs, obj);
  }
  items1 = [tmp7, , ];
  const obj5 = { points: obj2[size], fill: "transparent", stroke: isSelected ? hasOwnProperty : hasOwnProperty, strokeWidth: num };
  num = 1;
  const Polygon = inlineStyles.Polygon;
  if (isSelected) {
    num = tmp14(6681).TRAIT_OPTION_STROKE_WIDTH;
  }
  items1[1] = React4(Polygon, obj5);
  let tmp13Result = !isNoneOption;
  if (tmp13Result) {
    const _HermesInternal = HermesInternal;
    const obj6 = { points: obj2[size], fill: "url(#" + checkpointTraitGradient + ")" };
    const Polygon2 = tmp14(8197).Polygon;
    tmp13Result = tmp13(Polygon2, obj6);
  }
  items1[2] = tmp13Result;
  return authStore(tmp6, size1);
}
({ Pressable: c3, View: closure_4 } = react_native2);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_NITRO_GRADIENT_COLORS: metroRequire, CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_RARITY_TO_COLOR: metroImportAll } = CheckpointConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
const checkpointTraitGradient = "checkpointTraitGradient";
const PX_32 = nativeDefault.space.PX_32;
const PX_4 = nativeDefault.space.PX_4;
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
const TRAIT_OPTION_SIZE_TO_DIMENSIONS = { sm: { width: 56, height: 64 }, md: { width: 72, height: 80 } };
let closure_16 = { sm: { width: 48, height: 56 }, md: { width: 64, height: 72 } };
let obj2 = { sm: CheckpointCustomizationUtils.getTraitOptionShapePoints(TRAIT_OPTION_SIZE_TO_DIMENSIONS.sm.width, TRAIT_OPTION_SIZE_TO_DIMENSIONS.sm.height), md: CheckpointCustomizationUtils.getTraitOptionShapePoints(TRAIT_OPTION_SIZE_TO_DIMENSIONS.md.width, TRAIT_OPTION_SIZE_TO_DIMENSIONS.md.height) };
CheckpointCustomizationUtils = CheckpointCustomizationUtils_mod;
let obj3 = { assetItem: { alignItems: "center", justifyContent: "center" }, assetItemLocked: { opacity: 0.4 }, assetShape: { position: "absolute", top: 0, left: 0 }, rarityIndicator: { position: "absolute", top: PX_4, left: PX_4 }, cornerFlag: { width: 0, height: 0, borderTopWidth: 12, borderRightWidth: 12, borderRightColor: "transparent" }, cornerNitroIcon: { width: 12, height: 12 }, cornerNitroIconGradient: { width: 12, height: 12 }, assetImageLocked: obj4 };
obj4 = { filter: items };
items = [{ grayscale: 1 }];
let closure_18 = createStyles.createStyles(obj3);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionItem.tsx");

export default function TraitOptionItem(disabled) {
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let hideCornerFlag;
  let isSelected;
  let items;
  let items1;
  let onPress;
  let showSelectedBorder;
  let tmp2Result;
  let traitOption;
  ({ traitOption, size, showSelectedBorder } = disabled);
  ({ accessibilityLabel, isSelected } = disabled);
  if (showSelectedBorder === undefined) {
    showSelectedBorder = false;
  }
  ({ hideCornerFlag, onPress } = disabled);
  if (hideCornerFlag === undefined) {
    hideCornerFlag = false;
  }
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_18();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected: isSelected, disabled: flag });
  obj2 = { onPress, disabled: flag, style: items, accessibilityRole, accessibilityLabel, accessibilityState, children: items1 };
  items = [tmp.assetItem, obj[size], ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  items[2] = (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED || flag) && tmp.assetItemLocked;
  const obj3 = { size, isNoneOption: tmp2Result.isNoneOption(traitOption), isSelected: showSelectedBorder };
  (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED || flag) && tmp.assetItemLocked;
  tmp2Result = CheckpointCustomizationUtils;
  items1 = [React4(AssetShape, obj3), , ];
  let tmp8Result = !hideCornerFlag;
  const tmp5 = authStore;
  const tmp6 = _false;
  if (tmp8Result) {
    tmp8Result = null != traitOption.rarity;
  }
  if (tmp8Result) {
    const obj4 = { rarity: traitOption.rarity };
    tmp8Result = tmp8(RarityIndicator, obj4);
  }
  items1[1] = tmp8Result;
  items1[2] = React4(TraitOptionImage, { traitOption, size });
  return tmp5(tmp6, obj2);
};
export { TRAIT_OPTION_SIZE_TO_DIMENSIONS };
export const TRAIT_OPTION_SIZE_TO_SHAPE_POINTS = obj2;
