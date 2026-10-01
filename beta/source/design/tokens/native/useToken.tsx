// Module ID: 4531
// Function ID: 4532
// Name: useToken
// Dependencies: [576, 4532, 12, 4540, 2]
// Exports: useToken

// Module 4531 (useToken)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import SemanticColorContext from "SemanticColorContext" /* 4532 */;
import native from "native" /* 4540 */;
import size from "module_2" /* 2 */;

const map = new Map();
const keys = Object.keys(nativeDefault.colors);
let closure_4 = fromEntries(keys.map((item) => {
  const items = [, ];
  const obj = _modDef12;
  items[0] = obj.kebabCase(item);
  items[1] = item;
  return items;
}));
let result = size.fileFinishedImporting("design/tokens/native/useToken.tsx");

export const useToken = function useToken(BACKGROUND_BASE_LOW, theme) {
  let str2;
  const obj = native;
  const themeContext = obj.useThemeContext();
  if (theme == null) {
    theme = themeContext.theme;
  }
  let tmp4 = BACKGROUND_BASE_LOW;
  if (null != BACKGROUND_BASE_LOW) {
    let tmp15;
    if (typeof BACKGROUND_BASE_LOW === "object") {
      if (null !== BACKGROUND_BASE_LOW) {
        if ("resolve" in BACKGROUND_BASE_LOW) {
          let resolveResult;
          const internal = nativeDefault.internal;
          if (!internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
            let enabledExperiments = themeContext.enabledExperiments;
            const resolve = BACKGROUND_BASE_LOW.resolve;
            if (enabledExperiments == null) {
              enabledExperiments = [];
            }
            const obj2 = { enabledExperiments, density: str2 };
            str2 = themeContext.density;
            if (str2 == null) {
              str2 = "compact";
            }
            resolveResult = resolve(obj2);
          }
          tmp4 = resolveResult;
        }
      }
    }
    const internal2 = nativeDefault.internal;
    let semanticColorName = BACKGROUND_BASE_LOW;
    if (internal2.isSemanticColor(BACKGROUND_BASE_LOW)) {
      const internal3 = tmp7(576).internal;
      semanticColorName = internal3.getSemanticColorName(BACKGROUND_BASE_LOW);
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + semanticColorName + "-" + themeContext.key + "-" + theme;
    const value = map.get(combined);
    let semanticColor2 = value;
    const obj3 = map;
    if (null != value) {
      if (null != semanticColor2) {
        const result = obj3.set(combined, semanticColor2);
        tmp15 = semanticColor2;
      }
    } else if (typeof BACKGROUND_BASE_LOW === "string") {
      tmp15 = BACKGROUND_BASE_LOW;
      if ("#" !== BACKGROUND_BASE_LOW[0]) {
        semanticColor2 = value;
        if (BACKGROUND_BASE_LOW in closure_4) {
          const internal5 = tmp7(576).internal;
          const resolveSemanticColor2 = internal5.resolveSemanticColor;
          const tmp17 = nativeDefault.colors[tmp16[BACKGROUND_BASE_LOW]];
          const tmpResult = SemanticColorContext;
          semanticColor2 = resolveSemanticColor2(theme, tmp17, tmpResult.getSemanticColorContextFromThemeContext(themeContext));
        }
      }
    } else {
      const internal6 = tmp7(576).internal;
      semanticColor2 = value;
      if (internal6.isSemanticColor(BACKGROUND_BASE_LOW)) {
        const internal4 = tmp7(576).internal;
        const resolveSemanticColor = internal4.resolveSemanticColor;
        const tmpResult2 = SemanticColorContext;
        semanticColor2 = resolveSemanticColor(theme, BACKGROUND_BASE_LOW, tmpResult2.getSemanticColorContextFromThemeContext(themeContext));
      }
    }
    resolveResult = tmp15;
  }
  return tmp4;
};
