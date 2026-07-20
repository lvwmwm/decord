// Module ID: 7181
// Function ID: 57824
// Name: Divider
// Dependencies: []
// Exports: default

// Module 7181 (Divider)
let DARK;
let DARKER;
let LIGHT;
let MIDNIGHT;
let Platform;
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet: closure_5, Platform } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
let closure_7 = obj.createStyles((arg0) => {
  let obj = { divider: {} };
  obj = { marginLeft: 0, height: closure_5.hairlineWidth, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, marginTop: -1 * closure_5.hairlineWidth };
  obj.dividerOuter = obj;
  obj.dividerHasIcon = { marginLeft: 56 };
  return obj;
});
obj = { [LIGHT]: importDefault(dependencyMap[5]).unsafe_rawColors.BLACK, [DARK]: importDefault(dependencyMap[5]).unsafe_rawColors.WHITE, [DARKER]: importDefault(dependencyMap[5]).unsafe_rawColors.WHITE, [MIDNIGHT]: importDefault(dependencyMap[5]).unsafe_rawColors.WHITE };
({ LIGHT, DARK, DARKER, MIDNIGHT } = arg1(dependencyMap[2]).ThemeTypes);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/void/Form/native/FormDivider.tsx");

export default function Divider(outer) {
  let flag = outer.outer;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = outer.iconPush;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback(importDefault(dependencyMap[6])("FormDivider"));
  let obj = arg1(dependencyMap[7]);
  const themeContext = obj.useThemeContext();
  const theme = themeContext.theme;
  const profileThemeValues = arg1(dependencyMap[8]).useProfileThemeValues(theme);
  let tmp5 = null;
  if (tmp4) {
    obj = {};
    obj.backgroundColor = arg1(dependencyMap[9]).hexOpacityToRgba(obj[theme], profileThemeValues.dividerOpacity);
    tmp5 = obj;
    const obj4 = arg1(dependencyMap[9]);
  }
  let tmp10Result = null;
  if (!React.useContext(arg1(dependencyMap[10]).RedesignCompatContext)) {
    obj = {};
    const items = [flag ? tmp.dividerOuter : tmp.divider, , , ];
    if (flag2) {
      flag2 = tmp.dividerHasIcon;
    }
    items[1] = flag2;
    items[2] = outer.style;
    items[3] = tmp5;
    obj.style = items;
    tmp10Result = <closure_4 {...obj} />;
    const tmp10 = jsx;
    const tmp11 = closure_4;
  }
  return tmp10Result;
};
export const DIVIDER_COLORS = obj;
