// Module ID: 6397
// Function ID: 6398
// Name: CheckpointCharacterAccessibilityUtils
// Dependencies: [6398, 6400, 6074, 1125, 3089, 2]
// Exports: getCheckpointCharacterAccessibilityLabel

// Module 6397 (CheckpointCharacterAccessibilityUtils)
import _modDef3089 from "module_3089" /* 3089 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6074 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6398 */;
import CheckpointTraitOptionNames from "CheckpointTraitOptionNames" /* 6400 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE, CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR, CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCharacterAccessibilityUtils.tsx");

export const getCheckpointCharacterAccessibilityLabel = function getCheckpointCharacterAccessibilityLabel(character) {
  let listFormat;
  _require = character;
  items = [];
  const item = items.forEach((item) => {
    let intl2;
    let tmpResult6;
    const tmp3 = character[CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TO_TRAIT[item]];
    let tmp4;
    if (null != tmp3) {
      const tmp5 = CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TO_TRAIT[item];
      let tmp6;
      const tmpResult = CheckpointCustomizationUtils;
      if (!tmpResult.isTraitNoneOptionId(tmp5, tmp3)) {
        const tmp7 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[tmp5];
        if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === item) {
          const tmpResult4 = CheckpointCharacterTraits;
          const outfitDefaultOptionId = tmpResult4.getOutfitDefaultOptionId(tmp3);
          let tmp9;
          if (null != outfitDefaultOptionId) {
            tmp9 = tmp7[outfitDefaultOptionId];
          }
          tmp6 = tmp9;
        } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR === item) {
          const tmpResult5 = CheckpointCharacterTraits;
          if (tmpResult5.getOutfitDefaultOptionId(tmp3) !== tmp3) {
            tmp6 = tmp(6400).CHECKPOINT_OUTFIT_TO_COLOR_NAME[tmp3];
          }
        } else {
          tmp6 = tmp7[tmp3];
        }
      }
      tmp4 = tmp6;
    }
    if (null != tmp4) {
      const push = items.push;
      const intl = tmp(1125).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { category: tmpResult6.getCustomizationOptionName(item), name: intl2.string(tmp4) };
      const prop = _modDef3089["Z+HdIo"];
      tmpResult6 = CheckpointCustomizationUtils;
      intl2 = tmp(1125).intl;
      push(formatToPlainString(prop, obj));
    }
  });
  let intl = require("intl").intl;
  let formatToPlainString = intl.formatToPlainString;
  let obj = { traits: listFormat.format(items) };
  const mQNR4x = items(3089).mQNR4x;
  listFormat = new Intl.ListFormat(require("intl").intl.currentLocale, { type: "conjunction" });
  return formatToPlainString(mQNR4x, obj);
};
