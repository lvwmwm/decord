// Module ID: 5625
// Function ID: 5626
// Name: typographyVariantRemap
// Dependencies: [32, 5626, 2]
// Exports: remapTypographyVariant

// Module 5625 (typographyVariantRemap)
import TypographyVariantRemap from "TypographyVariantRemap" /* 5626 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/typographyVariantRemap.tsx");

export function remapTypographyVariant(enabledExperiments, variant, arg2) {
  const obj = TypographyVariantRemap.TYPOGRAPHY_EXPERIMENT_REMAPS[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    let tmp4 = tmp3[1];
    if (enabledExperiments.includes(tmp3[0])) {
      let value;
      if (arg2) {
        let heading = tmp4.heading;
        value = heading.get(variant);
      }
      if (value == null) {
        let text = tmp4.text;
        value = text.get(variant);
      }
      if (null != value) {
        obj.return();
        return value;
      }
    }
    continue;
  }
  return variant;
}
