// Module ID: 14893
// Function ID: 14894
// Name: useColorPresetsWithA11yLabels
// Dependencies: [19, 1390, 1115, 2877, 1092, 2]
// Exports: default

// Module 14893 (useColorPresetsWithA11yLabels)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1390 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const getColorPresetsForEffect = DisplayNameStylesConstants.getColorPresetsForEffect;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default function useColorPresetsWithA11yLabels(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const arr = getColorPresetsForEffect(closure_0);
    return arr.map((colors, index) => {
      let FHfTsV;
      let formatToPlainString;
      let mapped;
      let obj2;
      const obj = { colors, a11yLabel: formatToPlainString(FHfTsV, obj2) };
      const intl = closure_1_0(closure_1_2[2]).intl;
      formatToPlainString = intl.formatToPlainString;
      obj2 = { number: index + 1, hexList: mapped.join(", ") };
      FHfTsV = closure_1_1(closure_1_2[3]).FHfTsV;
      mapped = colors.map(closure_1_0(closure_1_2[4]).int2hex);
      return obj;
    });
  }, items);
};
