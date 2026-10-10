// Module ID: 6656
// Function ID: 6657
// Name: BackgroundImage
// Dependencies: [19, 17, 21, 558, 576, 5031, 4969, 6657, 6658, 6156, 2]

// Module 6656 (BackgroundImage)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useThemeDefault from "useTheme" /* 5031 */;
import FastImageDefault from "FastImage" /* 6156 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let tmp;
const shared = tmp(4969);
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BackgroundImage(arg0) {
  let backgroundImageCover;
  let backgroundImageSource;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  const tmp6 = useThemeDefault();
  if (cResult[0] !== (undefined !== backgroundImageCover && backgroundImageCover)) {
    const items = [hasOwnProperty.absoluteFill, undefined !== backgroundImageCover && backgroundImageCover ? { width: "100%", height: "100%" } : { width: "100%" }];
    cResult[0] = undefined !== backgroundImageCover && backgroundImageCover;
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (null == backgroundImageSource) {
    let tmp5Result;
    const tmpResult = shared;
    if (tmpResult.isThemeDark(tmp6)) {
      tmp5Result = tmp5(6657);
    } else {
      tmp5Result = tmp5(6658);
    }
    backgroundImageSource = tmp5Result;
  }
  if (cResult[2] === tmp7) {
    let tmp10;
    let tmp11;
    if (cResult[3] === backgroundImageSource) {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp10) {
      FastImageDefault;
      const merged = Object.assign(tmp10);
      const tmp19 = <React3 style={hasOwnProperty.absoluteFill}>{null}</React3>;
      cResult[5] = tmp10;
      cResult[6] = tmp19;
      tmp11 = tmp19;
    } else {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const obj4 = { style: tmp7, source: backgroundImageSource };
  cResult[2] = tmp7;
  cResult[3] = backgroundImageSource;
  cResult[4] = obj4;
  tmp10 = obj4;
}) : (function BackgroundImage(backgroundImageSource) {
  let closure_2;
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = flag(5031)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  const memo = react.useMemo(() => {
    let tmp;
    const items = [hasOwnProperty.absoluteFill, ];
    const obj = { style: items, source: tmp };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    tmp = backgroundImageSource;
    if (null == backgroundImageSource) {
      let tmp5Result;
      const obj2 = shared;
      if (obj2.isThemeDark(closure_2)) {
        tmp5Result = tmp5(6657);
      } else {
        tmp5Result = tmp5(6658);
      }
      tmp = tmp5Result;
    }
    return obj;
  }, items);
  let obj2 = {};
  flag(6156);
  const merged = Object.assign(memo);
  return <closure_4 style={closure_5.absoluteFill}>{null}</closure_4>;
});
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default tmp3;
