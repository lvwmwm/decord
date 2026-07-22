// Module ID: 3832
// Function ID: 31990
// Name: map
// Dependencies: []
// Exports: useToken

// Module 3832 (map)
const map = new Map();
const keys = Object.keys(importDefault(dependencyMap[0]).colors);
let closure_4 = Object.fromEntries(keys.map((arg0) => {
  const items = [importDefault(dependencyMap[2]).kebabCase(arg0), arg0];
  return items;
}));
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/tokens/native/useToken.tsx");

export const useToken = function useToken(BACKGROUND_BASE_LOW, theme) {
  let obj = BACKGROUND_BASE_LOW;
  const themeContext = theme(dependencyMap[3]).useThemeContext();
  let tmp2 = null;
  if (null == theme) {
    theme = themeContext.theme;
  }
  if (tmp2 == obj) {
    return obj;
  } else {
    let str7 = typeof obj;
    if ("object" === str7) {
      if (tmp2 !== obj) {
        if ("resolve" in obj) {
          const internal = importDefault(dependencyMap[0]).internal;
          if (!internal.isSemanticColor(obj)) {
            obj = {};
            let enabledExperiments = themeContext.enabledExperiments;
            if (tmp2 == enabledExperiments) {
              enabledExperiments = [];
            }
            obj.enabledExperiments = enabledExperiments;
            const density = themeContext.density;
            let str2 = "compact";
            if (tmp2 != density) {
              str2 = density;
            }
            obj.density = str2;
            let resolveResult = obj.resolve(obj);
          }
        }
      }
    }
    const internal2 = importDefault(dependencyMap[0]).internal;
    let semanticColorName = obj;
    if (internal2.isSemanticColor(obj)) {
      const internal3 = importDefault(dependencyMap[0]).internal;
      semanticColorName = internal3.getSemanticColorName(obj);
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + semanticColorName + "-" + themeContext.key + "-" + theme;
    const value = map.get(combined);
    let semanticColor = value;
    if (tmp2 != value) {
      tmp2 = tmp2 != semanticColor;
      if (tmp2) {
        tmp2 = map;
        const result = map.set(combined, semanticColor);
        let tmp23 = semanticColor;
      }
    } else if ("string" === str7) {
      str7 = "#";
      tmp23 = obj;
      if ("#" !== obj[0]) {
        str7 = obj in closure_4;
        semanticColor = value;
        if (str7) {
          const internal5 = importDefault(dependencyMap[0]).internal;
          obj = theme(dependencyMap[1]);
          semanticColor = internal5.resolveSemanticColor(theme, importDefault(dependencyMap[0]).colors[closure_4[obj]], obj.getSemanticColorContextFromThemeContext(themeContext));
        }
      }
    } else {
      str7 = importDefault(dependencyMap[0]).internal;
      semanticColor = value;
      if (str7.isSemanticColor(obj)) {
        const internal4 = importDefault(dependencyMap[0]).internal;
        semanticColor = internal4.resolveSemanticColor(theme, obj, theme(dependencyMap[1]).getSemanticColorContextFromThemeContext(themeContext));
        const obj4 = theme(dependencyMap[1]);
      }
    }
    resolveResult = tmp23;
  }
};
