// Module ID: 6319
// Function ID: 6320
// Name: CheckpointCustomizationUtils
// Dependencies: [5973, 3078, 1128, 5996, 6320, 6321, 6322, 5974, 6317, 2]
// Exports: getAssetAccessibilityLabel, getChamferedRectPoints, getCustomizationOptionForCharacterStage, getCustomizationOptionName, getTraitOptions, isNoneOption, isTraitNoneOptionId

// Module 6319 (CheckpointCustomizationUtils)
import intl6 from "intl" /* 1128 */;
import _modDef3078 from "module_3078" /* 3078 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5974 */;
import CheckpointTrait from "CheckpointTrait" /* 5996 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6317 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6320 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6321 */;
import CheckpointConstants from "CheckpointConstants" /* 5973 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

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
const f94797 = (item) => {
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
      const intl5 = tmp7(1128).intl;
      stringResult = intl5.string(obj5[trait]);
    }
    return stringResult;
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
    const intl4 = tmp11(1128).intl;
    return intl4.string(_modDef3078["4aaADG"]);
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    let formatToPlainStringResult;
    const locked = asset.locked;
    const intl3 = tmp11(1128).intl;
    if (locked) {
      obj2 = {
        subscribeHook(arg0) {
              return arg0;
            }
      };
      formatToPlainStringResult = intl3.formatToPlainString(_modDef3078["3Wq/bk"], obj2);
    } else {
      formatToPlainStringResult = intl3.string(_modDef3078.sQ1bDT);
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
let obj2 = { [FACE]: _modDef3078.QQsnUi, [OUTFIT]: _modDef3078.R4kQz6, [OUTFIT_COLOR]: _modDef3078.Yzaoit, [HAT]: _modDef3078.ZUGgI7, [WEARABLE]: _modDef3078["KrhX/b"], [AURA]: _modDef3078["35nXwl"], [SHOES]: _modDef3078["Yt3O/L"], [BASE]: _modDef3078.bbQzr1 };
({ FACE, OUTFIT, OUTFIT_COLOR, HAT, WEARABLE, AURA, SHOES, BASE } = CheckpointCustomizationOption);
const obj3 = { [FACE2]: CheckpointTrait.CheckpointTrait.FACE, [OUTFIT2]: CheckpointTrait.CheckpointTrait.OUTFIT, [OUTFIT_COLOR2]: CheckpointTrait.CheckpointTrait.OUTFIT, [HAT2]: CheckpointTrait.CheckpointTrait.HAT, [WEARABLE2]: CheckpointTrait.CheckpointTrait.WEARABLE, [AURA2]: CheckpointTrait.CheckpointTrait.AURA, [SHOES2]: CheckpointTrait.CheckpointTrait.SHOES, [BASE2]: CheckpointTrait.CheckpointTrait.BASE };
({ FACE: FACE2, OUTFIT: OUTFIT2, OUTFIT_COLOR: OUTFIT_COLOR2, HAT: HAT2, WEARABLE: WEARABLE2, AURA: AURA2, SHOES: SHOES2, BASE: BASE2 } = CheckpointCustomizationOption);
const obj4 = { [CheckpointNavigation.CheckpointCharacterStage.FACE]: CheckpointCustomizationOption.FACE, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: CheckpointCustomizationOption.OUTFIT, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: CheckpointCustomizationOption.HAT, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: CheckpointCustomizationOption.SHOES, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: CheckpointCustomizationOption.WEARABLE, [CheckpointNavigation.CheckpointCharacterStage.AURA]: CheckpointCustomizationOption.AURA };
const obj5 = {};
obj5[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3078.kcAWvo;
obj5[CheckpointTrait.CheckpointTrait.HAT] = _modDef3078.RYvRmE;
obj5[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3078.lbzScK;
obj5[CheckpointTrait.CheckpointTrait.AURA] = _modDef3078.mRPtBV;
obj5[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3078.KHsJlD;
const obj6 = {};
const obj7 = { commonMessage: _modDef3078.mmlFSp, topMessage: _modDef3078.PNMVaH };
const FACE3 = CheckpointTrait.CheckpointTrait.FACE;
obj6[FACE3] = obj7;
const obj8 = { commonMessage: _modDef3078["7ycqkx"], topMessage: _modDef3078["stpl+C"] };
const OUTFIT3 = CheckpointTrait.CheckpointTrait.OUTFIT;
obj6[OUTFIT3] = obj8;
const obj9 = { commonMessage: _modDef3078.TTkbUY, topMessage: _modDef3078["2UDofx"] };
const HAT3 = CheckpointTrait.CheckpointTrait.HAT;
obj6[HAT3] = obj9;
const obj10 = { commonMessage: _modDef3078.vX6Vdt, topMessage: _modDef3078.cbssIC };
const SHOES3 = CheckpointTrait.CheckpointTrait.SHOES;
obj6[SHOES3] = obj10;
const obj11 = { commonMessage: _modDef3078.ZHs2bR, topMessage: _modDef3078.yoZxcn };
const WEARABLE3 = CheckpointTrait.CheckpointTrait.WEARABLE;
obj6[WEARABLE3] = obj11;
const obj12 = { commonMessage: _modDef3078.m9gYwn, topMessage: _modDef3078.mCmdPk };
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
let mapped = items1.map(f94797);
const joined = mapped.join(" ");
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCustomizationUtils.tsx");

export { CheckpointCustomizationOption };
export const getCustomizationOptionName = function getCustomizationOptionName(activeCustomizationOption) {
  const intl = intl6.intl;
  return intl.string(obj2[activeCustomizationOption]);
};
export const CUSTOMIZATION_OPTION_TRAITS = obj3;
export const getCustomizationOptionForCharacterStage = function getCustomizationOptionForCharacterStage(characterStage) {
  return obj4[characterStage];
};
export const getTraitOptions = function getTraitOptions(OUTFIT, OUTFIT_DEFAULT_OPTION_IDS) {
  let closure_2;
  let obj;
  let tmp5;
  let arr = OUTFIT_DEFAULT_OPTION_IDS;
  if (OUTFIT_DEFAULT_OPTION_IDS === undefined) {
    let tmp = _require;
    arr = require("CheckpointCharacterTraits").CHECKPOINT_TRAIT_OPTION_IDS[obj3[OUTFIT]];
  }
  let CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
  dependencyMap = undefined;
  _require = tmp4;
  if (OUTFIT === obj.OUTFIT_COLOR) {
    CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = require("CheckpointTraitOptionNames").CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
    tmp5 = _require;
  } else {
    tmp5 = _require;
    CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = require("CheckpointTraitOptionNames").CHECKPOINT_TRAIT_OPTION_NAMES[tmp4];
  }
  dependencyMap = tmp5(6321).CHECKPOINT_TRAIT_OPTION_ASSETS[tmp4];
  return arr.map((optionId) => {
    let thumbnail;
    trait = optionId;
    const tmp = closure_2[optionId];
    const obj = {
      trait,
      optionId,
      getName() {
        let str = "";
        if (null != CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[optionId]) {
          const intl = intl6.intl;
          str = intl.string(tmp);
        }
        return str;
      },
      rarity: trait(closure_2[5]).CHECKPOINT_TRAIT_OPTION_TO_RARITY[trait][optionId],
      asset: thumbnail
    };
    thumbnail = undefined;
    if (tmp != null) {
      thumbnail = tmp.thumbnail;
    }
    return obj;
  });
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
      const intl = intl6.intl;
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
  const mapped = items1.map(f94797);
  return mapped.join(" ");
};
export const TRAIT_OPTION_STROKE_WIDTH = 2;
export const TRAIT_OPTION_SHAPE_POINTS = joined;
