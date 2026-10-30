// Module ID: 6428
// Function ID: 6429
// Name: CheckpointCharacterAccessibilityUtils
// Dependencies: [6429, 6431, 6106, 1114, 3091, 2]
// Exports: getCheckpointCharacterAccessibilityLabel

// Module 6428 (CheckpointCharacterAccessibilityUtils)
import _modDef3091 from "module_3091" /* 3091 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6106 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import CheckpointTraitOptionNames from "CheckpointTraitOptionNames" /* 6431 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE, CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR, CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCharacterAccessibilityUtils.tsx");

export function getCheckpointCharacterAccessibilityLabel(character) {
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
            tmp6 = tmp(6431).CHECKPOINT_OUTFIT_TO_COLOR_NAME[tmp3];
          }
        } else {
          tmp6 = tmp7[tmp3];
        }
      }
      tmp4 = tmp6;
    }
    if (null != tmp4) {
      const push = items.push;
      const intl = tmp(1114).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { category: tmpResult6.getCustomizationOptionName(item), name: intl2.string(tmp4) };
      const prop = _modDef3091["Z+HdIo"];
      tmpResult6 = CheckpointCustomizationUtils;
      intl2 = tmp(1114).intl;
      push(formatToPlainString(prop, obj));
    }
  });
  let intl = require("intl").intl;
  let formatToPlainString = intl.formatToPlainString;
  let obj = { traits: listFormat.format(items) };
  const mQNR4x = items(3091).mQNR4x;
  listFormat = new Intl.ListFormat(require("intl").intl.currentLocale, { type: "conjunction" });
  return formatToPlainString(mQNR4x, obj);
}
