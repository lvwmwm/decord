// Module ID: 6362
// Function ID: 6363
// Name: CheckpointCustomizationUtils
// Dependencies: [6015, 3088, 1128, 6039, 6363, 6364, 6016, 6040, 6360, 2]
// Exports: getAssetAccessibilityLabel, getChamferedRectPoints, getCustomizationOptionForCharacterStage, getCustomizationOptionName, getIsTraitRarityVisible, isNoneOption, isTraitNoneOptionId, makeTraitRaritySorter

// Module 6362 (CheckpointCustomizationUtils)
import intl7 from "intl" /* 1128 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6016 */;
import CheckpointTrait from "CheckpointTrait" /* 6039 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 6040 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6360 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6363 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6364 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import size from "module_2" /* 2 */;

let map;

let AURA;
let AURA2;
let BASE;
let BASE2;
let FACE;
let FACE2;
let HAT;
let HAT2;
let OUTFIT;
let OUTFIT2;
let OUTFIT_COLOR;
let OUTFIT_COLOR2;
let SHOES;
let SHOES2;
let TRAIT_OPTION_HEIGHT;
let TRAIT_OPTION_WIDTH;
let WEARABLE;
let WEARABLE2;
let c3;
const f96032 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  return "" + tmp + "," + tmp2;
};
function getAssetDescription(asset) {
  let commonMessage;
  let optionId;
  let rarity;
  let topMessage;
  let trait;
  let trait2;
  ({ trait, rarity } = asset);
  if (null == rarity) {
    ({ trait: trait2, optionId } = asset);
    let stringResult;
    const tmp7 = require;
    if (CheckpointCharacterTraits.NONE_OPTION_IDS[trait2] === optionId) {
      const intl6 = tmp7(1128).intl;
      stringResult = intl6.string(obj5[trait]);
    }
    return stringResult;
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
    const intl5 = tmp11(1128).intl;
    return intl5.string(_modDef3088["4aaADG"]);
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    let formatToPlainStringResult;
    if (asset.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const intl4 = tmp11(1128).intl;
      obj2 = {
        subscribeHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl4.formatToPlainString(_modDef3088["3Wq/bk"], obj2);
    } else {
      const intl3 = tmp11(1128).intl;
      formatToPlainStringResult = intl3.string(_modDef3088.sQ1bDT);
    }
    return formatToPlainStringResult;
  } else if (trait !== CheckpointTrait.CheckpointTrait.BASE) {
    let stringResult1;
    ({ commonMessage, topMessage } = obj6[trait]);
    if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.COMMON) {
      const intl2 = tmp11(1128).intl;
      stringResult1 = intl2.string(commonMessage);
    } else {
      const intl = tmp11(1128).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { percent: 100 - CheckpointTraitConfig.CHECKPOINT_RARITY_MIN_PERCENTILE[rarity] };
      stringResult1 = formatToPlainString(topMessage, obj);
    }
    return stringResult1;
  }
}
({ CHECKPOINT_RARITY_LABEL_MESSAGES: c3, TRAIT_OPTION_HEIGHT, TRAIT_OPTION_WIDTH } = CheckpointConstants);
const CheckpointCustomizationOption = { FACE: "face", OUTFIT: "outfit", OUTFIT_COLOR: "outfit_color", HAT: "hat", WEARABLE: "wearable", AURA: "aura", SHOES: "shoes", BASE: "base" };
let obj2 = { [FACE]: _modDef3088.QQsnUi, [OUTFIT]: _modDef3088.R4kQz6, [OUTFIT_COLOR]: _modDef3088.Yzaoit, [HAT]: _modDef3088.ZUGgI7, [WEARABLE]: _modDef3088["KrhX/b"], [AURA]: _modDef3088["35nXwl"], [SHOES]: _modDef3088["Yt3O/L"], [BASE]: _modDef3088.bbQzr1 };
({ FACE, OUTFIT, OUTFIT_COLOR, HAT, WEARABLE, AURA, SHOES, BASE } = CheckpointCustomizationOption);
const obj3 = { [FACE2]: CheckpointTrait.CheckpointTrait.FACE, [OUTFIT2]: CheckpointTrait.CheckpointTrait.OUTFIT, [OUTFIT_COLOR2]: CheckpointTrait.CheckpointTrait.OUTFIT, [HAT2]: CheckpointTrait.CheckpointTrait.HAT, [WEARABLE2]: CheckpointTrait.CheckpointTrait.WEARABLE, [AURA2]: CheckpointTrait.CheckpointTrait.AURA, [SHOES2]: CheckpointTrait.CheckpointTrait.SHOES, [BASE2]: CheckpointTrait.CheckpointTrait.BASE };
({ FACE: FACE2, OUTFIT: OUTFIT2, OUTFIT_COLOR: OUTFIT_COLOR2, HAT: HAT2, WEARABLE: WEARABLE2, AURA: AURA2, SHOES: SHOES2, BASE: BASE2 } = CheckpointCustomizationOption);
const obj4 = { [CheckpointNavigation.CheckpointCharacterStage.FACE]: CheckpointCustomizationOption.FACE, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: CheckpointCustomizationOption.OUTFIT, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: CheckpointCustomizationOption.HAT, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: CheckpointCustomizationOption.SHOES, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: CheckpointCustomizationOption.WEARABLE, [CheckpointNavigation.CheckpointCharacterStage.AURA]: CheckpointCustomizationOption.AURA };
const obj5 = {};
obj5[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3088.kcAWvo;
obj5[CheckpointTrait.CheckpointTrait.HAT] = _modDef3088.RYvRmE;
obj5[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3088.lbzScK;
obj5[CheckpointTrait.CheckpointTrait.AURA] = _modDef3088.mRPtBV;
obj5[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3088.KHsJlD;
const obj6 = {};
const obj7 = { commonMessage: _modDef3088.mmlFSp, topMessage: _modDef3088.PNMVaH };
const FACE3 = CheckpointTrait.CheckpointTrait.FACE;
obj6[FACE3] = obj7;
const obj8 = { commonMessage: _modDef3088["7ycqkx"], topMessage: _modDef3088["stpl+C"] };
const OUTFIT3 = CheckpointTrait.CheckpointTrait.OUTFIT;
obj6[OUTFIT3] = obj8;
const obj9 = { commonMessage: _modDef3088.TTkbUY, topMessage: _modDef3088["2UDofx"] };
const HAT3 = CheckpointTrait.CheckpointTrait.HAT;
obj6[HAT3] = obj9;
const obj10 = { commonMessage: _modDef3088.vX6Vdt, topMessage: _modDef3088.cbssIC };
const SHOES3 = CheckpointTrait.CheckpointTrait.SHOES;
obj6[SHOES3] = obj10;
const obj11 = { commonMessage: _modDef3088.ZHs2bR, topMessage: _modDef3088.yoZxcn };
const WEARABLE3 = CheckpointTrait.CheckpointTrait.WEARABLE;
obj6[WEARABLE3] = obj11;
const obj12 = { commonMessage: _modDef3088.m9gYwn, topMessage: _modDef3088.mCmdPk };
const AURA3 = CheckpointTrait.CheckpointTrait.AURA;
obj6[AURA3] = obj12;
let items = [1, 1];
let items1 = [items, , , , ];
let items2 = [TRAIT_OPTION_WIDTH - 1 - 16, 1];
items1[1] = items2;
let items3 = [TRAIT_OPTION_WIDTH - 1, 17];
items1[2] = items3;
let items4 = [TRAIT_OPTION_WIDTH - 1, TRAIT_OPTION_HEIGHT - 1];
items1[3] = items4;
let items5 = [1, TRAIT_OPTION_HEIGHT - 1];
items1[4] = items5;
let mapped = items1.map(f96032);
const joined = mapped.join(" ");
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCustomizationUtils.tsx");

export { CheckpointCustomizationOption };
export const getCustomizationOptionName = function getCustomizationOptionName(activeCustomizationOption) {
  const intl = intl7.intl;
  return intl.string(obj2[activeCustomizationOption]);
};
export const CUSTOMIZATION_OPTION_TRAITS = obj3;
export const getCustomizationOptionForCharacterStage = function getCustomizationOptionForCharacterStage(characterStage) {
  return obj4[characterStage];
};
export const getIsTraitRarityVisible = function getIsTraitRarityVisible(customizationOption) {
  if (obj.BASE !== customizationOption) {
    if (obj.OUTFIT_COLOR !== customizationOption) {
      return true;
    }
  }
  return false;
};
export const makeTraitRaritySorter = function makeTraitRaritySorter(rarityOrder) {
  map = new Map(rarityOrder.map((item, index) => {
    const items = [item, index];
    return items;
  }));
  return (rarity, rarity2) => {
    rarity = rarity.rarity;
    let length;
    if (null != rarity) {
      length = map.get(rarity);
    }
    if (length == null) {
      length = rarityOrder.length;
    }
    rarity2 = rarity2.rarity;
    let value2;
    if (null != rarity2) {
      value2 = map.get(rarity2);
    }
    if (value2 == null) {
      value2 = rarityOrder.length;
    }
    return length - value2;
  };
};
export const isTraitNoneOptionId = function isTraitNoneOptionId(arg0, arg1) {
  return CheckpointCharacterTraits.NONE_OPTION_IDS[arg0] === arg1;
};
export const isNoneOption = function isNoneOption(traitOption) {
  let optionId;
  let trait;
  ({ trait, optionId } = traitOption);
  return CheckpointCharacterTraits.NONE_OPTION_IDS[trait] === optionId;
};
export { getAssetDescription };
export const getAssetAccessibilityLabel = function getAssetAccessibilityLabel(getName, arg1) {
  const items = [getName.getName()];
  const tmp = arg1;
  if (!tmp) {
    if (null != getName.rarity) {
      const push = items.push;
      const intl = intl7.intl;
      push(intl.string(_false[getName.rarity]));
    }
    const tmp8 = getAssetDescription(getName);
    if (null != tmp8) {
      items.push(tmp8);
    }
  }
  return items.join(", ");
};
export const getChamferedRectPoints = function getChamferedRectPoints(width, height, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  const items = [num, num];
  const items1 = [items, , , , ];
  const items2 = [width - num - arg2, num];
  items1[1] = items2;
  const items3 = [width - num, num + arg2];
  items1[2] = items3;
  const items4 = [width - num, height - num];
  items1[3] = items4;
  const items5 = [num, height - num];
  items1[4] = items5;
  const mapped = items1.map(f96032);
  return mapped.join(" ");
};
export const TRAIT_OPTION_STROKE_WIDTH = 2;
export const TRAIT_OPTION_SHAPE_POINTS = joined;
