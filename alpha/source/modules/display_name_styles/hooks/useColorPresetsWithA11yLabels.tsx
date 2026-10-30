// Module ID: 17267
// Function ID: 17268
// Name: useColorPresetsWithA11yLabels
// Dependencies: [19, 1401, 1114, 2931, 1091, 2]
// Exports: default

// Module 17267 (useColorPresetsWithA11yLabels)
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1401 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let colors;

const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default function useColorPresetsWithA11yLabels(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let colorPaletteList = closure_1;
    if (closure_1 == null) {
      let obj = DisplayNameStylesUtils;
      colorPaletteList = obj.createColorPaletteList(closure_0, null);
    }
    return colorPaletteList.map((colors, index) => {
      let FHfTsV;
      let formatToPlainString;
      let mapped;
      let obj2;
      colors = colors.colors;
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
