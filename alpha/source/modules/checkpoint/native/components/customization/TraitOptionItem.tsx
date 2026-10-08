// Module ID: 15847
// Function ID: 15848
// Name: TraitOptionItem
// Dependencies: [17, 5433, 21, 587, 5090, 558, 576, 5434, 9005, 5387, 6245, 15811, 7550, 4792, 2]

// Module 15847 (TraitOptionItem)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react_native from "react-native" /* 4792 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5434 */;
import _modDef6245 from "module_6245" /* 6245 */;
import inlineStylesDefault from "inlineStyles" /* 7550 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15811 */;
import react_native2 from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5433 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let TRAIT_OPTION_HEIGHT;
let c3;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let items;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const inlineStyles = tmp(7550);
const NitroWheelIcon = tmp(9005);
({ Image: c3, Pressable: closure_4, View: hasOwnProperty } = react_native2);
({ CHECKPOINT_DARK_CYAN: metroRequire, CHECKPOINT_NITRO_GRADIENT_COLORS: metroImportDefault, CHECKPOINT_PRIMARY: metroImportAll, CHECKPOINT_RARITY_COLORS: c9, TRAIT_OPTION_HEIGHT } = CheckpointConstants);
const TRAIT_OPTION_WIDTH = CheckpointConstants.TRAIT_OPTION_WIDTH;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const checkpointTraitGradient = "checkpointTraitGradient";
let c15 = 0.04;
const PX_32 = nativeDefault.space.PX_32;
const PX_4 = nativeDefault.space.PX_4;
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
let obj = { assetItem: { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, alignItems: "center", justifyContent: "center" }, assetItemLocked: { opacity: 0.4 }, assetShape: { position: "absolute", top: 0, left: 0 }, rarityIndicator: { position: "absolute", top: PX_4, left: PX_4 }, cornerFlag: { width: 0, height: 0, borderTopWidth: 12, borderRightWidth: 12, borderRightColor: "transparent" }, cornerNitroIcon: { width: 12, height: 12 }, cornerNitroIconGradient: { width: 12, height: 12 }, assetImageLocked: obj2, assetImage: { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT } };
obj2 = { filter: items };
items = [{ grayscale: 1 }];
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function RarityIndicator(rarity) {
  let items1;
  const obj = react;
  const cResult = obj.c(15);
  rarity = rarity.rarity;
  const tmp4 = closure_19();
  if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    if (cResult[0] === tmp4.cornerNitroIcon) {
      let tmp11;
      let tmp13;
      let tmp16;
      if (cResult[1] === tmp4.rarityIndicator) {
        tmp11 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = closure_12(NitroWheelIcon.NitroWheelIcon, { size: "xxs" });
        cResult[3] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== tmp4.cornerNitroIconGradient) {
        const obj2 = { colors: metroImportDefault, start, end, style: tmp4.cornerNitroIconGradient };
        const tmp22 = closure_12(LinearGradientDefault, obj2);
        cResult[4] = tmp4.cornerNitroIconGradient;
        cResult[5] = tmp22;
        tmp16 = tmp22;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] === tmp11) {
        let tmp23;
        if (cResult[7] === tmp16) {
          tmp23 = cResult[8];
        }
        return tmp23;
      }
      const obj3 = { style: tmp11, maskElement: tmp13, pointerEvents: "none", children: tmp16 };
      const tmp26 = closure_12(_modDef6245, obj3);
      cResult[6] = tmp11;
      cResult[7] = tmp16;
      cResult[8] = tmp26;
      tmp23 = tmp26;
    }
    const items = [, ];
    ({ rarityIndicator: arr2[0], cornerNitroIcon: arr2[1] } = tmp4);
    cResult[0] = tmp4.cornerNitroIcon;
    cResult[1] = tmp4.rarityIndicator;
    cResult[2] = items;
    tmp11 = items;
  } else {
    let tmp6;
    let tmp5 = React4[rarity];
    if (tmp5 == null) {
      tmp5 = metroImportAll;
    }
    if (cResult[9] !== tmp5) {
      const obj4 = { borderTopColor: tmp5 };
      cResult[9] = tmp5;
      cResult[10] = obj4;
      tmp6 = obj4;
    } else {
      tmp6 = cResult[10];
    }
    if (cResult[11] === tmp4.cornerFlag) {
      if (cResult[12] === tmp4.rarityIndicator) {
        let tmp7;
        if (cResult[13] === tmp6) {
          tmp7 = cResult[14];
        }
        return tmp7;
      }
    }
    const obj5 = { style: items1 };
    items1 = [, , ];
    ({ rarityIndicator: arr[0], cornerFlag: arr[1] } = tmp4);
    items1[2] = tmp6;
    const tmp10 = closure_12(hasOwnProperty, obj5);
    cResult[11] = tmp4.cornerFlag;
    cResult[12] = tmp4.rarityIndicator;
    cResult[13] = tmp6;
    cResult[14] = tmp10;
    tmp7 = tmp10;
  }
}) : (function RarityIndicator(rarity) {
  let items;
  let obj3;
  let tmp4Result;
  rarity = rarity.rarity;
  const tmp = closure_19();
  if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    const obj2 = { style: items, maskElement: closure_12(NitroWheelIcon.NitroWheelIcon, { size: "xxs" }), pointerEvents: "none", children: closure_12(LinearGradientDefault, obj3) };
    items = [, ];
    ({ rarityIndicator: arr2[0], cornerNitroIcon: arr2[1] } = tmp);
    obj3 = { colors: metroImportDefault, start, end, style: tmp.cornerNitroIconGradient };
    const tmp12 = _modDef6245;
    tmp4Result = closure_12(tmp12, obj2);
  } else {
    const items1 = [, , ];
    ({ rarityIndicator: arr[0], cornerFlag: arr[1] } = tmp);
    let tmp7 = React4[rarity];
    const tmp4 = closure_12;
    const tmp5 = hasOwnProperty;
    if (tmp7 == null) {
      tmp7 = metroImportAll;
    }
    const obj = { style: items1 };
    const obj4 = { borderTopColor: tmp7 };
    items1[2] = obj4;
    tmp4Result = tmp4(tmp5, obj);
  }
  return tmp4Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitOptionImage(traitOption) {
  let obj3;
  const obj = react;
  const cResult = obj.c(10);
  traitOption = traitOption.traitOption;
  const tmp4 = closure_19();
  const obj2 = CheckpointCustomizationUtils;
  if (obj2.isNoneOption(traitOption)) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      size = { width: PX_32, height: PX_32, pointerEvents: "none", children: closure_12(inlineStyles.Line, obj3) };
      obj3 = { x1: "0", y1: "0", x2: PX_32, y2: PX_32, stroke, strokeWidth: 1, strokeLinecap: "round" };
      const tmp18 = inlineStylesDefault;
      const tmp21 = closure_12(tmp18, size);
      cResult[0] = tmp21;
      first = tmp21;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    let tmp5;
    if (cResult[1] !== traitOption.asset) {
      const obj4 = { uri: traitOption.asset };
      cResult[1] = traitOption.asset;
      cResult[2] = obj4;
      tmp5 = obj4;
    } else {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.assetImage) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp4.assetImageLocked) {
          let tmp10;
          if (cResult[8] === traitOption.locked) {
            tmp10 = cResult[9];
          }
          return tmp10;
        }
      }
      let tmp11 = tmp6;
      if (true === traitOption.locked) {
        const obj5 = { style: tmp4.assetImageLocked, children: tmp6 };
        tmp11 = closure_12(hasOwnProperty, obj5);
      }
      cResult[6] = tmp6;
      cResult[7] = tmp4.assetImageLocked;
      cResult[8] = traitOption.locked;
      cResult[9] = tmp11;
      tmp10 = tmp11;
    }
    const obj6 = { source: tmp5, style: tmp4.assetImage, resizeMode: "contain" };
    const tmp9 = closure_12(_false, obj6);
    cResult[3] = tmp4.assetImage;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
}) : (function TraitOptionImage(traitOption) {
  let obj2;
  let obj4;
  traitOption = traitOption.traitOption;
  const tmp = closure_19();
  const obj = CheckpointCustomizationUtils;
  if (obj.isNoneOption(traitOption)) {
    size = { width: PX_32, height: PX_32, pointerEvents: "none", children: closure_12(inlineStyles.Line, obj2) };
    obj2 = { x1: "0", y1: "0", x2: PX_32, y2: PX_32, stroke, strokeWidth: 1, strokeLinecap: "round" };
    const tmp10 = inlineStylesDefault;
    return closure_12(tmp10, size);
  } else {
    const obj3 = { source: obj4, style: tmp.assetImage, resizeMode: "contain" };
    obj4 = { uri: traitOption.asset };
    const tmp4Result = closure_12(_false, obj3);
    let tmp4Result2 = tmp4Result;
    if (true === traitOption.locked) {
      const obj5 = { style: tmp.assetImageLocked, children: tmp4Result };
      tmp4Result2 = tmp4(hasOwnProperty, obj5);
    }
    return tmp4Result2;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function AssetShape(arg0) {
  let LinearGradient;
  let isNoneOption;
  let isSelected;
  let items;
  let items1;
  let obj3;
  let tmp5;
  const obj = react;
  const cResult = obj.c(12);
  ({ isNoneOption, isSelected } = arg0);
  const tmp4 = closure_19();
  if (cResult[0] !== isNoneOption) {
    let tmp6 = !isNoneOption;
    if (tmp6) {
      const obj2 = { children: map1(LinearGradient, obj3) };
      const Defs = tmp(7550).Defs;
      obj3 = { id: checkpointTraitGradient, x1: "0", y1: "1", x2: "0", y2: "0", children: items };
      LinearGradient = tmp(7550).LinearGradient;
      const obj4 = { offset: "0", stopColor: metroRequire, stopOpacity };
      items = [closure_12(inlineStyles.Stop, obj4), ];
      const obj5 = { offset: "1", stopColor: metroRequire, stopOpacity };
      items[1] = closure_12(inlineStyles.Stop, obj5);
      tmp6 = closure_12(Defs, obj2);
    }
    cResult[0] = isNoneOption;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  const tmp13 = isSelected ? metroRequire : metroRequire;
  let num3 = 1;
  if (isSelected) {
    num3 = tmp(15811).TRAIT_OPTION_STROKE_WIDTH;
  }
  if (cResult[2] === tmp13) {
    let tmp14;
    let tmp16;
    if (cResult[3] === num3) {
      tmp14 = cResult[4];
    }
    if (cResult[5] !== isNoneOption) {
      let tmp17 = !isNoneOption;
      if (tmp17) {
        const obj6 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "url(#" + checkpointTraitGradient + ")" };
        const Polygon2 = tmp(7550).Polygon;
        const _HermesInternal = HermesInternal;
        tmp17 = closure_12(Polygon2, obj6);
      }
      cResult[5] = isNoneOption;
      cResult[6] = tmp17;
      tmp16 = tmp17;
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] === tmp4.assetShape) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp14) {
          let tmp21;
          if (cResult[10] === tmp16) {
            tmp21 = cResult[11];
          }
          return tmp21;
        }
      }
    }
    size = { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, style: tmp4.assetShape, pointerEvents: "none", children: items1 };
    items1 = [tmp5, tmp14, tmp16];
    const tmp26 = map1(inlineStylesDefault, size);
    cResult[7] = tmp4.assetShape;
    cResult[8] = tmp5;
    cResult[9] = tmp14;
    cResult[10] = tmp16;
    cResult[11] = tmp26;
    tmp21 = tmp26;
  }
  const obj7 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "transparent", stroke: tmp13, strokeWidth: num3 };
  const Polygon = tmp(7550).Polygon;
  const tmp15 = closure_12(Polygon, obj7);
  cResult[2] = tmp13;
  cResult[3] = num3;
  cResult[4] = tmp15;
  tmp14 = tmp15;
}) : (function AssetShape(arg0) {
  let LinearGradient;
  let isNoneOption;
  let isSelected;
  let items;
  let items1;
  let num;
  let obj2;
  ({ isNoneOption, isSelected } = arg0);
  size = { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, style: closure_19().assetShape, pointerEvents: "none", children: items1 };
  let tmp5 = !isNoneOption;
  closure_19();
  const tmp4 = inlineStylesDefault;
  if (!isNoneOption) {
    const obj = { children: map1(LinearGradient, obj2) };
    const Defs = inlineStyles.Defs;
    obj2 = { id: checkpointTraitGradient, x1: "0", y1: "1", x2: "0", y2: "0", children: items };
    LinearGradient = inlineStyles.LinearGradient;
    const obj3 = { offset: "0", stopColor: metroRequire, stopOpacity };
    items = [closure_12(inlineStyles.Stop, obj3), ];
    const obj4 = { offset: "1", stopColor: metroRequire, stopOpacity };
    items[1] = closure_12(inlineStyles.Stop, obj4);
    tmp5 = closure_12(Defs, obj);
  }
  items1 = [tmp5, , ];
  const obj5 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "transparent", stroke: isSelected ? metroRequire : metroRequire, strokeWidth: num };
  const Polygon = inlineStyles.Polygon;
  num = 1;
  if (isSelected) {
    num = tmp13(15811).TRAIT_OPTION_STROKE_WIDTH;
  }
  items1[1] = closure_12(Polygon, obj5);
  let tmp12Result = !isNoneOption;
  if (tmp12Result) {
    const obj6 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "url(#" + checkpointTraitGradient + ")" };
    const Polygon2 = tmp13(7550).Polygon;
    const _HermesInternal = HermesInternal;
    tmp12Result = tmp12(Polygon2, obj6);
  }
  items1[2] = tmp12Result;
  return map1(tmp4, size);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitOptionItem(arg0) {
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let hideCornerFlag;
  let isSelected;
  let items;
  let onPress;
  let showSelectedBorder;
  let traitOption;
  const obj = react;
  const cResult = obj.c(26);
  ({ traitOption, accessibilityLabel, isSelected, showSelectedBorder, onPress, hideCornerFlag, disabled } = arg0);
  const tmp7 = closure_19();
  if (cResult[0] === (undefined !== disabled && disabled)) {
    let tmp8;
    if (cResult[1] === isSelected) {
      tmp8 = cResult[2];
    }
    const tmpResult = react_native;
    const radioA11yNative = tmpResult.useRadioA11yNative(tmp8);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    if (cResult[3] === tmp7.assetItem) {
      let tmp11;
      let tmp12;
      if (cResult[4] === ((traitOption.locked || undefined !== disabled && disabled) && tmp7.assetItemLocked)) {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== traitOption) {
        const tmpResult2 = CheckpointCustomizationUtils;
        const isNoneOptionResult = tmpResult2.isNoneOption(traitOption);
        cResult[6] = traitOption;
        cResult[7] = isNoneOptionResult;
        tmp12 = isNoneOptionResult;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === (undefined !== showSelectedBorder && showSelectedBorder)) {
        let tmp14;
        if (cResult[9] === tmp12) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === (undefined !== hideCornerFlag && hideCornerFlag)) {
          let tmp18;
          let tmp23;
          if (cResult[12] === traitOption.rarity) {
            tmp18 = cResult[13];
          }
          if (cResult[14] !== traitOption) {
            const obj2 = { traitOption };
            const tmp26 = closure_12(closure_21, obj2);
            cResult[14] = traitOption;
            cResult[15] = tmp26;
            tmp23 = tmp26;
          } else {
            tmp23 = cResult[15];
          }
          if (cResult[16] === accessibilityLabel) {
            if (cResult[17] === accessibilityRole) {
              if (cResult[18] === accessibilityState) {
                if (cResult[19] === (undefined !== disabled && disabled)) {
                  if (cResult[20] === onPress) {
                    if (cResult[21] === tmp23) {
                      if (cResult[22] === tmp11) {
                        if (cResult[23] === tmp14) {
                          let tmp27;
                          if (cResult[24] === tmp18) {
                            tmp27 = cResult[25];
                          }
                          return tmp27;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj3 = { onPress, disabled: undefined !== disabled && disabled, style: tmp11, accessibilityRole, accessibilityLabel, accessibilityState, children: items };
          items = [tmp14, tmp18, tmp23];
          const tmp30 = map1(React3, obj3);
          cResult[16] = accessibilityLabel;
          cResult[17] = accessibilityRole;
          cResult[18] = accessibilityState;
          cResult[19] = undefined !== disabled && disabled;
          cResult[20] = onPress;
          cResult[21] = tmp23;
          cResult[22] = tmp11;
          cResult[23] = tmp14;
          cResult[24] = tmp18;
          cResult[25] = tmp30;
          tmp27 = tmp30;
        }
        let tmp19 = !tmp5 && null != traitOption.rarity;
        if (tmp19) {
          const obj4 = { rarity: traitOption.rarity };
          tmp19 = closure_12(closure_20, obj4);
        }
        cResult[11] = undefined !== hideCornerFlag && hideCornerFlag;
        cResult[12] = traitOption.rarity;
        cResult[13] = tmp19;
        tmp18 = tmp19;
      }
      const obj5 = { isNoneOption: tmp12, isSelected: undefined !== showSelectedBorder && showSelectedBorder };
      const tmp17 = closure_12(closure_22, obj5);
      cResult[8] = undefined !== showSelectedBorder && showSelectedBorder;
      cResult[9] = tmp12;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const items1 = [tmp7.assetItem, (traitOption.locked || undefined !== disabled && disabled) && tmp7.assetItemLocked];
    cResult[3] = tmp7.assetItem;
    cResult[4] = (traitOption.locked || undefined !== disabled && disabled) && tmp7.assetItemLocked;
    cResult[5] = items1;
    tmp11 = items1;
  }
  const obj6 = { selected: isSelected, disabled: undefined !== disabled && disabled };
  cResult[0] = undefined !== disabled && disabled;
  cResult[1] = isSelected;
  cResult[2] = obj6;
  tmp8 = obj6;
}) : (function TraitOptionItem(disabled) {
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
  const tmp = closure_19();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected: isSelected, disabled: flag });
  const obj2 = { onPress, disabled: flag, style: items, accessibilityRole, accessibilityLabel, accessibilityState, children: items1 };
  items = [tmp.assetItem, ];
  let assetItemLocked = traitOption.locked;
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const tmp5 = map1;
  const tmp6 = React3;
  if (!assetItemLocked) {
    assetItemLocked = flag;
  }
  if (assetItemLocked) {
    assetItemLocked = tmp.assetItemLocked;
  }
  items[1] = assetItemLocked;
  const obj3 = { isNoneOption: tmp2Result.isNoneOption(traitOption), isSelected: showSelectedBorder };
  tmp2Result = CheckpointCustomizationUtils;
  items1 = [closure_12(closure_22, obj3), , ];
  let tmp7Result = !hideCornerFlag && null != traitOption.rarity;
  if (tmp7Result) {
    const obj4 = { rarity: traitOption.rarity };
    tmp7Result = tmp7(closure_20, obj4);
  }
  items1[1] = tmp7Result;
  items1[2] = closure_12(closure_21, { traitOption });
  return tmp5(tmp6, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionItem.tsx");

export default tmp5;
