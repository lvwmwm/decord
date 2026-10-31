// Module ID: 17330
// Function ID: 17331
// Name: useCustomSwatchA11y
// Dependencies: [19, 1090, 1113, 2]
// Exports: default

// Module 17330 (useCustomSwatchA11y)
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import intl2 from "intl" /* 1113 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useCustomSwatchA11y.tsx");

export default function useCustomSwatchA11y(selectedColors) {
  let formatToPlainStringResult;
  let hasCustomPalette;
  let hasCustomSwatchSelected;
  let mapped;
  let tmp16;
  selectedColors = selectedColors.selectedColors;
  ({ hasCustomPalette, hasCustomSwatchSelected } = selectedColors);
  let tmp3 = null;
  const id = react.useId();
  if (hasCustomPalette) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(items, selectedColors.map((item) => {
      const obj = utils_ColorUtils;
      return obj.getContrast(item, 0);
    }), 0);
    const _Math2 = Math;
    const applyResult = HermesBuiltin.apply(min, items, Math);
    const _Math3 = Math;
    const min2 = Math.min;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, selectedColors.map((item) => {
      const obj = utils_ColorUtils;
      return obj.getContrast(item, 16777215);
    }), 0);
    const _Math4 = Math;
    const applyResult1 = HermesBuiltin.apply(min2, items1, Math);
    const _Math5 = Math;
    const tmp15 = Math.max(applyResult, applyResult1) < 3;
    let obj = { useDarkIcon: tmp16, needsBacking: tmp15 };
    tmp3 = obj;
    tmp16 = tmp15 || applyResult >= applyResult1;
  }
  const obj2 = { customColorDescriptionId: id, customColorDescription: formatToPlainStringResult, iconContrast: tmp3 };
  formatToPlainStringResult = undefined;
  if (hasCustomSwatchSelected) {
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { color: mapped.join(", ") };
    const v7BFCRR = intl2.t["7BFCRR"];
    mapped = selectedColors.map(utils_ColorUtils.int2hex);
    formatToPlainStringResult = formatToPlainString(v7BFCRR, obj3);
  }
  return obj2;
};
