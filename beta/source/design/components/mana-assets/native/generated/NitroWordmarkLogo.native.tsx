// Module ID: 6546
// Function ID: 6547
// Name: NitroWordmarkLogo
// Dependencies: [17, 21, 558, 568, 580, 4462, 6547, 2]

// Module 6546 (NitroWordmarkLogo)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4462 */;
import _modDef6547 from "module_6547" /* 6547 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const jsx = jsxProd.jsx;
let result = size.fileFinishedImporting("design/components/mana-assets/native/generated/NitroWordmarkLogo.native.tsx");

export const NitroWordmarkLogo = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ accessible, accessibilityLabel, resizeMode, color, width, height, scale } = arg0);
  if (undefined === color) {
    color = nativeDefault.colors.ICON_STRONG;
  }
  let num = 200;
  if (undefined !== width) {
    num = width;
  }
  let num2 = 36;
  if (undefined !== height) {
    num2 = height;
  }
  let num3 = 1;
  if (undefined !== scale) {
    num3 = scale;
  }
  const token = useToken.useToken(color);
  if (null != token) {
    if (cResult[0] !== token) {
      const obj2 = { tintColor: token };
      cResult[0] = token;
      cResult[1] = obj2;
    }
  } else {
    if (tmp6) {
      if (cResult[2] !== color) {
        const obj3 = { tintColor: color };
        cResult[2] = color;
        cResult[3] = obj3;
      }
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { uri: _modDef6547 };
      cResult[4] = obj4;
      let tmp12 = obj4;
    } else {
      tmp12 = cResult[4];
    }
    const result = num * num3;
    const result1 = num2 * num3;
    if (cResult[5] === result) {
      if (cResult[6] === result1) {
        let tmp16 = cResult[7];
      }
      if (cResult[8] === tmp16) {
        if (cResult[9] === tmp7) {
          let tmp17 = cResult[10];
        }
        if (cResult[11] === accessibilityLabel) {
          if (cResult[12] === accessible) {
            if (cResult[13] === resizeMode) {
              if (cResult[14] === tmp17) {
                let tmp18 = cResult[15];
              }
              return tmp18;
            }
          }
        }
        const obj5 = { fadeDuration: 0, source: tmp12, style: tmp17, accessible, accessibilityLabel, resizeMode };
        const tmp21 = <Image fadeDuration={0} source={tmp12} style={tmp17} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
        cResult[11] = accessibilityLabel;
        cResult[12] = accessible;
        cResult[13] = resizeMode;
        cResult[14] = tmp17;
        cResult[15] = tmp21;
        tmp18 = tmp21;
      }
      const items = [tmp16, tmp7];
      cResult[8] = tmp16;
      cResult[9] = tmp7;
      cResult[10] = items;
      tmp17 = items;
    }
    const size = { width: result, height: result1 };
    cResult[5] = result;
    cResult[6] = result1;
    cResult[7] = size;
    tmp16 = size;
    tmp6 = null != color && typeof color === "string";
  }
}) : ((color) => {
  let ICON_STRONG = color.color;
  ({ accessible, accessibilityLabel, resizeMode } = color);
  if (ICON_STRONG === undefined) {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  let num = color.width;
  if (num === undefined) {
    num = 200;
  }
  let num2 = color.height;
  if (num2 === undefined) {
    num2 = 36;
  }
  let num3 = color.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const token = useToken.useToken(ICON_STRONG);
  if (null != token) {
    const obj2 = { tintColor: token };
    let tmp6 = obj2;
  } else {
    if (tmp5) {
      const obj3 = { tintColor: ICON_STRONG };
      tmp6 = obj3;
    }
    tmp5 = null != ICON_STRONG && typeof ICON_STRONG === "string";
  }
  const obj4 = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj4.source = { uri: _modDef6547 };
  const size = { width: num * num3, height: num2 * num3 };
  const items = [size, tmp6];
  obj4.style = items;
  obj4.accessible = accessible;
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.resizeMode = resizeMode;
  return <Image fadeDuration={0} source={null} style={null} accessible={null} accessibilityLabel={null} resizeMode={null} />;
});
