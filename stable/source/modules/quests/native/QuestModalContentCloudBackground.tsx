// Module ID: 14646
// Function ID: 14647
// Name: QuestModalContentCloudBackground
// Dependencies: [19, 17, 21, 4837, 558, 576, 4769, 4542, 5292, 14647, 14648, 5896, 2]

// Module 14646 (QuestModalContentCloudBackground)
import react2 from "react" /* 576 */;
import themes from "themes" /* 4542 */;
import useTheme from "useTheme" /* 4769 */;
import LinearGradientDefault from "LinearGradient" /* 5292 */;
import FastImageDefault from "FastImage" /* 5896 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, StyleSheet: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0) => {
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  const obj = { height: 380, zIndex: 1 };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  const obj2 = { wrapper: obj, cloudsImage: obj3, cloudsImageLight: obj5, gradient: obj6, solidBackground: obj7 };
  const tmp3 = arg0 ? { top: "r" } : { bottom: "r" };
  const merged1 = Object.assign(tmp3);
  obj3 = { width: "100%" };
  const merged2 = Object.assign(tmp.absoluteFillObject);
  const tmp6 = arg0 ? { top: "r" } : { bottom: "r" };
  const merged3 = Object.assign(tmp6);
  if (arg0) {
    obj4 = {};
  } else {
    obj4 = { transform: items };
    items = [{ rotate: "180deg" }];
  }
  const merged4 = Object.assign(obj4);
  obj5 = { bottom: undefined, width: "100%" };
  const merged5 = Object.assign(tmp.absoluteFillObject);
  obj6 = { opacity: 1 };
  const merged6 = Object.assign(tmp.absoluteFillObject);
  obj7 = {};
  const merged7 = Object.assign(tmp.absoluteFillObject);
  return obj2;
});
let items = ["#292252FF", "#1E1F2200"];
const substr = items.slice();
let closure_9 = substr.reverse();
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let align;
  let imgStyle;
  let resizeMode;
  let style;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(21);
  ({ align, style, imgStyle, resizeMode } = arg0);
  let str = "bottom";
  if (undefined !== align) {
    str = align;
  }
  let str2 = "cover";
  if (undefined !== resizeMode) {
    str2 = resizeMode;
  }
  const tmp4 = closure_7("bottom" === str);
  const tmpResult = useTheme;
  const theme = tmpResult.useTheme();
  if (cResult[0] !== theme) {
    const tmpResult2 = themes;
    const isThemeDarkResult = tmpResult2.isThemeDark(theme);
    cResult[0] = theme;
    cResult[1] = isThemeDarkResult;
    tmp6 = isThemeDarkResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === style) {
    let tmp8;
    let tmp10Result;
    if (cResult[3] === tmp4.wrapper) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === str) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp4.gradient) {
          let tmp9;
          if (cResult[8] === tmp4.solidBackground) {
            tmp9 = cResult[9];
          }
          const tmp14 = tmp6 ? tmp4.cloudsImage : tmp4.cloudsImageLight;
          if (cResult[10] === imgStyle) {
            let tmp15;
            if (cResult[11] === tmp14) {
              tmp15 = cResult[12];
            }
            const tmp16Result = importDefault(tmp6 ? 14647 : 14648);
            if (cResult[13] === str2) {
              if (cResult[14] === tmp15) {
                let tmp18;
                if (cResult[15] === tmp16Result) {
                  tmp18 = cResult[16];
                }
                if (cResult[17] === tmp8) {
                  if (cResult[18] === tmp9) {
                    let tmp21;
                    if (cResult[19] === tmp18) {
                      tmp21 = cResult[20];
                    }
                    return tmp21;
                  }
                }
                const obj2 = { style: tmp8, children: items };
                items = [tmp9, tmp18];
                const tmp24 = metroRequire(_false, obj2);
                cResult[17] = tmp8;
                cResult[18] = tmp9;
                cResult[19] = tmp18;
                cResult[20] = tmp24;
                tmp21 = tmp24;
              }
            }
            const obj3 = { style: tmp15, source: tmp16Result, resizeMode: str2 };
            const tmp20 = hasOwnProperty(FastImageDefault, obj3);
            cResult[13] = str2;
            cResult[14] = tmp15;
            cResult[15] = tmp16Result;
            cResult[16] = tmp20;
            tmp18 = tmp20;
          }
          const items1 = [tmp14, imgStyle];
          cResult[10] = imgStyle;
          cResult[11] = tmp14;
          cResult[12] = items1;
          tmp15 = items1;
        }
      }
    }
    if (tmp6) {
      const obj4 = { colors: "top" === str ? items : closure_9, style: tmp4.gradient };
      tmp10Result = tmp10(LinearGradientDefault, obj4);
    } else {
      const obj5 = { style: tmp4.solidBackground };
      tmp10Result = tmp10(_false, obj5);
    }
    cResult[5] = str;
    cResult[6] = tmp6;
    cResult[7] = tmp4.gradient;
    cResult[8] = tmp4.solidBackground;
    cResult[9] = tmp10Result;
    tmp9 = tmp10Result;
  }
  const items2 = [tmp4.wrapper, style];
  cResult[2] = style;
  cResult[3] = tmp4.wrapper;
  cResult[4] = items2;
  tmp8 = items2;
}) : ((align) => {
  let imgStyle;
  let items1;
  let items2;
  let style;
  let tmp7Result;
  let tmp9;
  align = align.align;
  let str = "bottom";
  if (undefined !== align) {
    str = align;
  }
  const resizeMode = align.resizeMode;
  let str2 = "cover";
  ({ style, imgStyle } = align);
  if (undefined !== resizeMode) {
    str2 = resizeMode;
  }
  const tmp = closure_7("bottom" === str);
  const isThemeDark = themes.isThemeDark;
  themes;
  const obj = useTheme;
  const isThemeDarkResult = isThemeDark(obj.useTheme());
  const obj2 = { style: items, children: items1 };
  items = [tmp.wrapper, style];
  const tmp5 = metroRequire;
  if (isThemeDarkResult) {
    const obj3 = { colors: "top" === str ? items : closure_9, style: tmp.gradient };
    tmp7Result = tmp7(LinearGradientDefault, obj3);
    tmp9 = tmp7;
  } else {
    const obj4 = { style: tmp.solidBackground };
    tmp7Result = tmp7(tmp6, obj4);
    tmp9 = tmp7;
  }
  items1 = [tmp7Result, ];
  const obj5 = { style: items2, source: importDefault(isThemeDarkResult ? 14647 : 14648), resizeMode: str2 };
  items2 = [isThemeDarkResult ? tmp.cloudsImage : tmp.cloudsImageLight, imgStyle];
  const tmp12 = FastImageDefault;
  items1[1] = tmp9(tmp12, obj5);
  return tmp5(_false, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestModalContentCloudBackground.tsx");

export default tmp5;
