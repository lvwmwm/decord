// Module ID: 3834
// Function ID: 31995
// Name: map
// Dependencies: [689, 3835, 22, 3842, 2]
// Exports: useToken

// Module 3834 (map)
const require = arg1;
const map = new Map();
const keys = Object.keys(require("_createForOfIteratorHelperLoose").colors);
let closure_4 = Object.fromEntries(keys.map((arg0) => {
  const items = [importDefault(22).kebabCase(arg0), arg0];
  return items;
}));
let result = require("apply").fileFinishedImporting("design/tokens/native/useToken.tsx");

export const useToken = function useToken(BACKGROUND_BASE_LOW, theme) {
  let obj = BACKGROUND_BASE_LOW;
  const themeContext = require(3842) /* ManaContext */.useThemeContext();
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
          const internal = importDefault(689).internal;
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
    const internal2 = importDefault(689).internal;
    let semanticColorName = obj;
    if (internal2.isSemanticColor(obj)) {
      const internal3 = importDefault(689).internal;
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
        str7 = obj in table;
        semanticColor = value;
        if (str7) {
          const internal5 = importDefault(689).internal;
          obj = require(3835) /* getSemanticColorContextFromThemeContext */;
          semanticColor = internal5.resolveSemanticColor(theme, importDefault(689).colors[table[obj]], obj.getSemanticColorContextFromThemeContext(themeContext));
        }
      }
    } else {
      str7 = importDefault(689).internal;
      semanticColor = value;
      if (str7.isSemanticColor(obj)) {
        const internal4 = importDefault(689).internal;
        semanticColor = internal4.resolveSemanticColor(theme, obj, require(3835) /* getSemanticColorContextFromThemeContext */.getSemanticColorContextFromThemeContext(themeContext));
        const obj4 = require(3835) /* getSemanticColorContextFromThemeContext */;
      }
    }
    resolveResult = tmp23;
  }
};
