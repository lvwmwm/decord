// Module ID: 14256
// Function ID: 14257
// Name: RoleDot
// Dependencies: [19, 17, 21, 5090, 587, 1381, 558, 576, 5382, 5404, 5387, 1387, 2]

// Module 14256 (RoleDot)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import useFontScale from "useFontScale" /* 5382 */;
import useHasEnhancedRoleColorsDefault from "useHasEnhancedRoleColors" /* 5404 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp7;
const LinearGradientDefault = tmp7(5387);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexShrink: 0 }, background: { position: "relative" }, backgroundColor: obj2, borderBase: obj3, borderColor: obj4, dot: { borderRadius: 10, position: "absolute" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.md };
obj4 = { borderRadius: nativeDefault.radii.md, opacity: 0.4 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleDot(guildId) {
  let background;
  let color;
  let colors;
  let containerStyles;
  let items;
  let items1;
  let items2;
  let items4;
  let result1;
  let result2;
  let size1;
  const obj = react2;
  const cResult = obj.c(33);
  ({ color, colors, size, background, containerStyles } = guildId);
  let str = "normal";
  guildId = guildId.guildId;
  if (undefined !== size) {
    str = size;
  }
  const tmp4 = undefined === background || background;
  const tmp5 = closure_6();
  const tmpResult = useFontScale;
  const fontScale = tmpResult.useFontScale();
  const tmp8 = useHasEnhancedRoleColorsDefault(guildId, null);
  if (null == color) {
    if (null == colors) {
      return null;
    }
  }
  if (cResult[0] === fontScale) {
    let tmp9;
    if (cResult[1] === str) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === containerStyles) {
      if (cResult[4] === tmp9.container) {
        let tmp15;
        if (cResult[5] === tmp5.container) {
          tmp15 = cResult[6];
        }
        let backgroundColor = null;
        if (tmp4) {
          backgroundColor = tmp5.backgroundColor;
        }
        if (cResult[7] === tmp9.background) {
          if (cResult[8] === tmp5.background) {
            let tmp17;
            let tmp19;
            if (cResult[9] === backgroundColor) {
              tmp17 = cResult[10];
            }
            if (cResult[11] !== color) {
              const obj2 = { backgroundColor: color };
              cResult[11] = color;
              cResult[12] = obj2;
              tmp19 = obj2;
            } else {
              tmp19 = cResult[12];
            }
            if (cResult[13] === tmp9.border) {
              if (cResult[14] === tmp5.borderColor) {
                let tmp20;
                if (cResult[15] === tmp19) {
                  tmp20 = cResult[16];
                }
                if (cResult[17] === tmp5.borderBase) {
                  let tmp24;
                  let tmp28;
                  if (cResult[18] === tmp20) {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === color) {
                    if (cResult[21] === colors) {
                      if (cResult[22] === tmp9.dot) {
                        if (cResult[23] === tmp8) {
                          if (cResult[24] === tmp5.dot) {
                            tmp28 = cResult[25];
                          }
                          if (cResult[26] === tmp24) {
                            if (cResult[27] === tmp28) {
                              let tmp35;
                              if (cResult[28] === tmp17) {
                                tmp35 = cResult[29];
                              }
                              if (cResult[30] === tmp35) {
                                let tmp39;
                                if (cResult[31] === tmp15) {
                                  tmp39 = cResult[32];
                                }
                                return tmp39;
                              }
                              const obj3 = { style: tmp15, children: tmp35 };
                              const tmp42 = React3(View, obj3);
                              cResult[30] = tmp35;
                              cResult[31] = tmp15;
                              cResult[32] = tmp42;
                              tmp39 = tmp42;
                            }
                          }
                          const obj4 = { style: tmp17, children: items };
                          items = [tmp24, tmp28];
                          const tmp38 = hasOwnProperty(View, obj4);
                          cResult[26] = tmp24;
                          cResult[27] = tmp28;
                          cResult[28] = tmp17;
                          cResult[29] = tmp38;
                          tmp35 = tmp38;
                        }
                      }
                    }
                  }
                  if (tmp8) {
                    if (null != colors) {
                      let tmp29Result;
                      if (null != colors.secondaryColor) {
                        const obj5 = { colors: items1.filter(GlobalUtils.isNotNullish), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items2 };
                        items1 = [, , ];
                        ({ primaryColor: arr5[0], secondaryColor: arr5[1], tertiaryColor: arr5[2] } = colors);
                        items2 = [tmp5.dot, tmp9.dot];
                        const tmp7Result = LinearGradientDefault;
                        tmp29Result = React3(tmp7Result, obj5);
                      }
                      cResult[20] = color;
                      cResult[21] = colors;
                      cResult[22] = tmp9.dot;
                      cResult[23] = tmp8;
                      cResult[24] = tmp5.dot;
                      cResult[25] = tmp29Result;
                      tmp28 = tmp29Result;
                    }
                  }
                  const items3 = [tmp5.dot, tmp9.dot, ];
                  const obj6 = { style: items3 };
                  const obj7 = { backgroundColor: color };
                  items3[2] = obj7;
                  tmp29Result = React3(View, obj6);
                }
                const obj8 = { style: tmp5.borderBase, children: tmp20 };
                const tmp27 = React3(View, obj8);
                cResult[17] = tmp5.borderBase;
                cResult[18] = tmp20;
                cResult[19] = tmp27;
                tmp24 = tmp27;
              }
            }
            const obj9 = { style: items4 };
            items4 = [tmp5.borderColor, tmp9.border, tmp19];
            const tmp23 = React3(View, obj9);
            cResult[13] = tmp9.border;
            cResult[14] = tmp5.borderColor;
            cResult[15] = tmp19;
            cResult[16] = tmp23;
            tmp20 = tmp23;
          }
        }
        const items5 = [tmp5.background, backgroundColor, tmp9.background];
        cResult[7] = tmp9.background;
        cResult[8] = tmp5.background;
        cResult[9] = backgroundColor;
        cResult[10] = items5;
        tmp17 = items5;
      }
    }
    const items6 = [tmp5.container, tmp9.container, containerStyles];
    cResult[3] = containerStyles;
    cResult[4] = tmp9.container;
    cResult[5] = tmp5.container;
    cResult[6] = items6;
    tmp15 = items6;
  }
  let num = 16;
  if ("normal" === str) {
    num = 20;
  }
  const result = num * fontScale;
  const obj10 = { paddingRight: 2 * fontScale, paddingTop: result1, height: result };
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isAndroid()) {
    result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  const sum = result / 2 + 2;
  const diff = sum - 2;
  const obj11 = { container: obj10, background: { height: result, width: result, padding: (result - sum) / 2 }, border: { height: sum, width: sum }, dot: size1 };
  size1 = { height: diff, width: diff, top: result2, left: result2 };
  result2 = diff / 2;
  cResult[0] = fontScale;
  cResult[1] = str;
  cResult[2] = obj11;
  tmp9 = obj11;
}) : (function RoleDot(background) {
  let color;
  let colors;
  let containerStyles;
  let guildId;
  let items;
  let items2;
  let items4;
  let items5;
  let result1;
  let result2;
  ({ color, colors, size } = background);
  if (size === undefined) {
    size = "normal";
  }
  let flag = background.background;
  if (flag === undefined) {
    flag = true;
  }
  ({ containerStyles, guildId } = background);
  const tmp = closure_6();
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const tmp6 = useHasEnhancedRoleColorsDefault(guildId, null);
  if (null == color) {
    if (null == colors) {
      return null;
    }
  }
  let num = 16;
  if ("normal" === size) {
    num = 20;
  }
  const result = num * fontScale;
  const obj2 = { paddingRight: 2 * fontScale, paddingTop: result1, height: result };
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  const sum = result / 2 + 2;
  const diff = sum - 2;
  const size1 = { height: result, width: result, padding: (result - sum) / 2 };
  const size2 = { height: diff, width: diff, top: result2, left: result2 };
  result2 = diff / 2;
  const obj3 = { style: items, children: null };
  items = [tmp.container, obj2, containerStyles];
  const items1 = [tmp.background, , ];
  let backgroundColor = null;
  const tmp14 = hasOwnProperty;
  if (flag) {
    backgroundColor = tmp.backgroundColor;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = backgroundColor;
  items1[2] = size1;
  const obj5 = { style: tmp.borderBase, children: React3(View, { style: items2 }) };
  items2 = [tmp.borderColor, { height: sum, width: sum }, ];
  items2[2] = { backgroundColor: color };
  const items3 = [React3(View, obj5), ];
  if (tmp6) {
    if (null != colors) {
      let tmp12Result;
      if (null != colors.secondaryColor) {
        const obj6 = { colors: items4.filter(GlobalUtils.isNotNullish), start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items5 };
        items4 = [, , ];
        ({ primaryColor: arr6[0], secondaryColor: arr6[1], tertiaryColor: arr6[2] } = colors);
        items5 = [tmp.dot, size2];
        const tmp5Result = LinearGradientDefault;
        tmp12Result = tmp12(tmp5Result, obj6);
      }
      items3[1] = tmp12Result;
      obj4.children = items3;
      obj3.children = tmp14(View, obj4);
      return React3(View, obj3);
    }
  }
  const items6 = [tmp.dot, size2, { backgroundColor: color }];
  tmp12Result = tmp12(tmp13, { style: items6 });
});
let size = size_mod;
let result = size.fileFinishedImporting("design/void/RoleDot/native/RoleDot.tsx");

export const RoleDot = tmp5;
