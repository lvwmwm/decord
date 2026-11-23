// Module ID: 6336
// Function ID: 6337
// Name: CheckpointCustomizationUtils
// Dependencies: [5969, 3440, 1112, 6013, 6337, 6014, 6338, 5970, 6015, 6012, 2]
// Exports: getAssetAccessibilityLabel, getChamferedRectPoints, getCheckpointRouteBlockedTrait, getCustomizationOptionForCharacterStage, getCustomizationOptionName, getIsTraitRarityVisible, getNitroLockedMessage, getOutfitName, getTraitOptionShapePoints, isNoneOption, makeTraitRaritySorter, withLastColorwayThumbnails

// Module 6336 (CheckpointCustomizationUtils)
import intl7 from "intl" /* 1112 */;
import _modDef3440 from "module_3440" /* 3440 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5970 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6012 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6013 */;
import CheckpointTrait from "CheckpointTrait" /* 6014 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 6015 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6338 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map;

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
let WEARABLE;
let WEARABLE2;
let c3;
let closure_4;
const f88598 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  return "" + tmp + "," + tmp2;
};
function getPlaintextAssetDescription(option) {
  let commonMessage;
  let lockedCommonMessage;
  let lockedTopMessage;
  let rarity;
  let topMessage;
  let trait;
  ({ trait, rarity } = option);
  if (null == rarity) {
    let stringResult;
    obj2 = CheckpointCharacterTraits;
    const tmp10 = require;
    if (obj2.isTraitNoneOptionId(option.trait, option.optionId)) {
      if (null != obj5[trait]) {
        const intl6 = tmp10(1112).intl;
        stringResult = intl6.string(tmp9);
      }
    }
    return stringResult;
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
    const intl5 = tmp13(1112).intl;
    return intl5.string(_modDef3440["4aaADG"]);
  } else if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
    let stringResult1;
    if (option.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const intl4 = tmp13(1112).intl;
      stringResult1 = intl4.string(_modDef3440.vic5bB);
    } else {
      const intl3 = tmp13(1112).intl;
      stringResult1 = intl3.string(_modDef3440.sQ1bDT);
    }
    return stringResult1;
  } else if (trait !== CheckpointTrait.CheckpointTrait.BASE) {
    let stringResult2;
    ({ commonMessage, topMessage, lockedCommonMessage, lockedTopMessage } = obj6[trait]);
    const tmp2 = option.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.LOCKED;
    if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.COMMON) {
      const intl2 = tmp13(1112).intl;
      const string = intl2.string;
      if (tmp2) {
        commonMessage = lockedCommonMessage;
      }
      stringResult2 = string(commonMessage);
    } else {
      const intl = tmp13(1112).intl;
      const formatToPlainString = intl.formatToPlainString;
      if (tmp2) {
        topMessage = lockedTopMessage;
      }
      const obj = { percent: 100 - CheckpointTraitConfig.CHECKPOINT_RARITY_TO_MIN_PERCENTILE[rarity] };
      stringResult2 = formatToPlainString(topMessage, obj);
    }
    return stringResult2;
  }
}
({ CHECKPOINT_RARITY_TO_LABEL_MESSAGE: c3, TRAIT_OPTION_WIDTH: closure_4 } = CheckpointConstants);
const CheckpointCustomizationOption = { FACE: "face", OUTFIT: "outfit", OUTFIT_COLOR: "outfit_color", HAT: "hat", WEARABLE: "wearable", AURA: "aura", SHOES: "shoes", BASE: "base" };
let obj2 = { [FACE]: _modDef3440.QQsnUi, [OUTFIT]: _modDef3440.R4kQz6, [OUTFIT_COLOR]: _modDef3440.Yzaoit, [HAT]: _modDef3440.ZUGgI7, [WEARABLE]: _modDef3440["KrhX/b"], [AURA]: _modDef3440["35nXwl"], [SHOES]: _modDef3440["Yt3O/L"], [BASE]: _modDef3440.bbQzr1 };
({ FACE, OUTFIT, OUTFIT_COLOR, HAT, WEARABLE, AURA, SHOES, BASE } = CheckpointCustomizationOption);
let items = [, , ];
({ BASE: arr[0], OUTFIT_COLOR: arr[1], OUTFIT: arr[2] } = CheckpointCustomizationOption);
let items1 = [, , , , ];
({ AURA: arr2[0], WEARABLE: arr2[1], SHOES: arr2[2], HAT: arr2[3], FACE: arr2[4] } = CheckpointCustomizationOption);
const obj3 = { [FACE2]: CheckpointTrait.CheckpointTrait.FACE, [OUTFIT2]: CheckpointTrait.CheckpointTrait.OUTFIT, [OUTFIT_COLOR2]: CheckpointTrait.CheckpointTrait.OUTFIT, [HAT2]: CheckpointTrait.CheckpointTrait.HAT, [WEARABLE2]: CheckpointTrait.CheckpointTrait.WEARABLE, [AURA2]: CheckpointTrait.CheckpointTrait.AURA, [SHOES2]: CheckpointTrait.CheckpointTrait.SHOES, [BASE2]: CheckpointTrait.CheckpointTrait.BASE };
({ FACE: FACE2, OUTFIT: OUTFIT2, OUTFIT_COLOR: OUTFIT_COLOR2, HAT: HAT2, WEARABLE: WEARABLE2, AURA: AURA2, SHOES: SHOES2, BASE: BASE2 } = CheckpointCustomizationOption);
const obj4 = { [CheckpointNavigation.CheckpointCharacterStage.FACE]: CheckpointCustomizationOption.FACE, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: CheckpointCustomizationOption.OUTFIT, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: CheckpointCustomizationOption.HAT, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: CheckpointCustomizationOption.SHOES, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: CheckpointCustomizationOption.WEARABLE, [CheckpointNavigation.CheckpointCharacterStage.AURA]: CheckpointCustomizationOption.AURA };
const obj5 = {};
obj5[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3440.kcAWvo;
obj5[CheckpointTrait.CheckpointTrait.HAT] = _modDef3440.RYvRmE;
obj5[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3440.lbzScK;
obj5[CheckpointTrait.CheckpointTrait.AURA] = _modDef3440.mRPtBV;
obj5[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3440.KHsJlD;
const obj6 = {};
const obj7 = { commonMessage: _modDef3440.mmlFSp, topMessage: _modDef3440.PNMVaH, lockedCommonMessage: _modDef3440.Yi9yiQ, lockedTopMessage: _modDef3440.ZHmprE };
const FACE3 = CheckpointTrait.CheckpointTrait.FACE;
obj6[FACE3] = obj7;
const obj8 = { commonMessage: _modDef3440["7ycqkx"], topMessage: _modDef3440["stpl+C"], lockedCommonMessage: _modDef3440.Wpd6ol, lockedTopMessage: _modDef3440.tU2fxW };
const OUTFIT3 = CheckpointTrait.CheckpointTrait.OUTFIT;
obj6[OUTFIT3] = obj8;
const obj9 = { commonMessage: _modDef3440.TTkbUY, topMessage: _modDef3440["2UDofx"], lockedCommonMessage: _modDef3440["5+8d3J"], lockedTopMessage: _modDef3440.X9NBcv };
const HAT3 = CheckpointTrait.CheckpointTrait.HAT;
obj6[HAT3] = obj9;
const obj10 = { commonMessage: _modDef3440.vX6Vdt, topMessage: _modDef3440.cbssIC, lockedCommonMessage: _modDef3440.cyJktg, lockedTopMessage: _modDef3440["Yjz+5u"] };
const SHOES3 = CheckpointTrait.CheckpointTrait.SHOES;
obj6[SHOES3] = obj10;
const obj11 = { commonMessage: _modDef3440.ZHs2bR, topMessage: _modDef3440.yoZxcn, lockedCommonMessage: _modDef3440["2tBPVn"], lockedTopMessage: _modDef3440.HPCBcH };
const WEARABLE3 = CheckpointTrait.CheckpointTrait.WEARABLE;
obj6[WEARABLE3] = obj11;
const obj12 = { commonMessage: _modDef3440.m9gYwn, topMessage: _modDef3440.mCmdPk, lockedCommonMessage: _modDef3440.uT5tyB, lockedTopMessage: _modDef3440["5Mc39J"] };
const AURA3 = CheckpointTrait.CheckpointTrait.AURA;
obj6[AURA3] = obj12;
const obj13 = {};
obj13[CheckpointTrait.CheckpointTrait.FACE] = _modDef3440["4IdR/H"];
obj13[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3440.NuujPd;
obj13[CheckpointTrait.CheckpointTrait.HAT] = _modDef3440.o1Zign;
obj13[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3440.C0CzoH;
obj13[CheckpointTrait.CheckpointTrait.AURA] = _modDef3440["+9TbTS"];
obj13[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3440.sTG4TS;
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointCustomizationUtils.tsx");

export { CheckpointCustomizationOption };
export function getCustomizationOptionName(customizationOption) {
  const intl = intl7.intl;
  return intl.string(obj2[customizationOption]);
}
export const FINALIZE_TAB_OPTIONS = items;
export const FINALIZE_MORE_OPTIONS = items1;
export function getOutfitName(optionId) {
  const obj = CheckpointCharacterTraits;
  const outfitDefaultOptionId = obj.getOutfitDefaultOptionId(optionId);
  let tmp4;
  if (null != outfitDefaultOptionId) {
    tmp4 = tmp(6337).CHECKPOINT_TRAIT_TO_OPTION_NAMES[tmp(undefined, 6014).CheckpointTrait.OUTFIT][outfitDefaultOptionId];
  }
  let stringResult;
  if (null != tmp4) {
    const intl = tmp(1112).intl;
    stringResult = intl.string(tmp4);
  }
  return stringResult;
}
export function withLastColorwayThumbnails(traitOptions, arg1) {
  let closure_0 = arg1;
  return traitOptions.map((optionId) => {
    let thumbnail;
    const value = closure_0.get(optionId.optionId);
    let tmp2 = optionId;
    if (null != value) {
      const obj = { asset: thumbnail };
      const merged = Object.assign(optionId);
      const tmp8 = CheckpointCharacterTraits.CHECKPOINT_TRAIT_TO_OPTION_ASSETS[CheckpointTrait.CheckpointTrait.OUTFIT][value];
      thumbnail = undefined;
      if (tmp8 != null) {
        thumbnail = tmp8.thumbnail;
      }
      tmp2 = obj;
    }
    return tmp2;
  });
}
export const CUSTOMIZATION_OPTION_TO_TRAIT = obj3;
export function getCustomizationOptionForCharacterStage(characterStage) {
  return obj4[characterStage];
}
export function getIsTraitRarityVisible(customizationOption) {
  if (obj.BASE !== customizationOption) {
    if (obj.OUTFIT_COLOR !== customizationOption) {
      return true;
    }
  }
  return false;
}
export function makeTraitRaritySorter(rarityOrder) {
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
}
export function isNoneOption(traitOption) {
  const obj = CheckpointCharacterTraits;
  return obj.isTraitNoneOptionId(traitOption.trait, traitOption.optionId);
}
export { getPlaintextAssetDescription };
export function getAssetAccessibilityLabel(getName, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.skipRarity;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.skipDescription;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [getName.getName()];
  if (getName.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.LOCKED) {
    const push2 = items.push;
    const intl2 = tmp(1112).intl;
    push2(intl2.string(_modDef3440.AEDeza));
  } else if (getName.status === CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED) {
    const push = items.push;
    const intl = tmp(1112).intl;
    push(intl.string(_modDef3440.F52sSw));
  }
  if (!flag) {
    if (null != getName.rarity) {
      const push3 = items.push;
      const intl3 = tmp(1112).intl;
      push3(intl3.string(_false[getName.rarity]));
    }
  }
  if (!flag2) {
    const tmp11 = getPlaintextAssetDescription(getName);
    if (null != tmp11) {
      items.push(tmp11);
    }
  }
  return items.join(", ");
}
export function getNitroLockedMessage(checkpointRouteBlockedTrait) {
  let stringResult;
  if (null != obj13[checkpointRouteBlockedTrait]) {
    const intl = intl7.intl;
    stringResult = intl.string(tmp);
  }
  return stringResult;
}
export function getCheckpointRouteBlockedTrait(activeRoute, arr) {
  let closure_0;
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    return arr[0];
  } else {
    const tmpResult = require("CheckpointNavigation");
    if (tmpResult.isCheckpointCustomizationRoute(activeRoute)) {
      const tmpResult2 = require("CheckpointNavigation");
      const tmp4 = obj4[tmpResult2.getCheckpointRoutePresentation(tmpResult2, activeRoute).characterStage];
      _require = tmp4;
      if (null != tmp4) {
        return arr.find((item) => item === obj3[closure_0]);
      }
    }
  }
}
export function getChamferedRectPoints(width, height, arg2) {
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
  const mapped = items1.map(f88598);
  return mapped.join(" ");
}
export const TRAIT_OPTION_STROKE_WIDTH = 2;
export function getTraitOptionShapePoints(width, height) {
  const result = 16 * width / React3;
  const items = [1, 1];
  const items1 = [items, , , , ];
  const items2 = [width - 1 - result, 1];
  items1[1] = items2;
  const items3 = [width - 1, 1 + result];
  items1[2] = items3;
  const items4 = [width - 1, height - 1];
  items1[3] = items4;
  const items5 = [1, height - 1];
  items1[4] = items5;
  const mapped = items1.map(f88598);
  return mapped.join(" ");
}
