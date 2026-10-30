// Module ID: 13646
// Function ID: 13647
// Name: TraitOptionItem
// Dependencies: [17, 6061, 21, 575, 5009, 6062, 7032, 9506, 5582, 6429, 8023, 5712, 6108, 5077, 2]
// Exports: default

// Module 13646 (TraitOptionItem)
import nativeDefault from "native" /* 575 */;
import react_native from "react-native" /* 5077 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import FastImageDefault from "FastImage" /* 5712 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6062 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 6108 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import _modDef7032 from "module_7032" /* 7032 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import react_native2 from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let TRAIT_OPTION_HEIGHT;
let c3;
let closure_12;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
let unpackModuleId;
const NitroWheelIcon = tmp2(9506);
function RarityIndicator(rarity) {
  let items;
  let obj3;
  let tmp4Result;
  rarity = rarity.rarity;
  const tmp = closure_17();
  if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    const obj2 = { style: items, maskElement: unpackModuleId(NitroWheelIcon.NitroWheelIcon, { size: "xxs" }), pointerEvents: "none", children: unpackModuleId(LinearGradientDefault, obj3) };
    items = [, ];
    ({ rarityIndicator: arr2[0], cornerNitroIcon: arr2[1] } = tmp);
    obj3 = { colors: metroRequire, start, end, style: tmp.cornerNitroIconGradient };
    const tmp12 = _modDef7032;
    tmp4Result = unpackModuleId(tmp12, obj2);
  } else {
    const items1 = [, , ];
    ({ rarityIndicator: arr[0], cornerFlag: arr[1] } = tmp);
    let tmp7 = metroImportAll[rarity];
    const tmp4 = unpackModuleId;
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
function TraitOptionImage(traitOption) {
  let obj2;
  let obj4;
  traitOption = traitOption.traitOption;
  const tmp = closure_17();
  const obj = CheckpointCustomizationUtils;
  if (obj.isNoneOption(traitOption)) {
    size = { width: PX_32, height: PX_32, pointerEvents: "none", children: unpackModuleId(inlineStyles.Line, obj2) };
    obj2 = { x1: "0", y1: "0", x2: PX_32, y2: PX_32, stroke, strokeWidth: 1, strokeLinecap: "round" };
    const tmp5Result = inlineStylesDefault;
    return unpackModuleId(tmp5Result, size);
  } else {
    const obj3 = { source: obj4, style: tmp.assetImage, resizeMode: "contain" };
    obj4 = { uri: traitOption.asset };
    const tmp4Result = unpackModuleId(FastImageDefault, obj3);
    let tmp4Result2 = tmp4Result;
    if (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const obj5 = { style: tmp.assetImageLocked, children: tmp4Result };
      tmp4Result2 = tmp4(React3, obj5);
    }
    return tmp4Result2;
  }
}
function AssetShape(arg0) {
  let LinearGradient;
  let isNoneOption;
  let isSelected;
  let items;
  let items1;
  let num;
  let obj2;
  ({ isNoneOption, isSelected } = arg0);
  size = { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, style: closure_17().assetShape, pointerEvents: "none", children: items1 };
  let tmp5 = !isNoneOption;
  closure_17();
  const tmp4 = inlineStylesDefault;
  if (!isNoneOption) {
    const obj = { children: authStore2(LinearGradient, obj2) };
    const Defs = inlineStyles.Defs;
    obj2 = { id: checkpointTraitGradient, x1: "0", y1: "1", x2: "0", y2: "0", children: items };
    LinearGradient = inlineStyles.LinearGradient;
    const obj3 = { offset: "0", stopColor: hasOwnProperty, stopOpacity: 0.04 };
    items = [unpackModuleId(inlineStyles.Stop, obj3), ];
    const obj4 = { offset: "1", stopColor: hasOwnProperty, stopOpacity: 0.04 };
    items[1] = unpackModuleId(inlineStyles.Stop, obj4);
    tmp5 = unpackModuleId(Defs, obj);
  }
  items1 = [tmp5, , ];
  const obj5 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "transparent", stroke: isSelected ? hasOwnProperty : hasOwnProperty, strokeWidth: num };
  const Polygon = inlineStyles.Polygon;
  num = 1;
  if (isSelected) {
    num = tmp12(6429).TRAIT_OPTION_STROKE_WIDTH;
  }
  items1[1] = unpackModuleId(Polygon, obj5);
  let tmp11Result = !isNoneOption;
  if (tmp11Result) {
    const obj6 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "url(#" + checkpointTraitGradient + ")" };
    const Polygon2 = tmp12(8023).Polygon;
    const _HermesInternal = HermesInternal;
    tmp11Result = tmp11(Polygon2, obj6);
  }
  items1[2] = tmp11Result;
  return authStore2(tmp4, size);
}
({ Pressable: c3, View: closure_4 } = react_native2);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_NITRO_GRADIENT_COLORS: metroRequire, CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_RARITY_TO_COLOR: metroImportAll, TRAIT_OPTION_HEIGHT } = CheckpointConstants);
const TRAIT_OPTION_WIDTH = CheckpointConstants.TRAIT_OPTION_WIDTH;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const checkpointTraitGradient = "checkpointTraitGradient";
const PX_32 = nativeDefault.space.PX_32;
const PX_4 = nativeDefault.space.PX_4;
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
let obj = { assetItem: { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, alignItems: "center", justifyContent: "center" }, assetItemLocked: { opacity: 0.4 }, assetShape: { position: "absolute", top: 0, left: 0 }, rarityIndicator: { position: "absolute", top: PX_4, left: PX_4 }, cornerFlag: { width: 0, height: 0, borderTopWidth: 12, borderRightWidth: 12, borderRightColor: "transparent" }, cornerNitroIcon: { width: 12, height: 12 }, cornerNitroIconGradient: { width: 12, height: 12 }, assetImageLocked: obj2, assetImage: { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT } };
obj2 = { filter: items };
items = [{ grayscale: 1 }];
let closure_17 = createStyles.createStyles(obj);
let size = size_mod;
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
  ({ traitOption, showSelectedBorder } = disabled);
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
  const tmp = closure_17();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected: isSelected, disabled: flag });
  const obj2 = { onPress, disabled: flag, style: items, accessibilityRole, accessibilityLabel, accessibilityState, children: items1 };
  items = [tmp.assetItem, ];
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  items[1] = (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED || flag) && tmp.assetItemLocked;
  const obj3 = { isNoneOption: tmp2Result.isNoneOption(traitOption), isSelected: showSelectedBorder };
  (traitOption.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED || flag) && tmp.assetItemLocked;
  tmp2Result = CheckpointCustomizationUtils;
  items1 = [unpackModuleId(AssetShape, obj3), , ];
  let tmp8Result = !hideCornerFlag;
  const tmp5 = authStore2;
  const tmp6 = _false;
  if (tmp8Result) {
    tmp8Result = null != traitOption.rarity;
  }
  if (tmp8Result) {
    const obj4 = { rarity: traitOption.rarity };
    tmp8Result = tmp8(RarityIndicator, obj4);
  }
  items1[1] = tmp8Result;
  items1[2] = unpackModuleId(TraitOptionImage, { traitOption });
  return tmp5(tmp6, obj2);
};
