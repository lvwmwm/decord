// Module ID: 15697
// Function ID: 15698
// Name: useColorPresetsWithA11yLabels
// Dependencies: [19, 1390, 1115, 2876, 1092, 2]
// Exports: default

// Module 15697 (useColorPresetsWithA11yLabels)
import noop from "module_19" /* 19 */;

const require = fn;
const getColorPresetsForEffect = fn(1390).getColorPresetsForEffect;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useColorPresetsWithA11yLabels.tsx");

export default function useColorPresetsWithA11yLabels(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => getColorPresetsForEffect(closure_0).map((colors, index) => {
    const obj = { colors, a11yLabel: null };
    const intl = closure_1_0(1115).intl;
    const obj2 = { number: index + 1, hexList: null };
    const mapped = colors.map(closure_1_0(1092).int2hex);
    obj2.hexList = mapped.join(", ");
    obj.a11yLabel = intl.formatToPlainString(closure_1_1(2876).FHfTsV, obj2);
    return obj;
  }), items);
};
